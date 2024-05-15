import { CreateSubscriptionUseCase } from "../../../../core/usecases/subscriptions/create/CreateSubscriptionsUseCase";
import { Request, Response } from "express"

export class CreateSubscriptionsController {
    constructor(private createSubs: CreateSubscriptionUseCase) { }

    async execute(req: Request, res: Response) {

        const external_id = req.params.external_id
        const data = req.body

        const createSubscriptio = await this.createSubs.execute(Number(external_id), data)
        res.status(201).json(createSubscriptio)
    }
}