import { PrismaClient } from "@prisma/client";
import jwt from 'jsonwebtoken'
import bcrypt from "bcrypt"
import { Unauthorized } from "../../../../handler/error/Unauthorized";

export class AuthLogin {
    constructor(private client: PrismaClient) { }

    async execute(email: string, password: string) {

        const findUser = await this.client.user.findFirst({
            where: {
                email: email
            }
        })

        if (!findUser) {
            throw new Unauthorized("Email ou Senha inválidos!")
        }

        const verifyPass = await bcrypt.compare(password, findUser.password)

        if (!verifyPass) {
            throw new Unauthorized("Email ou Senha inválidos")
        }

        const token = jwt.sign({ id: findUser.id }, process.env.SECRET_KEY ?? '', { expiresIn: '30m' })

        const { password: _, ...user } = findUser

        return { user, token }
    }
}   