import { RegisterPlanResponse } from "./register-user-response";
import { PlanData } from "../../entites/plan/plan-data";

export interface RegisterPlan {
    registerPlanOnData: (plan: PlanData) => Promise<RegisterPlanResponse>
}