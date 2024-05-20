import { SendPlanResponse } from "./send-name-reponse";
import { PlanData } from "../../entites/plan/plan-data";

export interface SendPlan {
    sendPlanToUser: (plan: PlanData) => Promise<SendPlanResponse>
}