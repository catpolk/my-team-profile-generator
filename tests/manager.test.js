const Manager = require("../classes/manager")

describe("Manager", () => {
    describe("questions", () => {
        it("prompts a user to provide an office number", () => {
            const num = 20;

            const result = new Manager().questions(num);

            expect(result).toEqual(num);
        })
    })
});