//Constructor Employee
const Employee = require('../classes/employee');

describe("Employee", () => {
    describe("questions", () => {
        it("prompts a user to provide a name", () => {
            const name = "Catherine";

            const result = new Employee().questions(name);

            expect(result).toEqual(name);
        })
    })

        it("prompts a user to provide an id", () => {
            const id = 01;

            const result = new Employee().questions(id);

            expext(result).toEqual(id);
        })

        it("prompts a user to provide an email", () => {
            const email = "catherinetest@gmail.com";

            const result = new Employee().questions(email);

            expect(result).toEqual(email);
        })

})