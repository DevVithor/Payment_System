import { DomainError } from "./domain-error";

export class InvalidIntervalError extends Error implements DomainError {
    constructor(interval: number) {
        super(`The interval "${interval}"is invalid.`)
        this.name = "InvalidIntervalError"
    }
}