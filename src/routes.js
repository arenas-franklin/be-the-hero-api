const express = require('express');

const routes = express.Router();

routes.post ('/users', (req, res)=>{
    const body = req.body;

    console.log(body);

    return Response.json({
        evento:"Semana OmniStack 11.0",
        aluno: 'Celiton Souza'
    });
});

module.exports = routes;