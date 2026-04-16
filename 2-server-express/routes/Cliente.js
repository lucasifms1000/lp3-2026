//importa módulo express
const express = require('express');

//função express para manipular as rotas
const rotasCliente = express.Router();

//GET
rotasCliente.get('/', (req, res) => {
    res.status(200).send({
        mensagem: 'Você acessou a rota raiz do Cliente.'
    });
});

//POST
rotasCliente.post('/', (req, res) => {
    //obter os dados do corpo da requisição
    const novoCliente = {
        nome: 'Lucas',
        email: 'lucas@email.com' ,
        telefone: '67123456789',
        senha: '12345'
    }

    //indica que o dado foi criado
    res.status(201).send({
        mensagem:'Cliente cadastrado com sucesso.',
        novoCliente: novoCliente
    });
});

//PUT
rotasCliente.put('/', (req, res) => {
    res.status(200).send({
        mensagem:'Você acessou o servidor através da rota PUT.'
    });
});

//DELETE
rotasCliente.delete('/', (req, res) => {
    //responder com status de sucesso
    res.status(202).send({
        mensagem:'Você acessou o servidor através do método DELETE.'
    });
});

module.exports = rotasCliente;