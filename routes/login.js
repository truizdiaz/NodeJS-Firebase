// Rutas para login

const express = require('express');
const router = express.Router();
const loginController = require('../controllers/loginController');

// api/login
router.post('/', loginController.loginUsuario);
router.post('/recuperarPassowrd', loginController.recuperarPassword);



module.exports = router;