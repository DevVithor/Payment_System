import { User } from "../core/entities/User";


declare global {
    namespace Express {
        export interface Request {
            user: Partial<User>
        }
    }
}