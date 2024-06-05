export class Plan {
    name: String
    repeat: number
    interval: number
    externalId: number

    constructor(data: Plan) {
        this.name = data.name
        this.repeat = data.repeat
        this.interval = data.interval
        this.externalId = data.externalId
    }
}
