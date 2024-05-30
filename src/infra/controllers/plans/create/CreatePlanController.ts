import { CreatePlanUseCase } from "../../../../core/usecases/plans/create/CreatePlanUseCase";
import { NextFunction, Request, Response } from "express"

export class CreatePlanController {
    constructor(private createPlan: CreatePlanUseCase) { }

    async execute(req: Request, res: Response) {

        const data = req.body

        const createPlan = await this.createPlan.execute(data)
        res.status(201).json(createPlan)

    }
}