/**
 * Servidor back-end utilizando o módulo Express para criar uma API REST
 * e realizar as operações de CRUD no banco de dados PostgreSQL 
 * (GET,POST,PUT,DELETE).
 */

//Importação dos módulos utilizados no projeto
//Express
const express = require('express');
//Criar a instância do aplicativo express
const app = express();
//Dotenv
//Carregar as variáveis de ambiente definidas no arquivo .env
require('dotenv').config();

//Configuração do IP e da PORTA do servidor
const hostname = process.env.APP_HOST;
const port = process.env.APP_PORT;

//Definição de rota raiz "/"
//Configuração do servidor
app.get('/', (req, res) => {
    res.status(200).send('Servidor API REST.');
});

//Inicio do servidor
app.listen(port, hostname, async () =>{
    console.log(`Servidor rodando em http://${hostname}:${port}/`);
});
