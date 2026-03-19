/**
 * Servidor HTTP para páginas estáticas em html
 * http://127.0.0.1:3000/
 */

//importar pacotes
const http = require('http');
const fs = require('fs'); // módulo para acessar as páginas html

//Definir as config do servidor
const hostname = '127.0.0.1';
port = 3000;

//criar o servidor
const server = http.createServer((req,res) => {
    //define a resposta de inicio
    res.statusCode = 200;
    //define o tipo de resposta
    res.setHeader('Content-Type' , 'text/html; charset=utf-8');

    const arquivoHtml = fs.readFileSync('./public/index.html');

    res.end(arquivoHtml);
});

//iniciar o servidor
server.listen(port, hostname, () => {
    console.log(`Servidor rodando em http://${hostname}:${port}/`);
});