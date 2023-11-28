import express from 'express';

import { Event } from '../models/Event';

const event = new Event();

export class EventController {

    async getEvents(req: express.Request, res: express.Response) {
        const events = await event.getEvents()
        res.status(200).send(events)
    }

    async createEvent(req: express.Request, res: express.Response) {
        const data = req.body

        await event.createEvent(data)
        res.status(201).send()
    }

    async deleteEvent(req: express.Request, res: express.Response) {
        const eventId = req.params.id

        await event.deleteEvent(eventId)
        res.status(200).send()
    }
}