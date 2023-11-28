import { prisma } from "../prisma";

interface EventProps {
    title: string,
    date: string,
    initHour: string,
    endHour: string,
    description: string,
}

export class Event {

    async createEvent(event: EventProps) {

        try {
            await prisma.event.create({
                data: {
                    title: event.title,
                    date: event.date,
                    initHour: event.initHour,
                    endHour: event.endHour,
                    description: event.description,
                }
            })
        } catch (error) {
            console.log(error)
        }
    }

    async getEvents() {
        try {
            const events = await prisma.event.findMany()

            return events
        } catch (error) {
            console.log(error)
        }
    }

    async deleteEvent(eventId: string) {
        try {
            await prisma.event.delete({
                where: {
                    id: eventId
                }
            })
        } catch (error) {
            console.log(error);
        }
    }
}