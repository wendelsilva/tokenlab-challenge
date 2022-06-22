import express from 'express';
import { prisma } from './prisma';

export const routes = express.Router();

routes.get('/', (req, res) => {
    res.send('Servidor Rodando');
})

routes.post('/user/create', (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;

    async function createUser() {
        await prisma.user.create({
            data: {
                name: name,
                email: email,
                password: password,
            }
        })  
    }
    
    createUser()

    return res.status(201).send();
})

