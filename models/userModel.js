const pool = require('../db');

// Obtener todos los usuarios
exports.getAllUsers = async () => {
    const res = await pool.query('SELECT * FROM users ORDER BY id ASC');
    return res.rows || [];
}

// Obtener usuario por ID
exports.getUserById = async (id) => {
    const res = await pool.query('SELECT * FROM users WHERE id = $1', [id]);
    return res.rows[0] || null;
}

// Crear un nuevo usuario
exports.createUser = async (first_name, last_name, email, gender, password) => {
    const res = await pool.query(
        'INSERT INTO users (first_name, last_name, email, gender, password) VALUES ($1, $2, $3, $, $5) RETURNING *',
        [first_name, last_name, email, gender, password]
    );
    return res.rows[0];
}

// Actualizar un usuario existente
exports.updateUser = async (id, first_name, last_name, email, gender) => {
    const res = await pool.query(
        'UPDATE users SET first_name = $1, last_name = $2, email = $3, gender = $4 WHERE id = $5 RETURNING *',
        [first_name, last_name, email, gender, id]
    );
    return res.rows[0] || null;
}

// Eliminar un usuario
exports.deleteUser = async (id) => {
    const res = await pool.query('DELETE FROM users WHERE id = $1 RETURNING *', [id]);
    return res.rows[0] || null;
}