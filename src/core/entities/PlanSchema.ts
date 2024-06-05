import * as z from "zod";

export const PlanSchema = z.object({
    name: z.string(),
    repeat: z.number(),
    interval: z.number(),
})


