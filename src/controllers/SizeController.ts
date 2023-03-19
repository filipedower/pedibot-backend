import { Request, Response } from "express";
import { sizeRepository } from "../repositories/sizeRepository";

//teste

export class SizeController {
    async create(req: Request, res: Response) {
        const { name } = req.body

        if (!name) {
            return res.status(400).json({ message: 'O nome é obrigatório' })
        }

        try {
            const newSize = sizeRepository.create({ name })

            await sizeRepository.save(newSize)

            return res.status(201).json(newSize)
        } catch (error) {
            console.error(error)
            return res.status(500).json({ message: 'Internal Server Error' })
        }
    }

    async getSizes(req: Request, res: Response) {
        try {
            const sizesList = await sizeRepository.find()

            return res.status(200).json(sizesList)
        } catch (error) {
            console.error(error)
            return res.status(500).json({ message: 'Internal Server Error' })
        }
    }
}