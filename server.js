const http = require('http');

const server = http.createServer((req,res)=>{
    res.end("Ola turma B");
});

server.listen(3000, '127.0.0.1', ()=>{
    console.log("Servidor rodando em http://localhost:3000");
});