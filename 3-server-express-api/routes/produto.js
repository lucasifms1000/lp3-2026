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
    const result = await db.query('SELECT * FROM produto');

    //Responde com os dados da consulta
    res.status(200).json(result.rows);
});

//------------------------------------------------------------------
//ROTA POST
routes.post('/', async (req, res) => {
//Extrair os valores recebidos por parâmetros
 const {nome, marca, preco, peso} = req.body;

 if(!nome || !marca || !preco || !peso){
    return res.status(400).json({mensagem: 'Todos os campos são obrigatórios.'});
 }

 //Constrói a query inserção SQL
 const sql = `
    INSERT INTO produto (nome, marca, preco, peso)
    VALUES ($1, $2, $3, $4)
    RETURNING *
 `;

 //Valores qeu serão usado na inserção SQL
 const valores = [nome, marca, preco, peso];

 //Executa a operação no banco de dados
 const result = await db.query(sql, valores);

 //Retorna para o cliente os valores inseridos no banco
 res.status(201).json(result.rows[0]);
});

//--------------------------------------------------------------------
//Rota PUT

routes.put('/:id', async (req, res) => {
    //Obtém o id informado pelo usuário na URL
    const {id} = req.params;

    //Verifica se o id foi informado
    if(!id){
        return res.status(400).json({mensagem: 'id do produto é obrigatório'});
    }

    //Extrair as informações do corpo da requisição
    const {nome, marca, preco, peso} = req.body;

    //Verifica se todos os campos estãos preenchidos
    if(!nome || !marca || !preco || !peso ){
        return res.status(400).json({mensagem: 'Todos os campos são Obrigatórios.'});
    }

    //criação da query SQL de alteração no banco de dados
    const sql = `
    UPDATE produto
    SET nome = $1 , marca = $2 , preco = $3 , peso = $4
    WHERE id = $5
    RETURNING *
    `;

    //valores usado na query
    const valores = [nome, marca, preco, peso, id];

    //Executa a atualização no banco de dados
    const result = await db.query(sql, valores);

    //Caso não tenha o id informado no banco
    //informa que o cliente não foi encontrado
    if(result.rows.length === 0){
        return res.status(404).json({mensagem: 'Produto não encontrado.'});
    }

    res.status(200).json(result.rows[0]);
});

//--------------------------------------------------------------------------
//ROTA DELETE
routes.delete('/:id', async (req, res) => {
//obtém o id informado pelo usuário
const {id} = req.params;

//Verifica se id existe
if(!id){
    return res.status(400).json({mensagem: 'O id do produto é obrigatório'});
}

//Constrói a query SQL
const sql = `
DELETE FROM produto
WHERE id = $1
RETURNING *
`;

//valores que serão usados na query
const valores = [id];

//Apagar os dados no banco de dados
const result = await db.query(sql, valores);

//Verifica se o id existe
//ou se ele já não foi deletado
if(result.rows.length === 0) {
    return res.status(404).json({mensagem: 'Produto não encontrado.'});
}

//Quando a requisação for realizada
res.status(200).json({mensagem: `Produto com ID ${id} foi excluído com sucesso.`});
});

module.exports = routes;