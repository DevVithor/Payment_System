import ErrorHandler from "./ErrorHandler";

export class Unauthorized extends ErrorHandler {
    constructor(message: string) {
        super(message, 500)
    }
}