import { PlanData } from "../../entites/plan/plan-data";

export interface PlanRepository {
    findAllPlans: () => Promise<PlanData[]>
    findPlanByExternalId: (externalId: number) => Promise<PlanData>
    add: (plan: PlanData) => Promise<void>
    exists: (externalId: number) => Promise<boolean>
}