const Employee = require('./employee')

class Engineer  {
    answers;
    
    questions() {
        return ([ //returns questions
            {
                type: 'input',
                name: 'title',
                message: 'Enter engineer name'
            },
            {
                type: 'input',
                name: 'ID',
                message: 'Enter engineer ID'
            },
            {
                type: 'input',
                name: 'git',
                message: 'Enter Github username'
            },
        ]);
    }

    saveAnswers(ans) {
        this.answers = ans;
    }
}


module.exports = Engineer;