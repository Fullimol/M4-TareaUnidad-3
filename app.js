const express = require ("express");
const app = express();

app.get('/', (req, res) => {
    res.send('¡Hola mundo!, esta es la ruta principal');
});

app.get('/rutaDos', (req, res) => {
    res.send('Esta es la segunda ruta');
});

app.get('/rutaDos/rutaTres', (req, res) => {
    res.send('Esta es la ultima ruta');
});

const PUERTO = 3000
app.listen(PUERTO);