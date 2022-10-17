const inquirer = require('inquirer');

const Manager = require('./manager');
const Engineer = require('./engineer');

//constructor Team that contains all the command line questions including the team building menu option 
class Team {
    constructor(){
        this.manager = new Manager();
        this.enginners = [];
    }
    
    build() {
         //prompts questions for manager and saves them in save Answers 
        inquirer.prompt(this.manager.questions()).then((response) => {
            this.manager.saveAnswers(response);
            // var fileContent = generateHTML(response);
            // writeToFile('generateHTML.js', fileContent)
            console.log(this.manager.answers);
        }).then(() => {
            //following questions prompt the user to chose engineer, intern or finish building a team
            inquirer.prompt(this.questions()).then((response) => {
                // new object for engineer
                const engObj = new Engineer();
                //asking a user enginner questions 
                inquirer.prompt(engObj.questions()).then((response) => {
                    engObj.saveAnswers(response);
                    //adding a newly created engineer object to an array of engineers
                    this.enginners += engObj;
                    // console.log(this.enginners);
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