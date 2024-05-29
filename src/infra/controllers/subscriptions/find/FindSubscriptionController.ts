import { FindSubscriptionUseCase } from "../../../../core/usecases/subscriptions/find/FindSubscriptionUseCase";
import { NextFunction, Request, Response } from "express"

export class FindSubscriptionController {
    constructor(private findSubscription: FindSubscriptionUseCase) { }

    async execute(req: Request, res: Response, next: NextFunction) {
        try {
            const findSubscription = await this.findSubscription.execute()
            res.status(200).json(findSubscription)

        } catch (error) {
            next(error)
        }
    }
}