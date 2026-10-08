const sqlite3 = require("sqlite3").verbose();

const path = require("path");
const databasePath = path.resolve(
  process.env.DATABASE_PATH || "./data/tessa.db",
);

const db = new sqlite3.Database(databasePath, (err) => {
  if (err) {
    console.error("Error al conectar con la base de datos:", err.message);
    return;
  }

  console.log("Conexión exitosa a la base de datos SQLite");
});

module.exports = db;