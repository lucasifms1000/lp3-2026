/**
 * Servidor HTTP que irá manipular os parâmetros passados pela url
 * URL que será utilizada para enviar requisições para o servidor
 * http://127.0.0.1:3000/?nome=Lucas&sobrenome=Tavares
 */

//importação dos pacotes nativos
const http = require('http');
const url = require('url');

//Definir as configurações do servidor
const hostname = '127.0.0.1';
port = 3000;

//criar o servidor
const server = http.createServer((req, res) => {
    //definir a resposta do cabeçalho
    res.statusCode = 200; //indica sucesso
    // definir resposta do cabeçalho
    res.setHeader('Content-Type', 'text/html; charset=utf-8'); 
    //extraindo os parâmetros da url
    const query = url.parse(req.url, true).query;

    //extraindo os dados importantes dos parâmetros 
    const nome = query.nome;
    const sobrenome = query.sobrenome;
    // define o código html da pagina
    const codigoHtml = `
    <h3> Servidor http que manipula a parâmetros passados pela url</h3>
    <p>O servidor extrai da url os <b>dados</b> nome e <b>sobrenome</b></p>
    <p>Nome: ${nome}</p>
    <p>Sobrenome: ${sobrenome}</p>
    `;
    //adiciona o código html
    res.write(codigoHtml);
    //envia o conteúdo
    res.end();

});

//iniciar o servidor
server.listen(port, hostname, () => {
    console.log(`Servidor rodando em http//${hostname}:${port}/`);
});
