import { CreateUserUseCase } from "../../../core/usecases/user/CreateUserUseCase";
import { NextFunction, Request, Response } from "express"
import bcrypt from "bcrypt"

export class CreateUserController {
    constructor(private createUser: CreateUserUseCase) { }

    async execute(req: Request, res: Response, next: NextFunction) {
        try {
            const { name, password, phone, email, adress } = req.body

            const hashPassword = await bcrypt.hash(password, 10)

            const createUser = await this.createUser.execute({ name, email, phone, adress }, hashPassword)

            res.status(201).json(createUser)
        }
        catch (error) {
            next(error)
        }
    }
}