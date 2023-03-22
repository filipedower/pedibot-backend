import { Request, Response } from "express";
import { categoryRepository } from "../repositories/categoryRepository";
import { productRepository } from "../repositories/productRepository";
import { sizeRepository } from "../repositories/sizeRepository";

export class ProductController {
    async create(req: Request, res: Response) {
        const { name, description, price, idSize, idCategory } = req.body

        try {
            const size = await sizeRepository.findOneBy({ id: Number(idSize) })

            if (!size) {
                return res.status(404).json({ message: 'Tamanho de Produto não existe' })
            }

            const category = await categoryRepository.findOneBy({ id: Number(idCategory) })

            if (!category) {
                return res.status(404).json({ message: 'Categoria não existe' })
            }

            const newProduct = productRepository.create({
                name,
                description,
                price,
                sizes: [size],
                categories: [category]
            })

            await productRepository.save(newProduct)

            return res.status(201).json(newProduct)

        } catch (error) {
            console.error(error)
            return res.status(500).json({ message: 'Internal Error Server' })
        }
    }

    async listProducts(req: Request, res: Response) {
        try {
            const productsList = await productRepository.find({
                relations: {
                    sizes: true,
                    categories: true
                }
            })

            console.log(productsList)

            return res.status(200).json(productsList)
        } catch (error) {
            console.error(error)
            return
        }
    }

    async productById(req: Request, res: Response) {
        const { productId } = req.params

        try {
            const product = await productRepository.find({
                where: {
                    id: +productId
                },
                relations: {
                    sizes: true,
                    categories: true
                }
            })

            return res.status(200).json(product)
        } catch (error) {
            console.error(error)
            return
        }
    }
}