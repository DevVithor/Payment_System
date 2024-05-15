import { CreatePaymentCardUseCase } from "../../../../core/usecases/payment/create/CreatePaymentCardUseCase";
import { Request, Response } from "express"

export class CreatePaymentCardController {
    constructor(private client: CreatePaymentCardUseCase) { }

    async execute(req: Request, res: Response) {

        const subscriptionId = req.params.subscription_id
        const data = req.body

        const PaymentCard = await this.client.execute(Number(subscriptionId), data)
        res.status(200).json(PaymentCard)
    }
}