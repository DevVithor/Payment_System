import { describe, test, expect } from "vitest";
import { InvalidNameError } from "../errors/invalid-name";
import { left } from "../../../lib/either";
import { Plan } from "./plan";
import { InvalidIntervalError } from "../errors/invalid-interval";
import { InvalidExternalIdError } from "../errors/invalid-externalId";
import { InvalidRepeatError } from "../errors/invalid-repeat";

describe("Plan domain entity", async () => {
    test('Should not create plan with invalid name', async () => {
        const name = ''

        const nameOrError = Plan.create({ name: name, interval: 1, externalId: 106630, repeat: 12 })
        expect(nameOrError).toEqual(left(new InvalidNameError(name)))
    })

    test('Should not create plan with invalid interval', () => {
        const interval = 0

        const intervalOrError = Plan.create({ name: "Vithor", interval: interval, externalId: 106630, repeat: 12 })
        expect(intervalOrError).toEqual(left(new InvalidIntervalError(interval)))
    })
    test("Should not create Plan with invalid externalID", async () => {
        const extenalId = 0

        const externalIdOrError = Plan.create({ name: "Vithor", interval: 1, externalId: extenalId, repeat: 12 })
        expect(externalIdOrError).toEqual(left(new InvalidExternalIdError(extenalId)))
    })
    test("Shold not create Plan witch invalid repeat", async () => {
        const repeat = 0

        const repeatOrError = Plan.create({ name: "Vithor", interval: 12, externalId: 106630, repeat: repeat })
        expect(repeatOrError).toEqual(left(new InvalidRepeatError(repeat)))
    })
})