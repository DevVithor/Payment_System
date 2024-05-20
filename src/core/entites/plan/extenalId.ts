import { Either, right, left } from "../../../lib/either"
import { InvalidExternalIdError } from "../errors/invalid-externalId"

export class ExternalId {
    private readonly externalId: number

    private constructor(externalId: number) {

        this.externalId = externalId
        Object.freeze(this)
    }

    static create(externalId: number): Either<InvalidExternalIdError, ExternalId> {
        if (!ExternalId.validate(externalId)) {
            return left(new InvalidExternalIdError(externalId))
        }
        return right(new ExternalId(externalId))
    }

    get value(): number {
        return this.externalId
    }

    static validate(externalId: number): boolean {
        if (!externalId || externalId < 0 || externalId > 10) {
            return false
        }
        return true
    }
}