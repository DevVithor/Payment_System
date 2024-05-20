import { Either } from "../../../lib/either";
import { PlanServiceError } from "../errors/plan-service-error";

export interface PlanOptions {
    readonly host: string
    readonly port: number
    readonly username: string
    readonly password: string
    readonly from: string
    readonly to: string
    readonly subject: string
    readonly text: string
    readonly html: string
    readonly attachments: Object[]
}

export interface PlanService {
    send: (options: PlanOptions) => Promise<Either<PlanServiceError, PlanOptions>>
}