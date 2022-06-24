import { routes } from "../routes";
import { prisma } from "../prisma";

routes.post('/event/create', (req, res) => {
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

module.exports = routes;