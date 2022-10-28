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

            const answer = {
                name: "John",
                id: 1,
                email: "test1@gmail.com",
                git: "catpolk"
            };
            
            const renderedStr = 
            `
            <div class="col-4" id="card-size">
                <div class="card-header mt-5">
                    <h2>${answer.name}</h2>
                    <h3>Engineer</h3>
                </div>
                <div class="card-body">
                    <p class="id">ID: ${answer.id}</p>
                    <p class="email">Email: <a href="mailto: ${answer.email}">${answer.email}</a></p>
                    <p class="github">Github: ${answer.git} </p>
                </div>
            </div> 
            `;

            const obj = new Engineer();
            obj.saveAnswers(answer);


            expect(obj.render()).toEqual(obj.saveAnswers(answer));

        }
    })


});
