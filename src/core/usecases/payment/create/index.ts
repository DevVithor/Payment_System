import { efipay } from "../../../../lib/efipay";
import { prismaClient } from "../../../../lib/prismaclient";
import { CreatePaymentCardUseCase } from "./CreatePaymentCardUseCase";


export const createPaymentCardUseCase = new CreatePaymentCardUseCase(
    efipay, prismaClient
)