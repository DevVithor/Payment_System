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
    .get("/v1/plans", (req, res, next) =>
        findPlanController.execute(req, res, next)
    )
    .get("/find/subscription", (req, res, next) =>
        findSubscriptionController.execute(req, res, next)
    )
    .post("/plans/create/", (req, res, next) =>
        createPlanController.execute(req, res, next)
    )
    .post("/v1/plan/:external_id/subscription", (req, res, next) =>
        createSubscriptionsController.execute(req, res, next)
    )
    .post("/v1/subscription/:subscription_id/pay", (req, res, next) =>
        createPaymentCardController.execute(req, res, next)
    )
    .post("/register", (req, res, next) => {
        createUserController.execute(req, res, next)
    })
    .post("/login", (req, res, next) => {
        authLoginController.execute(req, res, next)
    })
    .get("/profile", authMiddleware, (req, res, next) => {
        getUserController.execute(req, res, next)
    })
    .delete("/v1/plan/:id", (req, res, next) =>
        deletePlanController.execute(req, res, next)
    )
    .put("/v1/plan/:external_id", (req, res, next) =>
        updatePlanController.execute(req, res, next)
    )

export default router;
