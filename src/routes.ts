import express from "express"
import { createPlanController } from "./infra/controllers/plans/create";
import { findPlanController } from "./infra/controllers/plans/find";
import { deletePlanController } from "./infra/controllers/plans/delete";
import { createSubscriptionsController } from "./infra/controllers/subscriptions/create";
import { createPaymentCardController } from "./infra/controllers/payment/create";
import { updatePlanController } from "./infra/controllers/plans/update";
import { findSubscriptionController } from "./infra/controllers/subscriptions/find";

const router = express.Router()

router
    .get("/v1/plans", (req, res) =>
        findPlanController.execute(req, res)
    )
    .get("/find/subscription", (req, res) =>
        findSubscriptionController.execute(req, res)
    )
    .post("/plans/create/", (req, res) =>
        createPlanController.execute(req, res)
    )
    .post("/v1/plan/:external_id/subscription", (req, res) =>
        createSubscriptionsController.execute(req, res)
    )
    .post("/v1/subscription/:subscription_id/pay", (req, res) =>
        createPaymentCardController.execute(req, res)
    )
    .delete("/v1/plan/:id", (req, res) =>
        deletePlanController.execute(req, res)
    )
    // .delete("/v1/subscription/:subscription_id", (req, res) =>
    //     deleteSubsCriptionController.execute(req, res)
    // )
    .put("/v1/plan/:external_id", (req, res) =>
        updatePlanController.execute(req, res)
    )

export default router;
