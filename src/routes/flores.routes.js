const express = require('express');
const router = express.Router();
const floresController = require('../controllers/flores.controller');

router.get('/flores', floresController.obtenerFlores);
router.post('/flores', floresController.crearFlor);

module.exports = router;