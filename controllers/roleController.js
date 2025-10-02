const userModel = require('../models/rolesModel');

// Obtener todos los roles
exports.getAllRoles = async (req, res) => {
    const roles = await userModel.getAllRoles();
    res.json(roles);
}

// Obtener rol por ID
exports.getRoleById = async (req, res) => {
    const id = parseInt(req.params.id);
    const role = await userModel.getRoleById(id);
    if (role) {
        res.json(role);
    } else {
        res.status(404).json({ message: 'Rol no encontrado' });
    }
}

// Crear un nuevo rol
exports.createRole = async (req, res) => {
    const { name, description } = req.body;
    if (!name || !description) {
        return res.status(400).json({ message: 'Todos los campos son obligatorios' });
    }
    const newRole = await userModel.createRole(name, description);
    res.status(201).json(newRole);
}

// Actualizar un rol existente
exports.updateRole = async (req, res) => {
    const id = parseInt(req.params.id);
    const { name, description } = req.body;
    if (!name || !description) {
        return res.status(400).json({ message: 'Todos los campos son obligatorios' });
    }
    const updatedRole = await userModel.updateRole(id, name, description);
    if (updatedRole) {
        res.json(updatedRole);
    } else {
        res.status(404).json({ message: 'Rol no encontrado' });
    }
}

// Eliminar un rol
exports.deleteRole = async (req, res) => {
    const id = parseInt(req.params.id);
    const deletedRole = await userModel.deleteRole(id);
    if (deletedRole) {
        res.json({ message: 'Rol eliminado correctamente' });
    } else {
        res.status(404).json({ message: 'Rol no encontrado' });
    }
}


