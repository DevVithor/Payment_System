export interface PaymentCardDTO {
    payment: Payment;
}

interface Payment {
    credit_card: Creditcard;
}

interface Creditcard {
    customer: Customer;
    payment_token: string;
    billing_address: Billingaddress;
}

interface Billingaddress {
    street: string;
    number: string;
    neighborhood: string;
    zipcode: string;
    city: string;
    complement: string;
    state: string;
}

interface Customer {
    name: string;
    cpf: string;
    email: string;
    birth: string;
    phone_number: string;
}