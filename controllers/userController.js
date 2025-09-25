const userModel = require('../models/userModel');

// Obtener todos los usuarios
exports.getAllUsers = async (req, res) => {
    const users = await userModel.getAllUsers();
    res.json(users);
}

// Obtener usuario por ID
exports.getUserById = async (req, res) => {
    const id = parseInt(req.params.id);
    const user = await userModel.getUserById(id);
    if (user) {
        res.json(user);
    } else {
        res.status(404).json({ message: 'Usuario no encontrado' });
    }
}

// Crear un nuevo usuario
exports.createUser = async (req, res) => {
    const { first_name, last_name, email, gender } = req.body;
    if (!first_name || !last_name || !email || !gender) {
        return res.status(400).json({ message: 'Todos los campos son obligatorios' });
    }
    const newUser = await userModel.createUser(first_name, last_name, email, gender);
    res.status(201).json(newUser);
}

// Actualizar un usuario existente
exports.updateUser = async (req, res) => {
    const id = parseInt(req.params.id);
    const { first_name, last_name, email, gender } = req.body;
    if (!first_name || !last_name || !email || !gender) {
        return res.status(400).json({ message: 'Todos los campos son obligatorios' });
    }
    const updatedUser = await userModel.updateUser(id, first_name, last_name, email, gender);
    if (updatedUser) {
        res.json(updatedUser);
    } else {
        res.status(404).json({ message: 'Usuario no encontrado' });
    }
}

// Eliminar un usuario
exports.deleteUser = async (req, res) => {
    const id = parseInt(req.params.id);
    const deletedUser = await userModel.deleteUser(id);
    if (deletedUser) {
        res.json({ message: 'Usuario eliminado correctamente' });
    } else {
        res.status(404).json({ message: 'Usuario no encontrado' });
    }
}