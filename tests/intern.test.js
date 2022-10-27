const Intern = require("../classes/intern")

describe("Intern", () => {
    describe("questions", () => {
        it("prompts a user to provide a school", () => {
            const school = "columbia";

            const result = new Intern().questions(school);

            expect(result).toEqual(this.questions.school);
        })
    })
});