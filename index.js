const express = require('express');

const app = express();

// Rotas / Recursos

//Métodos HTTPS:
// get: Buscar uma informação do back-end
app.get('/users',(req,res)=>{
    return res.json({
        "evento":"Semana OmnisStack 11.0",
        "aluno": "Franklin Angelo"
    })
})

app.listen(3333, ()=>{
    console.log("Aplicação funcionando na porta 'http://localhost:3333'. ")
});