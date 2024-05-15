import { PrismaClient } from "@prisma/client";

export class FindPlanUseCase {
    constructor(private prismaClient: PrismaClient) { }

    async execute() {

        const findPlandDb = await this.prismaClient.plan.findFirst()

        return findPlandDb

    }
}
