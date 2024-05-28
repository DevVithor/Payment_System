import ErrorHandler from "./Handler";

export default class Unauthorized extends ErrorHandler {
    constructor(message: string) {
        super(message, "Not Authorized", 401)
    }
}