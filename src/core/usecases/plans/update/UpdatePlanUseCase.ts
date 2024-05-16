import { PrismaClient } from "@prisma/client";
import EfiPay from "sdk-typescript-apis-efi";
import BadRequest from "../../../../handler/error/BadRequest";
import { UpdatePlanDTO } from "./UpdatePlanDTO";

export class UpdatePlanUseCase {
    constructor(private client: EfiPay, private prisma: PrismaClient) { }

    async execute(externalId: number, data: UpdatePlanDTO) {

        try {

            const params = {
                id: externalId
            }

            const body = {
                name: data.name
            }

            console.log(body)

            const findPlandb = await this.prisma.plan.findFirst({
                where: {
                    externalId
                }
            })

            if (!findPlandb) {
                throw new BadRequest("Plano não existe!")
            }

            const updatePlan = await this.client.updatePlan(params, body)

            if (updatePlan) {

                await this.prisma.plan.update({
                    where: {
                        id: findPlandb.id
                    }, data: {
                        name: data.name
                    }
                })
            }

            return updatePlan
        } catch (error) {
            console.log(error)
        }
    }
}