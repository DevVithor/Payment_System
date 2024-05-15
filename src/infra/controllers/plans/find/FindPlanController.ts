import { FindPlanUseCase } from "../../../../core/usecases/plans/find/FindPlanUseCase";
import { Request, Response } from "express"

export class FindPlanController {
    constructor(private findPlan: FindPlanUseCase) { }

    async execute(req: Request, res: Response) {

        const data = req.body

        const findPlan = await this.findPlan.execute(data)
        res.status(200).json(findPlan)

    }
}