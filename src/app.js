require('dotenv').config();

const express = require('express');
const path = require('path');
const floresRoutes = require('./routes/flores.routes');

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));

app.use(floresRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});
