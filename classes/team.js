const inquirer = require('inquirer');

const Manager = require('./manager');
const Engineer = require('./engineer');
const Intern = require('./intern');

//constructor Team that contains all the command line questions including the team building menu option 
class Team {
    constructor(){
        this.manager = new Manager();
        this.enginners = [];
        this.interns = [];
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
                console.log(response);
                if (response.teamMember === 'Engineer') {
                    // new object for engineer
                    const engObj = new Engineer();
                    //asking a user enginner questions 
                    inquirer.prompt(engObj.questions()).then((response) => {
                        engObj.saveAnswers(response);
                        console.log(response);
                        //adding a newly created engineer object to an array of engineers
                        this.enginners += engObj;
                        // console.log(this.enginners);
                    })
                } else if (response.teamMember === "Intern" ) {
                    //create a new object for an intern 
                    const intObj = new Intern();
                    //prompting a user to answer intern questions 
                    inquirer.prompt(intObj.questions()).then((response) => {
                        intObj.saveAnswers(response);
                        console.log(response);
                        //adding a newly creates object for intern to an array of engineers 
                        this.interns += intObj;
                    })

                }
                
            })
        });
    }


    questions() {
        return ([ //returns questions
            {
                type: "list",
                message: "Would you like to add a team member?",
                name: "teamMember",
                choices: ["Engineer", "Intern", "Finish building team" ],
            },
        ]);
    }
}



module.exports = Team;