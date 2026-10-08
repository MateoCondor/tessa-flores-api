const db = require("../database");

function obtenerFlores() {
    return new Promise((resolve, reject) => {
        const query = "SELECT * FROM VariedadFlor";
        db.all(query, [], (err, rows) => {
            if (err) {
                reject(err);
            } else {
                resolve(rows);
            }
        });
    });
}

function crearFlor(nombre, color, precio_tallo) {
    return new Promise((resolve, reject) => {
        const sql = "INSERT INTO VariedadFlor(nombre, color, precio_tallo) VALUES (?,?,?)";
        db.run(sql, [nombre, color, precio_tallo], function (err){
            if (err) {
                reject(err);
                return;
            }

            resolve({ 
                id: this.lastID,
                nombre, 
                color, 
                precio_tallo
            });
        });
    });
}

async function obtenerDescripcionAgronomica() {
    const response = await fetch(process.env.EXTERNAL_API_URL);

    if(!response.ok) {
        throw new Error(`Error al obtener la descripción agronómica: ${response.statusText}`);
    }

    const data = await response.json();
    return data.body;
}



module.exports = {
    obtenerFlores,
    crearFlor,
    obtenerDescripcionAgronomica
};