import { createSubscriptionsUseCase } from "../../../../core/usecases/subscriptions/create";
import { CreateSubscriptionsController } from "./CreateSubscriptionsController";


export const createSubscriptionsController = new CreateSubscriptionsController(
    createSubscriptionsUseCase
)