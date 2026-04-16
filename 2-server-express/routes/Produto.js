//importa módulo express
const express = require('express');

//função express para manipular as rotas
const rotasProduto = express.Router();

//GET
rotasProduto.get('/', (req, res) => {
    res.status(200).send({
        mensagem: 'Você acessou a rota raiz do Cliente.'
    });
});

//POST
rotasProduto.post('/', (req, res) => {
    //obter os dados do corpo da requisição
    const novoProduto = {
        marca: 'Acer',
        modelo: 'V15' ,
        preco: 'R$6.000',
        
    }

    //indica que o dado foi criado
    res.status(201).send({
        mensagem:'produto cadastrado com sucesso.',
        novoProduto: novoProduto
    });
});

//PUT
rotasProduto.put('/', (req, res) => {
    res.status(200).send({
        mensagem:'Você acessou o servidor produto através da rota PUT.'
    });
});

//DELETE
rotasProduto.delete('/', (req, res) => {
    //responder com status de sucesso
    res.status(202).send({
        mensagem:'Você acessou o servidor produto através do método DELETE.'
    });
});

module.exports = rotasProduto;