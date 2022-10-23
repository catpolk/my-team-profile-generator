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