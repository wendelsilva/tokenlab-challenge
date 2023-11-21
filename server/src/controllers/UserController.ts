import express from 'express';

import { User } from '../models/User';

const user = new User();

export class UserController {

    async getUser(req: express.Request, res: express.Response) {
        const users = await user.getUser()
        res.status(200).send(users)
    }

    async create(req: express.Request, res: express.Response) {
        const { name, email, password } = req.body

        if(email === undefined || name === undefined || password === undefined) {
            res.status(400).send({error: "invalid request, fill in the fields"});
            return;
        }

        const emailExists = await user.findEmail(email)

        if(emailExists) {
            res.status(409).send({error: 'email already exists'})
        }

        await user.create(name, email, password)
        res.status(201).send()
    }

    async authenticate(req: express.Request, res: express.Response) {
        const { email, password } = req.body
        
        const authenticateIsValid = await user.authenticate(email, password)

        if(authenticateIsValid) {
            res.status(200).send()
        } else {
            res.status(401).send({error: 'invalid credentials'})
        }
    }
}
