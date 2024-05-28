import { AuthLogin } from "./AuthLogin";
import { prismaClient } from "../../../../lib/prismaclient";

export const authLogin = new AuthLogin(
    prismaClient
)