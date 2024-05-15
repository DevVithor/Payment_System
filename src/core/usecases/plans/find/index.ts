import { efipay } from "../../../../lib/efipay";
import { prismaClient } from "../../../../lib/prismaclient";
import { FindPlanUseCase } from "./FindPlanUseCase";


export const findPlanUseCase = new FindPlanUseCase(
    prismaClient
)