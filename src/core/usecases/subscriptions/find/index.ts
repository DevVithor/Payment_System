import { prismaClient } from "../../../../lib/prismaclient";
import { FindSubscriptionUseCase } from "./FindSubscriptionUseCase";


export const findSubscriptionUseCase = new FindSubscriptionUseCase(
    prismaClient
)