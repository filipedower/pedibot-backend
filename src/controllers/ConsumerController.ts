import { Request, Response } from "express";
import { consumerRepository } from "../repositories/consumerRepository";

export class ConsumerController {
    async create(req: Request, res: Response) {
        const { name, celNumber } = req.body

        try {
            const newConsumer = consumerRepository.create({
                name,
                celNumber
            })

            await consumerRepository.save(newConsumer)

            return res.status(201).json(newConsumer)
        } catch (error) {
            console.error(error)
            return res.status(500).json({ message: 'Internal Error Server' })
        }
    }

    async lisConsumers(req: Request, res: Response) {
        try {
            const consumers = await consumerRepository.find()

            return res.status(200).json(consumers)
        } catch (error) {
            console.error(error)
            return res.status(500).json({ message: 'Internal Error Server' })
        }
    }
}