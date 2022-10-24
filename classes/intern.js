const Employee = require('./employee')

class Intern  {
    answers;

    render(){
        return `
            <div class="col-4" id="card-size">
                <div class="card-header mt-5">
                    <h2>${this.answers.name}</h2>
                    <h3>Intern</h3>
                </div>
                <div class="card-body">
                    <p class="id">ID: ${this.answers.id}</p>
                    <p class="email">Email:<a href="mailto: ${this.answers.email}">${this.answers.email}</a></p>
                    <p class="school">School: ${this.answers.school} </p>
                </div>
            </div> `;
    }

    questions() {
        return ([ //returns questions
            {
                type: 'input',
                name: 'name',
                message: 'Provide name of your intern'
            },
            {
                type: 'input',
                name: 'id',
                message: 'Enter intern\'s ID'
            },
            {
                type: 'input',
                name: 'email',
                message: 'Enter intern\'s email address'
            },
            {
                type: 'input',
                name: 'school',
                message: 'Enter intern\'s school'
            },
            
        ]);
    }

    saveAnswers(ans) {
        this.answers = ans;
    }
}


module.exports = Intern;