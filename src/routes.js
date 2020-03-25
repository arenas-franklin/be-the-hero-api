const express = require('express');

const OngController = require('./controllers/OngController')

const routes = express.Router();

// get /ongs lista todas as ongs
routes.get('/ongs', OngController.index);

// post /ongs realiza cadastro das ongs 
routes.post('/ongs', OngController.create);

module.exports = routes;