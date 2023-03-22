import { Request, Response } from "express";
import { categoryRepository } from "../repositories/categoryRepository";

export class CategoryController {
    async create(req: Request, res: Response) {
        const { name } = req.body

        if (!name) {
            return res.status(400).json({ message: 'O nome é obrigatório' })
        }

        try {
            const newCategory = categoryRepository.create({ name })

            await categoryRepository.save(newCategory)

            return res.status(201).json(newCategory)
        } catch (error) {
            console.error(error)
            return res.status(500).json({ message: 'Internal Server Error' })
        }
    }

    async getCategories(req: Request, res: Response) {
        try {
            const categoriesList = await categoryRepository.find({
                relations: {
                    products: true
                }
            })

            return res.status(200).json(categoriesList)
        } catch (error) {
            console.error(error)
            return res.status(500).json({ message: 'Internal Server Error' })
        }
    }

    async getDrinks(req: Request, res: Response) {
        try {
            const drinksList = await categoryRepository.find({
                where: { id: 2 },
                relations: {
                    products: true
                }
            })

            return res.status(200).json(drinksList)
        } catch (error) {
            console.error(error)
            return res.status(500).json({ message: 'Internal Server Error' })
        }
    }
}