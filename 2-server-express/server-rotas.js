/**
 * Servidor back-end utilizando o módulo Express que manipula os 
 * métodos HTTP.
 * Separados nas rotas Cliente e Produto.
 */

//Importar o módulo express
const express = require('express');

//Port e IP
const hostname = '127.0.0.1';
const port = 3000;

//criação do aplicativo servidor
const app = express();

//importa configurações de rotas
const clienteRotas = require('./routes/Cliente');
const produtoRotas = require('./routes/Produto');

//GET
//Rota raiz do servidor
app.get('/', (req, res) => {
    //código de Status 
    res.status(200);
    //envio de mensagem Front-end
    res.send({
        mensagem: 'Você acessou a raiz do servidor web.'
    });
});

//expondo as rotas configuradas
app.use('/cliente', clienteRotas);
app.use('/produto', produtoRotas);

//rodar o servidor
app.listen(port, hostname, () => {
    console.log(`Servidor roandando http://${hostname}:${port}/`);
});