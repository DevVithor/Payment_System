import EfiPay from "sdk-typescript-apis-efi";
import { PaymentCardDTO } from "./PaymentCardDTO";
import { PrismaClient } from "@prisma/client";

export class CreatePaymentCardUseCase {
    constructor(private client: EfiPay, private prismaClient: PrismaClient) { }

    async execute(subscriptionId: number, data: PaymentCardDTO) {

        try {

            const params = {
                id: subscriptionId,
            }

            const body = {
                payment: {
                    credit_card: {
                        payment_token: data.payment.credit_card.payment_token,
                        billing_address: {
                            street: data.payment.credit_card.billing_address.street,
                            number: data.payment.credit_card.billing_address.number,
                            neighborhood: data.payment.credit_card.billing_address.neighborhood,
                            zipcode: data.payment.credit_card.billing_address.zipcode,
                            city: data.payment.credit_card.billing_address.city,
                            state: data.payment.credit_card.billing_address.state,
                        },
                        customer: {
                            name: data.payment.credit_card.customer.name,
                            email: data.payment.credit_card.customer.email,
                            cpf: data.payment.credit_card.customer.cpf,
                            birth: data.payment.credit_card.customer.birth,
                            phone_number: data.payment.credit_card.customer.phone_number,
                        },
                    },
                },
            };
            const definePaymentCard = await this.client.defineSubscriptionPayMethod(params, body)

            console.log(definePaymentCard.data.plan.id)
            const transactionData = await this.prismaClient.payment.create({
                data: {
                    subscriptionId: definePaymentCard.data.subscription_id,
                    subscriptionStatus: definePaymentCard.data.status,
                    planId: definePaymentCard.data.plan.id,
                    interval: definePaymentCard.data.plan.interval,
                    repeat: definePaymentCard.data.plan.repeats,
                    chargeId: definePaymentCard.data.charge.id,
                    chargeStatus: definePaymentCard.data.charge.status,
                    parcel: definePaymentCard.data.charge.parcel,
                    total: definePaymentCard.data.charge.total,
                    firstExecution: definePaymentCard.data.first_execution,
                    subscriptionTotal: definePaymentCard.data.total,
                    payment: definePaymentCard.data.payment

                }
            })
            return transactionData
        } catch (error) {
            console.log(error)
        }
    }
}