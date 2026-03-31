//importa o módulo http
const http = require('http');

//Definir porta e IP
hostname = '127.0.0.1'; //IP
port = 3000; //porta

//criar o servidor
const server = http.createServer((req, res) => {
//difine as configurações do cabeçalho
res.statusCode = 200; //indica sucesso no inicio do servidor
res.setHeader('Content-Type', 'text/html; charset=utf-8');

//código html
const codigohtml = `
    <h1>Servidor HTTP rodando com Node.js</h1>

    <p>Esse servidor está sendo criado na aula de Linguagem e programação 3. </p>
    <p>O servidor roda na porta 3000</p>

    <p>Lista de Compras</p>
    <ul>
        <li>arroz</li>
        <li>feijão</li>
        <li>macarrão</li>
        <li>cebola</li>
    </ul>
`;

//adiciona o código html
res.write(codigohtml);
//envia a resposta
res.end();
});

//iniciar o servidor
server.listen(port, hostname, () =>{
    console.log(`Sevidor rodando em http://${hostname}:${port}/`);
});