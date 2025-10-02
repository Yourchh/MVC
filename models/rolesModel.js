const pool = require('../db');

// Obtener todos los roles
exports.getAllRoles = async () => {
    const res = await pool.query('SELECT * FROM roles ORDER BY id ASC');
    return res.rows || [];
}

// Obtener rol por ID
exports.getRoleById = async (id) => {
    const res = await pool.query('SELECT * FROM roles WHERE id = $1', [id]);
    return res.rows[0] || null;
}

// Crear un nuevo rol
exports.createRole = async (name, description) => {
    const res = await pool.query(
        'INSERT INTO roles (name, description) VALUES ($1, $2) RETURNING *',
        [name, description]
    );
    return res.rows[0];
}

// Actualizar un rol existente
exports.updateRole = async (id, name, description) => {
    const res = await pool.query(
        'UPDATE roles SET name = $1, description = $2 WHERE id = $3 RETURNING *',
        [name, description, id]
    );
    return res.rows[0] || null;
}

// Eliminar un rol
exports.deleteRole = async (id) => {
    const res = await pool.query('DELETE FROM roles WHERE id = $1 RETURNING *', [id]);
    return res.rows[0] || null;
}

