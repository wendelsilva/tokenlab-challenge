import { prisma } from "../prisma";

import bcrypt from 'bcrypt'

export class User {

    async getUser() {
        try {
            const users = await prisma.user.findMany()

            return users
        } catch (error) {
            console.log(error);
        }
    }

    async findUser(email: string) {
        try {
            const getUser = await prisma.user.findUnique({
                where: {
                    email: email
                }
            })

            return getUser
        } catch (error) {
            console.log(error);
        }
    }

    async findEmail(email: string) {
        try {
            const getUser = await prisma.user.findUnique({
                where: {
                    email: email,
                }
            })

            if(getUser) {
                return true
            } else {
                return false
            }
        } catch (error) {
            console.log(error);
        }
    }

    async create(name: string, email: string, password: string) {
        try {
            const salt = bcrypt.genSaltSync(10)
            const hash = bcrypt.hashSync(password, salt)

            await prisma.user.create({
                data: {
                    name: name,
                    email: email,
                    password: hash,
                }
            })
        } catch (error) {
            console.log(error);
        }
    }

    async authenticate(email: string, password: string) {
        const user = await this.findUser(email)

        try {
            const passwordIsValid = bcrypt.compareSync(password, String(user?.password))

            if(passwordIsValid) {
                return true
            } else {
                return false
            }
        } catch (error) {
            console.log(error);
        }
    }
}