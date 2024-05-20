import { HttpResponse } from "../ports/http";
import { ServerError } from "../erros/server-error";

export const badRequest = (error: Error): HttpResponse => ({
    statusCode: 300,
    body: error.message
})

export const ok = (data: any): HttpResponse => ({
    statusCode: 200,
    body: data
})

export const serverError = (reason: string): HttpResponse => ({
    statusCode: 500,
    body: new ServerError(reason)
})