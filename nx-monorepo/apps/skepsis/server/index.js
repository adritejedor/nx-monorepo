const express = require('express');
const chalk = require('chalk');

const app = express();

app.get('/amibos', (req, res) => {
    res.json({text: 'hola mundo'});
})

app.listen(3000, () => {
    console.log(chalk.cyan('Escuchando en el puerto 3000'));
});