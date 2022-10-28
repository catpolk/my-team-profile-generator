//Constructor Employee
const Employee = require('../classes/employee');

describe("Employee", () => {
    describe("questions", () => {
        it("prompts a user to provide a name", () => {
            const expectedQuestions = [
                { type: 'input', name: 'name', message: 'Enter name:' },
                { type: 'input', name: 'id', message: 'Enter ID:' },
                { type: 'input', name: 'email', message: 'Enter Email: ' }
            ];

            expect(new Employee().questions()).toEqual(expectedQuestions);
        });
    });

    describe("saveAnswers", () => {
        it("saves answers provided by the user", () => {
            const str = "saves answers";
            const obj = new Employee();
        
            obj.saveAnswers(str);

            expect(obj.answers).toEqual(str)
        });
    });

});