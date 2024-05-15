import { efipay } from "../../../../lib/efipay";
import { prismaClient } from "../../../../lib/prismaclient";
import { CreatePlanUseCase } from "./CreatePlanUseCase";


export const createPlanUseCase = new CreatePlanUseCase(
    efipay, prismaClient
)