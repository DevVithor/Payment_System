import { NextFunction, Request, Response } from "express"

export class GetUserController {

    async execute(req: Request, res: Response) {

        return res.status(200).json(req.user)

    }
}