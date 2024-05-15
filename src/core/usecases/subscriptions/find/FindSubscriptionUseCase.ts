import { PrismaClient } from "@prisma/client";

export class FindSubscriptionUseCase {
    constructor(private prisma: PrismaClient) { }

    async execute() {

        const findSubscriptionDb = await this.prisma.subscription.findMany()

        return findSubscriptionDb
    }
}