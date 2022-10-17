const inquirer = require('inquirer');

const Manager = require('./manager');

class Team {
    constructor(){
        this.manager = new Manager();
    }
    
    build() {
         //prompts questions for manager and saves them in save Answers 
        inquirer.prompt(this.manager.questions()).then((response) => {
            // console.log(response);
            this.manager.saveAnswers(response);
            // var fileContent = generateHTML(response);
            // writeToFile('generateHTML.js', fileContent)
            console.log(this.manager.answers);
        });
    }
}


  //  const myTeam = new Team();
    // myTeam.build();
    // generateHTML(myTeam.members)

    module.exports = Team;