import { routes } from "../routes";
import { prisma } from "../prisma";

routes.post('/event/create', (req, res) => {
    const title = req.body.title
    const date = req.body.date
    const initHour = req.body.initHour
    const endHour = req.body.endHour
    const description = req.body.description

    async function createEvent() {
        const getEvent = await prisma.event.findUnique({
            where: {
                date: date,
            }
        })

        if(getEvent) {
            res.status(409).send()
        } else {
            await prisma.event.create({
                data: {
                    title: title,
                    date: date,
                    initHour: initHour,
                    endHour: endHour,
                    description: description,
                }
            })

            return res.status(201).send()
        }
    }
    
    createEvent();
})

routes.get('/event/list', (req, res) => {
    async function getAllEvents() {
        const allEvents = await prisma.event.findMany()

        res.send({
            allEvents
        })
    }

    getAllEvents();
})

routes.post('/event/delete', (req, res) => {
    const eventId = req.body.eventId
    
    async function deleteEvent() {
        const eventSelected = await prisma.event.findUnique({
            where: {
                id : eventId
            }
        })

        if(eventSelected) {
            await prisma.event.delete({
                where: {
                    id: eventId
                }
            })

            res.status(201).send()
        } else {
            res.status(409).send()
        }  
    }

    deleteEvent();
})

module.exports = routes;