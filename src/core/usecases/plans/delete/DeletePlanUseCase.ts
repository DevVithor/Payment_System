import EfiPay from "sdk-typescript-apis-efi";


export class DeletePlanUseCase {
    constructor(private client: EfiPay) { }

    async execute(id: number) {

        try {

            const params = {
                id: id
            }

            const deletePlan = await this.client.deletePlan(params)

            return deletePlan

        } catch (error) {
            console.log(error)
        }

    }
}