import express, { NextFunction, Request, Response } from "express"
import { createUserController } from "./infra/controllers/user";
import { authMiddleware } from "./core/middleware/authMiddleware";
import { getUserController } from "./infra/controllers/login/find";
import { findPlanController } from "./infra/controllers/plans/find";
import { authLoginController } from "./infra/controllers/login/create";
import { createPlanController } from "./infra/controllers/plans/create";
import { deletePlanController } from "./infra/controllers/plans/delete";
import { updatePlanController } from "./infra/controllers/plans/update";
import { createPaymentCardController } from "./infra/controllers/payment/create";
import { findSubscriptionController } from "./infra/controllers/subscriptions/find";
import { createSubscriptionsController } from "./infra/controllers/subscriptions/create";

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
    .post("/register", (req, res) =>
        createUserController.execute(req, res)
    )
    .post("/login", (req, res) =>
        authLoginController.execute(req, res)
    )
    .get("/profile", authMiddleware, (req, res) =>
        getUserController.execute(req, res)
    )
    .delete("/v1/plan/:id", (req, res) =>
        deletePlanController.execute(req, res)
    )
    .put("/v1/plan/:external_id", (req, res) =>
        updatePlanController.execute(req, res)
    )

export default router;
