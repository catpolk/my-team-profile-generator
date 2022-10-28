const Intern = require("../classes/intern")

describe("Intern", () => {
    describe("questions", () => {
        it("prompts a user to provide a school", () => {
            const expectedQuestions = [
                { type: 'input', name: 'name', message: 'Enter name:' },
                { type: 'input', name: 'id', message: 'Enter ID:' },
                { type: 'input', name: 'email', message: 'Enter Email: '},
                {type: 'input', name: 'school', message: 'Enter intern\'s school'},
            ];

            expect(new Intern().questions()).toEqual(expectedQuestions);
        })
    })
});