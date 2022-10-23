const Employee = require('./employee')

class Intern  {
    answers;
    
    name() {
        return 'TEst intern';
    }

    id(){
        return '111'
    }

    email(){
        return 'testik@gmail.com'
    }

    school(){
        return 'wkola'
    }

    render(){
        return `
            <div class="col-4" id="card-size">
                <div class="card-header mt-5">
                    <h2>${this.name()}</h2>
                    <h3>Intern</h3>
                </div>
                <div class="card-body">
                    <p class="id">ID: ${this.id()}</p>
                    <p class="email">Email:<a href="mailto: ${this.email()}">${this.email()}</a></p>
                    <p class="school">School: ${this.school()} </p>
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