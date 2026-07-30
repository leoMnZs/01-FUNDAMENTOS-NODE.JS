// Importa a função createServer do módulo nativo 'http' do Node.js
// A partir do Node 14+, é possível usar o prefixo 'node:' para deixar claro que é um módulo interno
import { createServer } from 'node:http';

// Cria o servidor HTTP, passando uma função "callback" que será executada
// toda vez que uma requisição (req) chegar ao servidor
// 'req' (request) representa a requisição feita pelo cliente
// 'res' (response) representa a resposta que o servidor vai enviar de volta
const server = createServer((req, res) => {
    // Envia a resposta "Ola turma B" para o cliente e encerra a resposta
    // res.end() finaliza a requisição, enviando os dados no corpo da resposta
    res.end("Ola turma B");
});

// Faz o servidor "escutar" (ficar ativo aguardando conexões) na porta 3000
// '127.0.0.1' é o endereço IP local (localhost), ou seja, o servidor só aceita
// conexões vindas da própria máquina
// A função de callback é executada assim que o servidor estiver pronto e rodando
server.listen(3000, '127.0.0.1', () => {
    // Exibe uma mensagem no terminal confirmando que o servidor está no ar
    console.log("Servidor rodando em http://localhost:3000");
});