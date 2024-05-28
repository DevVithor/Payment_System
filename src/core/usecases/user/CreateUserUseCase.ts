import { UserDTO } from "./UserDTO";
import { PrismaClient } from "@prisma/client";
import BadRequest from "../../../handler/error/BadRequest";


export class CreateUserUseCase {
    constructor(private client: PrismaClient) { }

    async execute(data: UserDTO, hashPassword: string) {

        const findUser = await this.client.user.findFirst({
            where: {
                email: data.email
            }
        })

        if (findUser) {
            throw new BadRequest("Already registered user")
        }

        const createUser = await this.client.user.create({
            data: {
                name: data.name,
                password: hashPassword,
                adress: data.adress,
                phone: data.phone,
                email: data.email
            }
        })

        const { password: _, ...user } = createUser

        return user
    }
}