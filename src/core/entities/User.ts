export class User {

    name: string
    password: string
    email: string
    phone: string
    adress: string | null

    constructor(data: User) {
        this.name = data.name
        this.password = data.password
        this.email = data.email
        this.phone = data.phone
        this.adress = data.adress
    }

}