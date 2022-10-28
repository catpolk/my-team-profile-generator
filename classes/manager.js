const Employee = require('./employee');

class Manager extends Employee  {
    render() { 
        return `
             <div class="col-4" id="card-size">
                <div class="card-header mt-5 ">
                    <h2>${this.answers.name}</h2>
                    <h3><span class="material-icons-outlined"></span>Manager</h3>
                </div>
                <div class="card-body">
                    <p class="id">ID: ${this.answers.id}</p>
                    <p class="email">Email: <a href="mailto: ${this.answers.email}">${this.answers.email}</a></p>
                    <p class="office">Office Number: ${this.answers.officeNumber}</p>
                </div>
            </div> `;
    }

    questions() {
        return [
            ...super.questions(),
            {
                type: 'input',
                name: 'officeNumber',
                message: 'Enter office number'
            },
        ];
    }
}


module.exports = Manager;