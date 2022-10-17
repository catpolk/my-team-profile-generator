const generateHTML = require('./generateHTMLfile/generateHTML')

//require team members progiles 
const Manager = require('./classes/manager');
const Engineer = require('./classes/engineer');
const Internt = require('./classes/engineer');

//important node modules 
const fs = require('fs');
const inquirer = require('inquirer');

    //function writes HTML file
function writeToFile(fileName, data) {

    fs.writeFile(fileName, data, (err) =>
      err ? console.log(err) : console.log('Thank you!')
    );
}

//function that initializes the app
function init() {
    const teamManager = new Manager();
    
    //prompts questions for manager and saves them in save Answers 
    inquirer.prompt(teamManager.questions()).then(function(response) {
        // console.log(response);
        teamManager.saveAnswers(response);
        // var fileContent = generateHTML(response);
        // writeToFile('generateHTML.js', fileContent)
        console.log(teamManager.answers);
    });  
}

init();
