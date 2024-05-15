import { UpdatePlanUseCase } from "../../../../core/usecases/plans/update/UpdatePlanUseCase";
import { Request, Response } from "express"

export class UpdatePlanController {
    constructor(private updatePlan: UpdatePlanUseCase) { }

    async execute(req: Request, res: Response) {

        const external_id = req.params.external_id

        const data = req.body

        console.log(Number(external_id))
        const updatePlan = await this.updatePlan.execute(Number(external_id), data)
        res.status(200).json(updatePlan)
    }
}