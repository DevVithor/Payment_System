import { createPlanUseCase } from "../../../../core/usecases/plans/create";
import { CreatePlanController } from "./CreatePlanController";


export const createPlanController = new CreatePlanController(
    createPlanUseCase
)