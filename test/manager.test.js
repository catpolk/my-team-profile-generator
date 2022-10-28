const Manager = require("../classes/manager")

describe("Manager", () => {
    describe("questions", () => {
        it("prompts a user to answer questions", () => {
            const expectedQuestions = [
                { type: 'input', name: 'name', message: 'Enter name:' },
                { type: 'input', name: 'id', message: 'Enter ID:' },
                { type: 'input', name: 'email', message: 'Enter Email: '},
                {type: 'input', name: 'officeNumber', message: 'Enter office number'}
            ];

            expect(new Manager().questions()).toEqual(expectedQuestions);
        })
    })
});