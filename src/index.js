const express = require('express');
const routes = require('./routes')

const app = express();

//informa que usará informações em json
app.use(express.json());

app.use(routes);


app.listen(3333, ()=>{
    console.log("Aplicação funcionando na porta 'http://localhost:3333'. ")
});