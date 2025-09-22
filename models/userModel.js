const pool = require('../db');

exports.getAllUsers = async () => {
    const res = await pool.query('SELECT * FROM users ORDER BY id ASC');
    return res.rows || [];
}