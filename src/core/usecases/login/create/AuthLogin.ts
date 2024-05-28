import { PrismaClient } from "@prisma/client";
import jwt from 'jsonwebtoken'
import bcrypt from "bcrypt"
import BadRequest from "../../../../handler/error/BadRequest";

export class AuthLogin {
    constructor(private client: PrismaClient) { }

    async execute(email: string, password: string) {

        const findUser = await this.client.user.findFirst({
            where: {
                email: email
            }
        })

        if (!findUser) {
            throw new BadRequest("Email ou Senha inválidos!")
        }

        const verifyPass = await bcrypt.compare(password, findUser.password)

        if (!verifyPass) {
            throw new BadRequest("Email ou Senha inválidos")
        }

        const token = jwt.sign({ id: findUser.id }, process.env.SECRET_KEY ?? '', { expiresIn: '30m' })

        const { password: _, ...user } = findUser

        return { user, token }
    }
}   