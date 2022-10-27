const Team = require("../classes/team")

describe("Team", () => {
    describe("questions", () => {
        it("prompts a user to ", () => {
            
            const str = "inter";

            const result = new Team().questions(str);

            expect(result).toEqual(str);
        })
    })
});