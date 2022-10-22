const Employee = require('./employee');

class Manager  {
    answers;

    title() {
        return 'TEst manager';
    }

    questions() {
        return ([ //returns questions
            {
                type: 'input',
                name: 'title',
                message: 'Enter manager of the team'
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