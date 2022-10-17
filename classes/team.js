const inquirer = require('inquirer');

const Manager = require('./manager');
const Engineer = require('./engineer');


class Team {
    constructor(){
        this.manager = new Manager();
        // this.engineer = new Engineer();
        this.enginners = [];
    }
    
    build() {
         //prompts questions for manager and saves them in save Answers 
        inquirer.prompt(this.manager.questions()).then((response) => {
            // console.log(response);
            this.manager.saveAnswers(response);
            // var fileContent = generateHTML(response);
            // writeToFile('generateHTML.js', fileContent)
            console.log(this.manager.answers);
        }).then(() => {
            inquirer.prompt(this.questions()).then((response) => {
                const engObj = new Engineer();
                inquirer.prompt(engObj.questions()).then((response) => {
                    engObj.saveAnswers(response);
                    this.enginners += engObj;
                    console.log(this.enginners);
                })
            })
        });
    }


    questions() {
        return ([ //returns questions
            {
                type: "list",
                message: "Would you like to add a team member?",
                name: "Team member",
                choices: ["Engineer", "Intern", "Finish building team" ],
            },
        ]);
    }
}



module.exports = Team;