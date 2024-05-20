import { Either } from "../../../lib/either";
import { PlanServiceError } from "../errors/plan-service-error";
import { PlanOptions } from "../ports/plan-service";

export type SendPlanResponse = Either<PlanServiceError, PlanOptions>