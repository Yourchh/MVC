const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const userRoutes = require('./routes/userRoutes');
const roleRoutes = require('./routes/rolesRoutes');

app.use(express.json());

//RUTAS PARA CONSULTAR USUARIOS
// Ruta para obtener todos los usuarios
app.use('/api/users', userRoutes);
// Ruta para obtener un usuario por ID
app.use('/api/users/:id', userRoutes);
// Ruta para crear un nuevo usuario
app.use('/api/users', userRoutes);
// Ruta para actualizar un usuario existente
app.use('/api/users/:id', userRoutes);
// Ruta para eliminar un usuario
app.use('/api/users/:id', userRoutes);

//RUTAS PARA CONSULTAR ROLES
// Ruta para obtener todos los roles
app.use('/api/roles', roleRoutes);
// Ruta para obtener un rol por ID
app.use('/api/roles/:id', roleRoutes);
// Ruta para crear un nuevo rol
app.use('/api/roles', roleRoutes);
// Ruta para actualizar un rol existente
app.use('/api/roles/:id', roleRoutes);
// Ruta para eliminar un rol
app.use('/api/roles/:id', roleRoutes);
// Ruta para obtener un rol por ID
app.use('/api/roles/:id', roleRoutes);

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});