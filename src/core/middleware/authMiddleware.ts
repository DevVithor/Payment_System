import jwt from "jsonwebtoken"
import { prismaClient } from "../../lib/prismaclient";
import { NextFunction, Request, Response } from "express";
import { Unauthorized } from "../../handler/error/Unauthorized";

type JwtPayload = {
    id: number
}

export const authMiddleware = async (req: Request, res: Response, next: NextFunction) => {

    const { authorization } = req.headers

    if (!authorization) {
        throw new Unauthorized("Não Autorizado!")
    }

    const token = authorization.split(' ')[1]

    const { id } = jwt.verify(token, process.env.SECRET_KEY!) as JwtPayload

    const findUser = await prismaClient.user.findFirst({
        where: {
            id: id
        }
    })

    if (!findUser) {
        throw new Unauthorized("Não Autorizado!")
    }

    const { password: _, ...user } = findUser

    req.user = user

    next()
}