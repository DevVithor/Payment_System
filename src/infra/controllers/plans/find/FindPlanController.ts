import { FindPlanUseCase } from "../../../../core/usecases/plans/find/FindPlanUseCase";
import { Request, Response } from "express"

export class FindPlanController {
    constructor(private findPlan: FindPlanUseCase) { }

    async execute(req: Request, res: Response) {

        const { name, limit, offset } = req.query as { name: string, limit: string, offset: string }

        const findPlan = await this.findPlan.execute({ name, limit, offset })
        res.status(200).json(findPlan)

    }
}