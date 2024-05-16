export interface SubscriptionDTO {
    items: Item[];
}

interface Item {
    name: string;
    value: number;
    amount: number;
}