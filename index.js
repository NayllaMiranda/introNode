const express = require('express'); 
const cors = require('cors')
const app = express(); 
const router = require('./routes/routes');
// const porta = process.env.PORT || 3333;
const porta = 3333;

app.listen(porta, () => {
    console.log('Servidor iniciado na porta ' + porta); 
    //console.log(`Servidor iniciado na porta ${porta}`);
});

app.get('/', (request, response) => {
    response.send('Hello world');
});