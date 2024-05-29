import { CreatePaymentCardUseCase } from "../../../../core/usecases/payment/create/CreatePaymentCardUseCase";
import { NextFunction, Request, Response } from "express"

export class CreatePaymentCardController {
    constructor(private client: CreatePaymentCardUseCase) { }

    async execute(req: Request, res: Response, next: NextFunction) {
        try {
            const subscriptionId = req.params.subscription_id
            const data = req.body

            const PaymentCard = await this.client.execute(Number(subscriptionId), data)
            res.status(200).json(PaymentCard)
        } catch (error) {
            next(error)
        }
    }
}