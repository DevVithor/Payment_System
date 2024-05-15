import EfiPay from "sdk-typescript-apis-efi";
import { FindDTO } from "./FindDTO";

export class FindPlanUseCase {
    constructor(private client: EfiPay) { }

    async execute(data: FindDTO) {

        try {

            const body = {
                name: data.name,
                limit: data.limit,
                offset: data.offset
            }

            const findPlan = await this.client.listPlans(body)

            return findPlan

        } catch (error) {
            console.log(error)
        }

    }
}
