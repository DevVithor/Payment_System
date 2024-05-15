import { deletePlanUseCase } from "../../../../core/usecases/plans/delete";
import { DeletePlanController } from "./DeletePlanController";


export const deletePlanController = new DeletePlanController(
    deletePlanUseCase
)