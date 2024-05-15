import { createPaymentCardUseCase } from "../../../../core/usecases/payment/create";
import { CreatePaymentCardController } from "./CreatePaymentCardController";


export const createPaymentCardController = new CreatePaymentCardController(
    createPaymentCardUseCase
)