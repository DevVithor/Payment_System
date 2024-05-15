import { DeletePlanUseCase } from "../../../../core/usecases/plans/delete/DeletePlanUseCase";
import { Request, Response } from "express"

export class DeletePlanController {
    constructor(private deletePlan: DeletePlanUseCase) { }

    async execute(req: Request, res: Response) {

        const id = req.params.id

        const deletePlan = await this.deletePlan.execute(Number(id))
        res.status(200).json(deletePlan)

    }
}