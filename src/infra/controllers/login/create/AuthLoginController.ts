import { AuthLogin } from "../../../../core/usecases/login/create/AuthLogin";
import { NextFunction, Request, Response } from "express"

export class AuthLoginController {
    constructor(private authLogin: AuthLogin) { }

    async execute(req: Request, res: Response, next: NextFunction) {
        try {
            const { email, password } = req.body
            const authLogin = await this.authLogin.execute(email, password)
            return res.status(201).json(authLogin)
        } catch (error) {
            next(error)
        }
    }
}