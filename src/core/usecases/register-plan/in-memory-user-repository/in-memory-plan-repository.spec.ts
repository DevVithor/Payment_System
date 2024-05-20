import { describe, expect, test } from "vitest";
import { PlanData } from "../../../entites/plan/plan-data";
import { InMemoryPlanRepository } from "./in-memory-plan-repository";

describe(("In memory Plan repository"), () => {
    test("Should return user if user is found", async () => {
        const plans: PlanData[] = [{ name: "Netflix", interval: 1, repeat: 12, externalId: 106630 }]
        const planRepo = new InMemoryPlanRepository(plans)
        const plan = await planRepo.findPlanByExternalId(106630)
        expect(plan.name).toEqual("Netflix")
    })
    test("should return null if externalId is not found", async () => {
        const plans: PlanData[] = []
        const planRepo = new InMemoryPlanRepository(plans)
        const plan = await planRepo.findPlanByExternalId(106630)
        expect(plan).toEqual(null)
    })
})