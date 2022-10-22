const fs = require('fs');
const inquirer = require('inquirer');

const Manager = require('./manager');
const Engineer = require('./engineer');
const Intern = require('./intern');

//constructor Team that contains all the command line questions including the team building menu option 
class Team {
    constructor(){
        this.manager = new Manager();
        this.enginners = [
            new Engineer(),
            new Engineer(),
        ];
        this.interns = [
            new Engineer(),
            new Engineer(),
        ]; 
    }
    
    async build() {
        await this.buildManager();
        await this.buildTeamMembers();
    }

    async buildManager(){
        //prompts questions for manager and saves them in save Answers 
        await inquirer.prompt(this.manager.questions()).then((response) => {
            this.manager.saveAnswers(response);
            // resolve();
            // var fileContent = generateHTML(response);
            // writeToFile('generateHTML.js', fileContent)
            // console.log(this.manager.answers);
            // this.buildTeamMembers();
        });

        return;
    }

    async buildTeamMembers() {
        //following questions prompt the user to chose engineer, intern or finish building a team
        await inquirer.prompt(this.questions()).then(async (response) => {
            // console.log(response);
            if (response.teamMember === 'Finish building team') {
                return;
            }
            
            let newTeamMember;
            let teamMembers;

            if (response.teamMember === 'Engineer') {
                // new object for engineer
                newTeamMember = new Engineer()
                teamMembers = this.enginners;
                //asking a user enginner questions 
            } else {
                //create a new object for an intern 
                newTeamMember = new Intern();
                teamMembers = this.interns; 
            }

            await inquirer.prompt(newTeamMember.questions()).then((response) => {
                newTeamMember.saveAnswers(response);
                // console.log(response);
                teamMembers.push(newTeamMember);
                // console.log(this.enginners);
                // return this.buildTeamMembers();
            });

            return this.buildTeamMembers();
        })

        return;
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

    render() {

    }
}



module.exports = Team;