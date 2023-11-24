import { prisma } from "../prisma";

export class Event {

    // TODO create event model methods
    // async createEvent(event: Object) {

    //     try {
    //         await prisma.event.create({
    //             data: {
    //                 title: event.title,
    //                 date: event.date,
    //                 initHour: event.initHour,
    //                 endHour: event.endHour,
    //                 description: event.description,
    //             }
    //         })
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }

    async getEvents() {
        try {
            const events = await prisma.event.findMany()

            return events
        } catch (error) {
            console.log(error)
        }
    }
}