const floresService = require('../services/flores.service');

async function obtenerFlores(req, res) {
    try {
        const flores = await floresService.obtenerFlores();
        const descripcion = await floresService.obtenerDescripcionAgronomica();

        const resultado = flores.map((flor) => ({...flor, descripcionAgronomica: descripcion }));
        res.json(resultado);
    } catch (error) {
        console.error('Error al obtener las flores:', error.message);
        res.status(500).json({ error: 'No se pudo obtener las flores' });
    }
}

async function crearFlor(req, res) {
    try {
        const { nombre, color, precio_tallo } = req.body;

        if (!nombre || !color || precio_tallo === undefined) {
            return res.status(400).json({ error: 'Los campos nombre, color y precio_tallo son requeridos' });
        }

        const flor = await floresService.crearFlor(nombre, color, precio_tallo);
        res.status(201).json(flor);
    } catch (error) {
        console.error('Error al crear la flor:', error.message);
        res.status(500).json({ error: 'No se pudo crear la flor' });
    }
}

module.exports = {
    obtenerFlores,
    crearFlor
};


