class Student {
    constructor(firstName, lastName){
        this.firstName=firstName;
        this.lastName=lastName;
    }
    static enrollStudents(){
        return 'hello';
    }
}

let firstStudent = new Student('John','Brown');
console.log(firstStudent);