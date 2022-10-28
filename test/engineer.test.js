const Engineer = require("../classes/engineer")

describe("Engineer", () => {
    describe("questions", () => {
        it("prompts a user to answer questions", () => {
            const expectedQuestion =  [
                { type: 'input', name: 'name', message: 'Enter name:' },
                { type: 'input', name: 'id', message: 'Enter ID:' },
                { type: 'input', name: 'email', message: 'Enter Email: '},
                {type: 'input', name: 'git', message: 'Enter Github username'}
            ];

            expect(new Engineer().questions()).toEqual(expectedQuestion);
        })
    });
    describe("render", () => {
        it("renders HTML  file"), () => {
            //arrange 
            const savedName = "Bob";
            const renderedStr = `<h2>Engineer's name is ${savedName}</h2>`;

            const obj = new Engineer(renderedStr);

            //act 
            //assert
            expect(obj.render()).toEqual(renderedStr);

        }
    })

});
