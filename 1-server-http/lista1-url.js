//http://127.0.0.1:3000/?peso=140&altura=1.82

// importar os módulos
const http = require('http');
const url = require('url');

//definir a porta e IP
const hostname = '127.0.0.1';
port = 3000;

//Criar o servidor
const server = http.createServer((req, res) => {
    //Servidor rodando
    res.statusCode = 200;
    //config cabeçalho
    res.setHeader('content-type', 'text/html; charset=utf-8');

    //extrair os dados da url
    const query = url.parse(req.url, true).query;

    //Transformando os dados em numeros
    const peso = Number(query.peso);
    const altura = Number(query.altura);

    const imc = peso / (altura * altura);

    //inicio do html

    const codHtml = `
        <h3>Servidor HTTP que calcula o IMC de uma pessoa</h3>
        
        <p>O servidor extrai os parâmetros <b>peso</b> e 
        <b>altura</b> da url para calcular o imc</p>

        <p>Peso: ${peso}</p>
        <p>Altura: ${altura}</p>
        <p>IMC: ${imc.toFixed(2)}</p>
    `;
    //Envio do código html
    res.write(codHtml);
    //Fim da resposta
    res.end();

});

//iniciar o servidor
server.listen(port, hostname, () => {
    console.log(`Servidor rodando em http://${hostname}:${port}/`);
});
