const Employee = require('./employee')

class Intern  {
    answers;
    
    questions() {
        return ([ //returns questions
            {
                type: 'input',
                name: 'title',
                message: 'Provide name of your intern'
            },
            // {
            //     type: 'input',
            //     name: 'ID',
            //     message: 'Enter intern\'s ID'
            // },
            // {
            //     type: 'input',
            //     name: 'email',
            //     message: 'Enter intern\'s email address'
            // },
            // {
            //     type: 'input',
            //     name: 'school',
            //     message: 'Enter intern\'s school'
            // },
            
        ]);
    }

    saveAnswers(ans) {
        this.answers = ans;
    }
}


module.exports = Intern;