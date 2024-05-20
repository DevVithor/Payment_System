import { HttpRequest, HttpResponse } from "./ports/http";
import { MissingParamError } from "./erros";
import { badRequest, serverError, ok } from "./helpers/http-helper";
import { RegisterPlan } from "../../../../core/usecases/register-plan/register-plan";
import { RegisterPlanResponse } from "../../../../core/usecases/register-plan/register-user-response";
import { SendPlan } from "../../../../core/usecases/send-plan-to-name/send-plan";
import { SendPlanResponse } from "../../../../core/usecases/send-plan-to-name/send-name-reponse";


export class RegisterPlanController {
    private readonly registerPlan: RegisterPlan
    private readonly sendPlanToData: SendPlan

    constructor(registerPlan: RegisterPlan, sendPlanToData: SendPlan) {
        this.registerPlan = registerPlan
        this.sendPlanToData = sendPlanToData
    }

    async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
        try {
            if (!httpRequest.body.name || !httpRequest.body.externalId) {
                const field = !httpRequest.body.plan ? "name" : "externalId"
                return badRequest(new MissingParamError(field))
            }
            const planData = { name: httpRequest.body.name, externalId: httpRequest.body.externalId, interval: httpRequest.body.interval, repeat: httpRequest.body.repeat }
            const registerPlanResponse: RegisterPlanResponse = await this.registerPlan.registerPlanOnData(planData)
            if (registerPlanResponse.isLeft()) {
                return badRequest(registerPlanResponse.value)
            }
            const sendPlanResponse: SendPlanResponse = await this.sendPlanToData.sendPlanToUser(planData)
            if (sendPlanResponse.isLeft()) {
                return serverError(sendPlanResponse.value.message)
            }
            return ok(planData)
        } catch (error) {
            return serverError('interval')
        }
    }
}