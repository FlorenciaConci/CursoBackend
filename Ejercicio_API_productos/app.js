const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('¡Hola, mundo!');
    });

    app.post('/productos', (req, res) => {
        // Lógica para crear un nuevo usuario
        res.send('Producto creado correctamente');
        });



const port = 4000;
app.listen(port, () => {
console.log(`Servidor Express.js en funcionamiento en el puerto ${port}`);
});