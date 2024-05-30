import EfiPay from "sdk-typescript-apis-efi";
import { PlanDTO } from "./PlanDTO";
import { PrismaClient } from "@prisma/client";

export class CreatePlanUseCase {
    constructor(private client: EfiPay, private prismaClient: PrismaClient) { }

    async execute(data: PlanDTO) {

        const params = {}

        const body = {
            name: data.name,
            repeats: data.repeats,
            interval: data.interval
        }

        const createPlan = await this.client.createPlan(params, body)

        const savePlan = await this.prismaClient.plan.create({
            data: {
                name: data.name,
                repeat: data.repeats,
                interval: data.interval,
                externalId: createPlan.data.plan_id
            }
        })

        return savePlan
    }
}