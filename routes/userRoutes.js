const express = require ('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Obtener todos los usuarios
router.get('/', userController.getAllUsers);

// Obtener usuario por ID
router.get('/:id', userController.getUserById);

// Crear un nuevo usuario
router.post('/', userController.createUser);

// Actualizar un usuario existente
router.put('/:id', userController.updateUser);

// Eliminar un usuario
router.delete('/:id', userController.deleteUser);

module.exports = router;