const express = require('express');
const OngController = require('./controllers/OngController')
const IncidentController = require('./controllers/IncidentsController')
const ProfileController = require('./controllers/ProfileController')
const SessionController = require('./controllers/SessionController')


const routes = express.Router();

routes.post('/sessions', SessionController.create)

//Ongs
routes.post('/ongs', OngController.create)
routes.get('/ongs', OngController.index)

//Profile
routes.get('/profile', ProfileController.index)

//Incidents
routes.post('/incidents', IncidentController.create)
routes.get('/incidents', IncidentController.index)
routes.delete('/incidents/:id', IncidentController.delete)


module.exports = routes;