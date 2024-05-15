import { updatePlanUseCase } from "../../../../core/usecases/plans/update";
import { UpdatePlanController } from "./UpdatePlanController";


export const updatePlanController = new UpdatePlanController(
    updatePlanUseCase
)