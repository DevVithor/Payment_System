import { CreatePlanUseCase } from "../../../../core/usecases/plans/create/CreatePlanUseCase";
import { Request, Response } from "express"

export class CreatePlanController {
    constructor(private createPlan: CreatePlanUseCase) { }

    async execute(req: Request, res: Response) {

        try {

            const data = req.body

            const createPlan = await this.createPlan.execute(data)
            res.status(201).json(createPlan)

        } catch (error) {
            console.log(error)
        }
    }
}