export class ServerError extends Error implements ControllerError {
    constructor(reason: string) {
        super('Server errpr: ' + reason + '.')
        this.name = 'ServerError'
    }
}