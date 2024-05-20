import { Either, left, right } from "../../../lib/either"
import { InvalidRepeatError } from "../errors/invalid-repeat"

export class Repeat {
    private readonly repeat: number

    private constructor(repeat: number) {

        this.repeat = repeat
        Object.freeze(this)
    }

    static create(repeat: number): Either<InvalidRepeatError, Repeat> {
        if (!Repeat.validate(repeat)) {
            return left(new InvalidRepeatError(repeat))
        }
        return right(new Repeat(repeat))
    }

    get value(): number {
        return this.repeat
    }

    static validate(repeat: number): boolean {
        if (!repeat || repeat < 0) {
            return false
        }
        return true
    }
}