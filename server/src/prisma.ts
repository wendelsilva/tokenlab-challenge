import { PrismaClient } from '@prisma/client'

export const prisma = new PrismaClient()

// async function createUser() {
//     await prisma.user.create({
//         data: {
//             name: 'Wendel',
//             email: 'do@começo',
//             password: 'password',
//         }
//     })  
// }

// createUser()