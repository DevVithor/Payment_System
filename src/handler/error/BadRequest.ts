import ErrorHandler from "./ErrorHandler";

export default class BadRequest extends ErrorHandler {
    constructor(message: string) {
        super(message, 400)
        this.name = "BadRequest"

    }
}