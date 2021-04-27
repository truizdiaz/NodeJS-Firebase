// Rutas para usuario

const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');


// api/usuarios
router.post('/', usuarioController.crearUsuario);
/* router.get('/', productoController.obtenerProductos);
router.put('/:id', productoController.actualizarProducto);
router.get('/:id', productoController.obtenerProducto);
router.delete('/:id', productoController.eliminarProducto); */

module.exports = router;