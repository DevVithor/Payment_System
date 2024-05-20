import { DomainError } from "./domain-error"

export class InvalidExternalIdError extends Error implements DomainError {
    constructor(externalId: number) {
        super(`The external_id "${externalId}"is invalid.`)
        this.name = "InvalidExternalIdError"
    }
}