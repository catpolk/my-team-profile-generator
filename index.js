//require team members progiles 
const Engineer = require('./classes/engineer');
const Intern = require('./classes/engineer');
const Team = require('./classes/team');


    //function writes HTML file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
      err ? console.log(err) : console.log('Thank you!')
    );
}

//function that initializes Team class
function init() {
    const myTeam = new Team();
    myTeam.build().then(() => {
        myTeam.render();
    });

}

init();
