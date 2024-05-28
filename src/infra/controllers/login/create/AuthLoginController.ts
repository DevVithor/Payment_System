import { AuthLogin } from "../../../../core/usecases/login/create/AuthLogin";
import { Request, Response } from "express"

export class AuthLoginController {
    constructor(private authLogin: AuthLogin) { }

    async execute(req: Request, res: Response) {

        const { email, password } = req.body

        const authLogin = await this.authLogin.execute(email, password)
        res.status(201).json(authLogin)
    }
}