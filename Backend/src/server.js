require('dotenv').config({path:'variaveis.env'});
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
// body-parser converte  o body da requisiçao em outros formatos

const routes = require('./routes');
const server = express();
//  cors permite que haja acesso a recurso da api
server.use(bodyParser.json());
server.use(cors());
server.use(bodyParser.urlencoded({
    extended: false
}));

server.use('/api', routes);

server.listen(process.env.PORT, ()=>{
    console.log("Servidor rodando em: http://localhost:"+process.env.PORT)
})