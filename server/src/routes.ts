import express from 'express'

import { UserController } from './controllers/UserController'
import { EventController } from './controllers/EventController'

export const routes = express.Router()
const userController = new UserController()
const eventController = new EventController()

routes.get('/', (req, res) => {res.send('server is running')})

routes.post('/user', userController.create)
routes.get('/user', userController.getUser)
routes.post('/authenticate', userController.authenticate)

routes.get('/event', eventController.getEvents)
routes.post('/event', eventController.createEvent)
routes.delete('/event/:id', eventController.deleteEvent)


