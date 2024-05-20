import { UseCaseError } from "./usecase-error"

export class PlanServiceError extends Error implements UseCaseError {
    constructor() {
        super('Plan service error.')
        this.name = 'PlanServiceError'
    }
}