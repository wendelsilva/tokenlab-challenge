import { PrismaClient } from '@prisma/client'
import { userInfo } from 'os';

export const prisma = new PrismaClient({
    log: ['query', 'info']
})

// async function main() {
//     // ... you will write your Prisma Client queries here
//     const allUsers = await prisma.event.findMany()
//     console.log(allUsers)
//   }

// main();

prisma.event.create({
    data: {
        authorId: 19,
        initHour: 7,
        endHour: 22,
        description: 'evento teste backend'
    }
})