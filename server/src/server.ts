import express from 'express';
import cors from 'cors';
import { routes } from './routes'

const usersController = require('./users/Controller')
const eventController = require('./event/Controller')

const app = express();

app.use(cors())
app.use(express.json());
app.use(routes);

app.use('/', usersController)
app.use('/', eventController)

app.listen(process.env.PORT || 3333, () => {
    console.log("HTTP Server Running")
})