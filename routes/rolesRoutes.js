const express = require ('express');
const router = express.Router();
const roleController = require('../controllers/roleController');

// Obtener todos los roles
router.get('/', roleController.getAllRoles);
// Obtener rol por ID
router.get('/:id', roleController.getRoleById);
// Crear un nuevo rol
router.post('/', roleController.createRole);
// Actualizar un rol existente
router.put('/:id', roleController.updateRole);
// Eliminar un rol
router.delete('/:id', roleController.deleteRole);

module.exports = router;