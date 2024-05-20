import { Either, left, right } from "../../../lib/either";
import { InvalidExternalIdError } from "../errors/invalid-externalId";
import { InvalidIntervalError } from "../errors/invalid-interval";
import { InvalidNameError } from "../errors/invalid-name";
import { InvalidRepeatError } from "../errors/invalid-repeat";
import { ExternalId } from "./extenalId";
import { Interval } from "./interval";
import { Name } from "./name";
import { PlanData } from "./plan-data";
import { Repeat } from "./repeat";

export class Plan {
    public readonly name: Name
    public readonly repeat: Repeat
    public readonly interval: Interval
    public readonly externalId: ExternalId

    private constructor(name: Name, repeat: Repeat, interval: Interval, externalId: ExternalId) {
        this.name = name
        this.repeat = repeat
        this.interval = interval
        this.externalId = externalId
        Object.freeze(this)
    }

    static create(planData: PlanData): Either<InvalidNameError | InvalidIntervalError | InvalidRepeatError | InvalidExternalIdError, Plan> {

        const nameOrError: Either<InvalidNameError, Name> = Name.create(planData.name)
        const repeatOrError: Either<InvalidRepeatError, Repeat> = Repeat.create(planData.repeat)
        const intervalOrError: Either<InvalidIntervalError, Interval> = Interval.create(planData.interval)
        const externalIdOrError: Either<InvalidExternalIdError, ExternalId> = ExternalId.create(planData.externalId)


        if (nameOrError.isLeft()) {
            return left(nameOrError.value)
        }
        if (repeatOrError.isLeft()) {
            return left(repeatOrError.value)
        }
        if (intervalOrError.isLeft()) {
            return left(intervalOrError.value)
        }
        if (externalIdOrError.isLeft()) {
            return left(externalIdOrError.value)
        }

        const name: Name = nameOrError.value
        const repeat: Repeat = repeatOrError.value
        const interval: Interval = intervalOrError.value
        const extenalId: ExternalId = externalIdOrError.value
        return right(new Plan(name, repeat, interval, extenalId))
    }
}