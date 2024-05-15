import { findSubscriptionUseCase } from "../../../../core/usecases/subscriptions/find";
import { FindSubscriptionController } from "./FindSubscriptionController";


export const findSubscriptionController = new FindSubscriptionController(
    findSubscriptionUseCase
) 