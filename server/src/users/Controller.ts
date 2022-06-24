import { routes } from "../routes";
import { prisma } from "../prisma";

const bcrypt = require('bcrypt');

routes.post('/user/create', (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;

    async function createUser() {
        const getUser = await prisma.user.findUnique({
            where: {
                email: email,
            }
        })

        if(getUser) {
            return res.status(409).send();
        } else {
            const salt = bcrypt.genSaltSync(10)
            const hash = bcrypt.hashSync(password, salt)

            await prisma.user.create({
                data: {
                    name: name,
                    email: email,
                    password: hash,
                }
            })
            
            return res.status(201).send();
        } 
    }
    
    createUser();

})

routes.post('/authenticate', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    async function authenticate() {
        const getUser = await prisma.user.findUnique({
            where: {
                email: email,
            }
        })

        if(getUser) {
            const userPassword = bcrypt.compareSync(password, getUser.password)

            if(userPassword) {
                res.status(201).send()
            } else {
                res.status(403).send()
            }
        }
    }

    authenticate();
})

module.exports = routes;