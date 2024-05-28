import { authLogin } from "../../../../core/usecases/login/create";
import { AuthLoginController } from "./AuthLoginController";

export const authLoginController = new AuthLoginController(
    authLogin
)