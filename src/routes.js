const express = require('express');

const OngController = require('./controllers/OngController')

const IncidentController = require('./controllers/IncidentController')

const routes = express.Router();

// get /ongs lista todas as ongs
routes.get('/ongs', OngController.index);

// post /ongs realiza cadastro das ongs 
routes.post('/ongs', OngController.create);

routes.get('/incidents', IncidentController.index)

//post / incidents rota para cadastrar casos (incidentes)
routes.post('/incidents', IncidentController.create);
module.exports = routes;