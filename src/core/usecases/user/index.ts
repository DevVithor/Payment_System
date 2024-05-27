import { prismaClient } from "../../../lib/prismaclient";
import { CreateUserUseCase } from "./CreateUserUseCase";

export const createUserUseCase = new CreateUserUseCase(
    prismaClient
)