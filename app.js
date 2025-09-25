const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const userRoutes = require('./routes/userRoutes');

app.use(express.json());

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


app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});