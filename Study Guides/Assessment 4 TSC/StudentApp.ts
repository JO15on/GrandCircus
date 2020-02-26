import {IStudent} from './student'

class Student {

    constructor (public firstName : string, public lastName : string, public isFrontEnd : boolean) {
    }

    students : IStudent[] = [
        {firstName: 'Jon', lastName: 'Olson', isFrontEnd: true},
        {firstName: 'Matt', lastName: 'Maeda', isFrontEnd: false},
        {firstName: 'Chase', lastName: 'Baker', isFrontEnd: true},
        {firstName: 'Josh', lastName: 'Hall', isFrontEnd: true},
    ];

    getStudentByName(firstName:string, lastName:string) : IStudent|undefined {
      return this.students.find((students : IStudent) => {
          return(students.firstName === firstName) && (students.lastName === lastName);
      });
    }

    sortStudent(sortByLastName : boolean = true) : IStudent[]{
        return this.students.sort( (student1: IStudent, student2 : IStudent) => {
            if(sortByLastName) {
                return student1.lastName < student2.lastName ? -1 : 0;
            } else {
                return student1.firstName < student2.firstName ? -1 : 0;
            }
        });
    }
}

const students = new Student();
console.log(students.getStudentByName('Jon', 'Olson'));
console.log(students.getStudentByName('Josh', 'Hall'));

console.log(students.sortStudents(true));
console.log(students.sortStudents(false));