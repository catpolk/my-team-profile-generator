const Employee = require('./employee')

class Engineer  {
    answers;
    // constructor (title, id, git){
    //     this.title = title;
    //     this.id = id;
    //     this.git = git
    // }


    name(){
        return "katya"
    }

    id(){
        return "11"
    }

    git(){
        return 'gitgit'
    }

    render(){
        return `
            <div class="col-4" id="card-size">
                <div class="card-header mt-5">
                    <h2>${this.name}</h2>
                    <h3>Engineer</h3>
                </div>
                <div class="card-body">
                    <p class="id">ID: ${this.id}</p>
                    <p class="email">Email: <a href="mailto:${this.email}">${this.email}</a></p>
                    <p class="github">Github: ${this.git} </p>
                </div>
            </div> `; 
    }


    questions() {
        return ([ //returns questions
            {
                type: 'input',
                name: 'name',
                message: 'Enter engineer name'
            },
            {
                type: 'input',
                name: 'id',
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

//create a constructor 
module.exports = Engineer;