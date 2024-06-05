import ErrorHandler from "./ErrorHandler"

export default class ZodError extends ErrorHandler {

    constructor(message: string) {
        super(message, 400)

    }
}