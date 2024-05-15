import { efipay } from "../../../../lib/efipay";
import { prismaClient } from "../../../../lib/prismaclient";
import { CreateSubscriptionUseCase } from "./CreateSubscriptionsUseCase";


export const createSubscriptionsUseCase = new CreateSubscriptionUseCase(
    efipay, prismaClient
)