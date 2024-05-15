export default class ErrorHandler extends Error {
    public name: string;
    public status: number;

    constructor(message: string, name = 'ErrorHandler', status = 500) {
        super(message)
        this.name = name;
        this.status = status;
    }
}
