import { findPlanUseCase } from "../../../../core/usecases/plans/find";
import { FindPlanController } from "./FindPlanController";

export const findPlanController = new FindPlanController(
    findPlanUseCase
)