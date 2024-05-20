import { Either } from "../../../lib/either";
import { InvalidNameError } from "../../entites/errors/invalid-name";
import { InvalidRepeatError } from "../../entites/errors/invalid-repeat";
import { InvalidIntervalError } from "../../entites/errors/invalid-interval";
import { InvalidExternalIdError } from "../../entites/errors/invalid-externalId";
import { PlanData } from "../../entites/plan/plan-data";

export type RegisterPlanResponse = Either<InvalidNameError | InvalidRepeatError | InvalidIntervalError | InvalidExternalIdError, PlanData> 