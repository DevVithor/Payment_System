import { PrismaClient } from "@prisma/client";
import { UserDTO } from "../user/UserDTO";


export class AuthLogin {
    constructor(private client: PrismaClient) { }

    async execute(email: string) {

        const findUser = await this.client.user.findFirst({
            where: {
                email: email
            }
        })

    }
}