import EfiPay from "sdk-typescript-apis-efi";
import { SubscriptionDTO } from "./SubscriptionDTO";
import { PrismaClient } from "@prisma/client";

export class CreateSubscriptionUseCase {
    constructor(private client: EfiPay, private prismaClient: PrismaClient) { }

    async execute(external_id: number, data: SubscriptionDTO) {

        try {

            for (const items of data.items) {

                const subscriptionBody = {
                    items: [
                        {
                            name: items.name,
                            value: items.value,
                            amount: items.amount,
                        }
                    ]
                }

                const findPlan = await this.prismaClient.plan.findFirst({
                    where: {
                        external_id: external_id
                    }
                })

                if (!findPlan) {
                    throw new Error("Plan not exists")
                }

                const params = {
                    id: findPlan.external_id
                }

                const createSubscription = await this.client.createSubscription(params, subscriptionBody)

                for (const charges of createSubscription.data.charges) {

                    const createSubscriptionDb = await this.prismaClient.subscription.create({
                        data: {
                            subscriptionId: createSubscription.data.subscription_id,
                            chargeId: charges.charge_id,
                            status: charges.status,
                            total: charges.total,
                            parcel: charges.parcel
                        }
                    })
                    return createSubscriptionDb
                }

            }
        } catch (error) {
            console.log(error)
        }
    }
}
