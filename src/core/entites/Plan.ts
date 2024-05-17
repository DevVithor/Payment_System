export class Plan {
    public name: string;
    public repeats: number;
    public interval: number;
    public externalId: number;

    constructor(data: Plan) { 
        this.name = data.name
        this.repeats = data.repeats
        this.interval = data.interval
        this.externalId = data.externalId
    }
}