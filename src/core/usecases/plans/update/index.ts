import { efipay } from "../../../../lib/efipay";
import { prismaClient } from "../../../../lib/prismaclient";
import { UpdatePlanUseCase } from "./UpdatePlanUseCase";


export const updatePlanUseCase = new UpdatePlanUseCase(
    efipay, prismaClient
)