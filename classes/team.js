const fs = require('fs');
const inquirer = require('inquirer');

const Manager = require('./manager');
const Engineer = require('./engineer');
const Intern = require('./intern');

//constructor Team that contains all the command line questions including the team building menu option 
class Team {
    constructor(){
        this.manager = new Manager();

        this.engineers = [];
        this.interns = []; 
    }
    
    async build() {
        await this.buildManager();
        await this.buildTeamMembers();
    }

    async buildManager(){
        //prompts questions for manager and saves them in save Answers 
        await inquirer.prompt(this.manager.questions()).then((response) => {
            this.manager.saveAnswers(response);
        });

        return;
    }

    async buildTeamMembers() {
        //following questions prompt the user to chose engineer, intern or finish building a team
        await inquirer.prompt(this.questions()).then(async (response) => {
            if (response.teamMember === 'Finish building team') {
                return;
            }
            
            let newTeamMember;
            let teamMembers;

            if (response.teamMember === 'Engineer') {
                // new object for engineer
                newTeamMember = new Engineer()
                teamMembers = this.engineers;
            } else {
                //create a new object for an intern 
                newTeamMember = new Intern();
                teamMembers = this.interns; 
            }

            await inquirer.prompt(newTeamMember.questions()).then((response) => {
                newTeamMember.saveAnswers(response);
                teamMembers.push(newTeamMember);
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

 //method that generates three parts of the file
    render() {
        const data = this.renderHeader() + this.renderBody() + this.renderFooter();
        
    
        fs.writeFile("myTeam.html", data, (err) =>
            err ? console.log(err) : console.log('File has been generated')
        );
    }

    renderHeader() {
        return `
            <!DOCTYPE html>
            <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta http-equiv="X-UA-Compatible" content="IE=edge">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Team Profile Generator</title>
                    <!-- bootstrap link -->
                    <link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Lato:wght@700&display=swap" rel="stylesheet">
                    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
                    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
                    <link href="https://fonts.googleapis.com/icon?family=Material+Icons"rel="stylesheet">
                    <!-- css styles link -->
                    <link rel="stylesheet" href="./assets/style.css">
                </head>
                <body>
                <header> 
                <nav class="navbar justify-content-center" id="navbar">
                    <h1 id="navbar-title">My Team</h1>
                </nav>
                </header>
                <div class="container">
        `;
    }
    
    renderBody(){
        const roster = [this.manager, ...this.engineers, ...this.interns]; 

        let result = `<div class="row justify-content-center"> `;
        
        for(let i = 0; i < roster.length; i++){
            result += roster[i].render();

            if((i+1) % 3 == 0 && (i+1) !== roster.length){
                result += `</div> <div class="row justify-content-center"> `;
            } 
        }
        result += `</div>`;
        
        return result;
    }

    renderFooter(){
        return `
                </div>
                </body>
            </html>
        `;
    }
}



module.exports = Team;