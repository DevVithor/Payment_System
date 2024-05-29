export default class ErrorHandler extends Error {
    public statuscode: number;

    constructor(message: string, statuscode: number) {

        super(message)
        this.statuscode = statuscode

    }
}
