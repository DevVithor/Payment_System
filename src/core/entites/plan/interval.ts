import { Either, right, left } from "../../../lib/either"
import { InvalidIntervalError } from "../errors/invalid-interval"


export class Interval {
    private readonly interval: number

    private constructor(interval: number) {

        this.interval = interval
        Object.freeze(this)

    }

    static create(interval: number): Either<InvalidIntervalError, Interval> {
        if (!Interval.validate(interval)) {
            return left(new InvalidIntervalError(interval))
        }
        return right(new Interval(interval))
    }

    get value(): number {
        return this.interval
    }

    static validate(interval: number): boolean {
        if (!interval || interval < 0) {
            return false
        }
        return true
    }
}