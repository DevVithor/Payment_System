import EfiPay from "sdk-typescript-apis-efi";

import BadRequest from "../../../../handler/error/BadRequest";
import { PrismaClient } from "@prisma/client";
import { FindDTO } from "./FindDTO";

export class FindPlanUseCase {
    constructor(private client: EfiPay, private prismaClient: PrismaClient) { }

    async execute(data: FindDTO) {

        try {

            const findPlandDb = await this.prismaClient.plan.findFirst({
                where: {
                    name: data.name,
                }
            })

            if (!findPlandDb) {
                throw new BadRequest("Plano não existe!")
            }

            const findPlan = await this.client.listPlans(data.name)

            return findPlan

        } catch (error) {
            console.log(error)
        }

    }
}
