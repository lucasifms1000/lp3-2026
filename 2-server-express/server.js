/**
 * Servidor back-end utilizando o módulo Express que manipula os métodos HTTP.
 * GET - Obter os dados
 * POST - Criar os dados
 * PUT - Atualiza os dados
 * DELETE - Apaga os dados
 */

//importar o módulo Express
// esse módulo é instalado através do comando 'npm install express'
const express = require('express');

//definição de IP e port
const hostname = '127.0.0.1';
const port = 3000;

//criar uma aplicação servidor
const app = express();

//GET
//rota raiz do servidor 
app.get('/', (req, res) => {
    //código de status
    res.status(200);
    //envio de mensagem para o cliente
    res.send({
        mensagem: "Você acessou o servidor web"
    });
});

//POST
app.post('/', (req, res) =>{
    //dados a serem inseridos
    const novoCliente = {
        nome: 'Lucas',
        email: 'lucas@email.com',
        telefone: '67123456789',
        senha: '123456'
    };

    //respondendo com os dados
    res.status(200).send({
        mensagem:"O cliente foi salvo com sucesso!",
        cliente: novoCliente
    });
});

//PUT
app.put('/', (req, res) => {
    //responder com a alteração
    res.status(200).send({
        mensagem: "Você acessou o servidor através da rota PUT."
    });
});

//DELETE
app.delete('/', (req, res) => {
    //responder com mensagem de sucesso!
    //cod 202 - requisição aceita!
    res.status(202).send({
        mensagem: "Você acessou o servidor através da rota DELETE."
    });
});

//rodar o servidor
app.listen(port, hostname, () => {
    console.log(`Servidor rodando em http://${hostname}:${port}/`);
});