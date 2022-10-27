const Engineer = require("../classes/engineer")

describe("Engineer", () => {
    describe("questions", () => {
        it("prompts a user to provide a git account", () => {
            const git = "cattest";

            const result = new Engineer().questions(git);

            expect(result).toEqual(git);
        })
    })
});
