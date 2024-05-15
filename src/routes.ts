import express from "express"
import { createPlanController } from "./infra/controllers/plans/create";
import { findPlanController } from "./infra/controllers/plans/find";
import { deletePlanController } from "./infra/controllers/plans/delete";
import { createSubscriptionsController } from "./infra/controllers/subscriptions/create";
import { createPaymentCardController } from "./infra/controllers/payment/create";

const router = express.Router()

router
    .get("/v1/plans", (req, res) =>
        findPlanController.execute(req, res)
    )
    .post("/plans/create/", (req, res) =>
        createPlanController.execute(req, res)
    )
    .delete("/v1/plan/:id", (req, res) =>
        deletePlanController.execute(req, res)
    )
    .post("/v1/plan/:external_id/subscription", (req, res) =>
        createSubscriptionsController.execute(req, res)
    )
    .post("/v1/subscription/:subscription_id/pay", (req, res) =>
        createPaymentCardController.execute(req, res)
    )

export default router;
