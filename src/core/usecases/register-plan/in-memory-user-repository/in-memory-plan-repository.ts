import { PlanRepository } from "../../ports/plan-repository";
import { PlanData } from "../../../entites/plan/plan-data";

export class InMemoryPlanRepository implements PlanRepository {
    plans: PlanData[] = []
    constructor(plans: PlanData[]) {
        this.plans = plans
    }

    async findAllPlans(): Promise<PlanData[]> {
        return this.plans
    }

    async findPlanByExternalId(externalId: number): Promise<PlanData> {
        var u: PlanData
        for (u of this.plans) {
            if (u.externalId === externalId) {
                return u
            }
        }
        return null
    }

    async exists(externalId: number): Promise<boolean> {
        if (await this.findPlanByExternalId(externalId) == null) {
            return false
        }
        return true
    }

    async add(plan: PlanData): Promise<void> {
        const exists = await this.exists(plan.externalId)
        if (!exists) {
            this.plans.push(plan)
        }
    }
}