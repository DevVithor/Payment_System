import { PlanData } from "../../entites/plan/plan-data";
import { PlanRepository } from "../ports/plan-repository";
import { RegisterPlan } from "./register-plan";
import { RegisterPlanResponse } from "./register-user-response";
import { Plan } from "../../entites/plan/plan";
import { InvalidNameError } from "../../entites/errors/invalid-name";
import { InvalidRepeatError } from "../../entites/errors/invalid-repeat";
import { InvalidIntervalError } from "../../entites/errors/invalid-interval";
import { InvalidExternalIdError } from "../../entites/errors/invalid-externalId";
import { Either, left, right } from "../../../lib/either";

export class RegisterPlanOnData implements RegisterPlan {
    private readonly planRepository: PlanRepository

    constructor(planRepo: PlanRepository) {
        this.planRepository = planRepo
    }

    async registerPlanOnData(planData: PlanData): Promise<RegisterPlanResponse> {
        const planOrError: Either<InvalidNameError | InvalidRepeatError | InvalidIntervalError | InvalidExternalIdError, Plan> = Plan.create(planData)
        if (planOrError.isLeft()) {
            return left(planOrError.value)
        }
        const plan: Plan = planOrError.value
        const exists = this.planRepository.exists(plan.externalId.value)
        if (!(await exists).valueOf()) {
            await this.planRepository.add({ name: plan.name.value, repeat: plan.repeat.value, interval: plan.interval.value, externalId: plan.externalId.value })
        }
        return right(planData)
    }
}