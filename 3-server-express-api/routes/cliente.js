//importar os módulos
//express
const express = require('express');
//Criar um roteador do express para definir as rotas separadamente
//do app principal
const routes = express.Router();
//importar a conexão com o banco de dados PostgreSQL
const db = require('../db/connect');

//--------------------------------------------------------------------
//ROTA GET
routes.get('/', async (req, res) => {
    //Realizar a consulta no banco de dados usando SQL.
    const result = await db.query('SELECT * FROM cliente');

    //Responde com os dados da consulta
    res.status(200).json(result.rows);
});

//------------------------------------------------------------------
//ROTA POST

module.exports = routes;