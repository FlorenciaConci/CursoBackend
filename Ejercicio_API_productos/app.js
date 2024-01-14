const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('¡Hola, mundo!');
});

app.post('/productos', (req, res) => {
    // Lógica para crear un nuevo producto
    res.send('Producto creado correctamente');
});

app.get('/productos', (req, res) => {
    const categoria = req.query.categoria;
    // Aquí puedes usar el parámetro de categoría para realizar una búsqueda de productos en esa categoría
    res.send(`Realizar búsqueda de productos en la categoría "${categoria}"`);
    });
// Usa el puerto proporcionado por el entorno o elige 4000 como predeterminado
const port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log(`Servidor Express.js en funcionamiento en el puerto ${port}`);
});
