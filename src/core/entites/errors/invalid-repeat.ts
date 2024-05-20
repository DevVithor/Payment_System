import { DomainError } from "./domain-error";

export class InvalidRepeatError extends Error implements DomainError {
    constructor(repeat: number) {
        super(`The repeat "${repeat}" is invalid.`)
        this.name = 'InvalidRepeatError'
    }
}