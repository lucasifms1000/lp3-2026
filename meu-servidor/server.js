//Servidor com o módulo HTTP.

//importar o módulo HTTP, nativo do Node.js
const http = require('http');

//Definir as configurações do servidor
hostname = '127.0.0.1'; //endereço IP local
port = 3000; //porta do servidor

//Criar o servidor
const server = http.createServer((requisicao,resposta)=>{
    //definição de resposta
    resposta.writeHead(200,{'Content-Type':'text/plain; charset=utf-8'});

    resposta.write('Olá! este é meu servidor!\n');
    resposta.write('Ele está rodando na porta 3000.\n');
    resposta.write('Ele está utilizando o módulo http.\n');
    resposta.write('Meu nome é Lucas.\n');
    resposta.write('Essa aula é de LP3!')

    resposta.end();
});

//inciar o servidor
server.listen(port, hostname, () =>{
    //Avisa que o servidor está rodando no console
    console.log(`O servidor está rodando em http://${hostname}:${port}/`);
});

