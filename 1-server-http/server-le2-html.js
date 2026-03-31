//importação dos módulos
const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
port = 3000;

const server = http.createServer((req, res) => {
    //resposta de ok
    res.statusCode = 200;
    //config server
    res.setHeader('Content-Type', 'text/html; charset=utf-8');

    //obter URL
    const url = req.url;

    //variável para armazenar o html
    let arquivohtml;

    if(url == '/'){
        arquivohtml = fs.readFileSync('./public/index.html');
    } else if(url == '/sobre'){
        arquivohtml = fs.readFileSync('./public/sobre.html');
    }else if(url == '/contato'){
        arquivohtml = fs.readFileSync('./public/contato.html');
    }else if(url == '/if'){
        arquivohtml = fs.readFileSync('./public/if.html');
    }else{
        arquivohtml = fs.readFileSync('./public/erro.html');
    }

    res.end(arquivohtml);
});

//iniciar o server
server.listen(port, hostname, () => {
    console.log(`Servidor rodando em http://${hostname}:${port}/`);
});