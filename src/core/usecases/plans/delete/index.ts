import { efipay } from "../../../../lib/efipay";
import { DeletePlanUseCase } from "./DeletePlanUseCase";


export const deletePlanUseCase = new DeletePlanUseCase(
    efipay
)