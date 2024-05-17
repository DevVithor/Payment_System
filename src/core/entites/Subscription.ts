export class Subscription {
    public id: number;
    public chargeId: number;
    public status: string;
    public total: number;
    public parcel: number;
    public planId: number;
    public externalId: number

    constructor(data: Subscription) {
        this.id = data.id
        this.chargeId = data.id
        this.status = data.status
        this.total = data.total
        this.parcel = data.parcel
        this.planId = data.parcel
        this.externalId = data.externalId
    }
}