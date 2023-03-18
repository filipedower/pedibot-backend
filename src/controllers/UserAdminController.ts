import { Request, Response } from "express"
import { userAdminRepository } from "../repositories/userAdminRepository"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

type JwtPayload = {
    id: number
}

export class UserAdminController {
    async create(req: Request, res: Response) {
        const { name, establishmentName, email, password } = req.body

        try {
            const userExists = await userAdminRepository.findOneBy({ email })

            if (userExists) {
                return res.status(404).json({ message: 'Email já existe cadastrado em nossa plataforma' })
            }

            const hashPassword = await bcrypt.hash(password, 10)

            const newUser = userAdminRepository.create({
                name,
                establishmentName,
                email,
                password: hashPassword
            })

            await userAdminRepository.save(newUser)

            const { password: _, ...user } = newUser

            return res.status(201).json(user)

        } catch (error) {
            console.error(error)
            return res.status(500).json({ message: 'Internal Server Error' })
        }
    }

    async login(req: Request, res: Response) {
        const { email, password } = req.body

        try {
            const user = await userAdminRepository.findOneBy({ email })

            if (!user) {
                return res.status(404).json({ message: 'Email ou senha inválidos' })
            }
            const verifyPass = await bcrypt.compare(password, user.password)

            if (!verifyPass) {
                return res.status(404).json({ message: 'Email ou senha inválidos' })
            }

            const token = jwt.sign({ id: user.id }, process.env.JWT_PASS ?? '', {
                expiresIn: '8h'
            })

            const { password: _, ...userLogin } = user

            return res.json({
                user: userLogin,
                token: token,
            })
        } catch (error) {
            console.error(error)
            return res.status(500).json({ message: 'Internal Server Error' })
        }
    }

    async getProfile(req: Request, res: Response) {
        return res.json(req.user)
    }

    async validateToken(req: Request, res: Response) {
        const { token } = req.body

        if (!token) {
            return res.status(404).json('Não Autorizado')
        }

        // const tokenValidate = token.split(' ')[1]

        const { id } = jwt.verify(token, process.env.JWT_PASS ?? '') as JwtPayload

        const user = await userAdminRepository.findOneBy({ id })

        if (!user) {
            return res.status(401).json('Não autorizado')
        }

        const { password: _, ...loggedUser } = user

        return res.json({ user: loggedUser })
    }
}