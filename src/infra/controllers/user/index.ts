import { createUserUseCase } from "../../../core/usecases/user";
import { CreateUserController } from "./CreateUserController";

export const createUserController = new CreateUserController(
    createUserUseCase
)