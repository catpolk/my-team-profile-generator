const Employee = require('./employee');

class Manager  {
    answers;

    render() { 
        return `
             <div class="col-4" id="card-size">
                <div class="card-header mt-5 ">
                    <h2>${this.answers.name}</h2>
                    <h3><span class="material-icons-outlined"></span>Manager</h3>
                </div>
                <div class="card-body">
                    <p class="id">ID: ${this.answers.employeeID}</p>
                    <p class="email">Email: <a href="mailto: ${this.answers.email}">${this.answers.email}</a></p>
                    <p class="office">Office Number: ${this.answers.officeNumber}</p>
                </div>
            </div> `;
    }

    questions() {
        return ([ //returns questions
            {
                type: 'input',
                name: 'name',
                message: 'Enter manager name'
            },
            {
                type: 'input',
                name: 'employeeID',
                message: 'Enter employee ID'
            },
            {
                type: 'input',
                name: 'email',
                message: 'Enter employee email address'
            },
            {
                type: 'input',
                name: 'officeNumber',
                message: 'Enter employee office number'
            },
        ]);
    }

    saveAnswers(ans) {
        this.answers = ans;
    }
}


module.exports = Manager;