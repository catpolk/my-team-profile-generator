class Employee {
    answers;

    saveAnswers(ans) {
        this.answers = ans;
    }

    questions() {
        return [
            {
                type: 'input',
                name: 'name',
                message: 'Enter name:'
            },
            {
                type: 'input',
                name: 'id',
                message: 'Enter ID:'
            }
        ];
    }
}


module.exports = Employee;