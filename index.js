//important node modules 
const fs = require('fs');

const generateHTML = require('./generateHTMLfile/generateHTML')

//require team members progiles 
const Engineer = require('./classes/engineer');
const Internt = require('./classes/engineer');
const Team = require('./classes/team');


    //function writes HTML file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
      err ? console.log(err) : console.log('Thank you!')
    );
}

//function that initializes the app
function init() {
    const myTeam = new Team();
    myTeam.build().then(() => {
        console.log(myTeam.enginners);
        console.log(myTeam.interns);
    });
    
    // console.log(myTeam.enginners);
    // console.log(myTeam.interns);
    // generateHTML(myTeam.members)
}

init();
