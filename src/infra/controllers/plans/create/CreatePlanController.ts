import { PlanSchema } from "../../../../core/entities/PlanSchema";
import { CreatePlanUseCase } from "../../../../core/usecases/plans/create/CreatePlanUseCase";
import { Request, Response } from "express"

export class CreatePlanController {
    constructor(private createPlan: CreatePlanUseCase) { }

    async execute(req: Request, res: Response) {

        const data = req.body

        const dataValidation = PlanSchema.parse(data)

        const createPlan = await this.createPlan.execute(dataValidation)

        res.status(201).json(createPlan)

    }
}