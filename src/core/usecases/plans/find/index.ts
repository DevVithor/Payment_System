import { efipay } from "../../../../lib/efipay";
import { FindPlanUseCase } from "./FindPlanUseCase";


export const findPlanUseCase = new FindPlanUseCase(
    efipay
)