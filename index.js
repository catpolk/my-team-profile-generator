const generateHTML = require('./generateHTMLfile/generateHTML')

//require team members progiles 
const Manager = require('./classes/manager');
const Engineer = require('./classes/engineer');
const Internt = require('./classes/engineer');

//important node modules 
const fs = require('fs');
const inquirer = require('inquirer');



//prompting manager 
const questions = [
        {
            type: 'input',
            name: 'name',
            messege: 'Enter manager of the team'
        },
        {
            type: 'input',
            name: 'employee ID',
            messege: 'Enter employee ID'
        },
        {
            type: 'input',
            name: 'email address',
            messege: 'Enter employee email address'
        },
        {
            type: 'input',
            name: 'office number',
            messege: 'Enter employee oddice number'
        },
    ]

    //function writes HTML file
function writeToFile(fileName, data) {

    fs.writeFile(fileName, data, (err) =>
      err ? console.log(err) : console.log('Thank you!')
    );
}

//function that initializes the app
function init() {
    inquirer.prompt(questions).then(function(response) {
        var fileContent = generateHTML(response);
        writeToFile('generateHTML.js', fileContent)
    });
}
init();
