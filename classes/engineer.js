const Employee = require('./employee')

class Engineer  {
    constructor (title, id, git){
        this.title = title;
        this.id = id;
        this.git = git
    }

    questions() {
        return ([ //returns questions
            {
                type: 'input',
                name: 'title',
                message: 'Enter engineer name'
            },
            // {
            //     type: 'input',
            //     name: 'ID',
            //     message: 'Enter engineer ID'
            // },
            // {
            //     type: 'input',
            //     name: 'git',
            //     message: 'Enter Github username'
            // },
        ]);
    }

    saveAnswers(ans) {
        this.answers = ans;
    }
} 

//create a constructor 
module.exports = Engineer;