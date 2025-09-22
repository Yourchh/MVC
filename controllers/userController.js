const userModel = require('../models/userModel');

exports.getAllUsers = async (req, res) => {
    const users = await userModel.getAllUsers();
    res.json(users);
}