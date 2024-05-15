import ErrorHandler from "./Handler";

export default class BadRequest extends ErrorHandler {
    constructor(message: string) {
        super(message, 'BadRequest', 400)
    }
}