import { Request, Response } from "express";
import { orderRepository } from "../repositories/orderRepository";

export class OrderController {
    async create(req: Request, res: Response) {
        const { orderValue, productIds, obs, orderType, paymentType, adress } = req.body

        try {
            const newOrder = orderRepository.create({ orderValue, productIds, obs, orderType, paymentType, adress })

            await orderRepository.save(newOrder)

            return res.status(201).json(newOrder)
        } catch (error) {
            console.error(error)
            return res.status(500).json({ message: 'Internal Server Error' })
        }
    }
}