import express from 'express'

import { UserController } from './controllers/UserController'

export const routes = express.Router()
const userController = new UserController()

routes.get('/', (req, res) => {res.send('server is running')})
routes.post('/user', userController.create)
routes.post('/authenticate', userController.authenticate)


