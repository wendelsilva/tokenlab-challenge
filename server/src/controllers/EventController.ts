import express from 'express';

import { Event } from '../models/Event';

const event = new Event();

export class EventController {

    async getEvents(req: express.Request, res: express.Response) {
        const events = await event.getEvents()
        res.status(200).send(events)
    }

    // TODO create event controller method
    async createEvent(req: express.Request, res: express.Response) {
        const data = req.body

        await event.createEvent(data)
        res.status(201).send()
    }
}