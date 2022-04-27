const FizzbuzzService = require("../../lib/services/FizzbuzzService");

describe("FizzBuzz Service tests",()=>{
    test("1) Test with explorer1", () => {
        const explorer1 = {name: "Explorer1", score: 1};
        const explorerValidated = FizzbuzzService.applyValidationInExplorer(explorer1);
        expect(explorerValidated.trick).toBe(1);
    });

    test("2) Test with explorer3", () => {
        const explorer3 = {name: "Explorer3", score: 3};
        const explorerValidated = FizzbuzzService.applyValidationInExplorer(explorer3);
        expect(explorerValidated.trick).toBe("FIZZ");
    });

    test("3) Test with explorer5", () => {
        const explorer5 = {name: "Explorer5", score: 5};
        const explorerValidated = FizzbuzzService.applyValidationInExplorer(explorer5);
        expect(explorerValidated.trick).toBe("BUZZ");
    });

    test("4) Test with explorer15", () => {
        const explorer15 = {name: "Explorer15", score: 15};
        const explorerValidated = FizzbuzzService.applyValidationInExplorer(explorer15);
        expect(explorerValidated.trick).toBe("FIZZBUZZ");
    });

    test("5) Test for validate a number (endpoint in API)", () => {
        const number = 5;
        const numberValidated = FizzbuzzService.applyValidationInNumber(number);
        expect(numberValidated).toBe("Buzz");
    });
});