const Employee = require('./employee')

class Engineer extends Employee {
    render(){
        return `
            <div class="col-4" id="card-size">
                <div class="card-header mt-5">
                    <h2>${this.answers.name}</h2>
                    <h3>Engineer</h3>
                </div>
                <div class="card-body">
                    <p class="id">ID: ${this.answers.id}</p>
                    <p class="email">Email: <a href="mailto: ${this.answers.email}">${this.answers.email}</a></p>
                    <p class="github">Github: ${this.answers.git} </p>
                </div>
            </div> `; 
    }

    questions() {
        return [ //returns questions
            ...super.questions(),
            {
                type: 'input',
                name: 'git',
                message: 'Enter Github username'
            },
        ];
    }
} 

//create a constructor 
module.exports = Engineer;