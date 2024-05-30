import { FindPlanUseCase } from "../../../../core/usecases/plans/find/FindPlanUseCase";
import { NextFunction, Request, Response } from "express"

export class FindPlanController {
    constructor(private findPlan: FindPlanUseCase) { }

    async execute(req: Request, res: Response) {

        const findPlan = await this.findPlan.execute()
        res.status(200).json(findPlan)
    }
}