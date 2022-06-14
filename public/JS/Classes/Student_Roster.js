
/** Holds all of the Students.
 * 
 */
class Student_Roster {

    constructor() {
        this.current_student = null;
        this.students = [];
    }

    add_student(student) {
        this.students.push(student)
    }

    set_current_student(student) {
        console.log("Attempting to set current_student as " + student.name);
        console.log(JSON.stringify(student));
        this.current_student = student;
        localStorage.setItem("current_student", JSON.stringify(student));
        console.log("Set local storage " 
            + "\'current_student\' = " 
            + JSON.parse(localStorage.getItem("current_student").name));
    }

    get_current_student() {
        let student = JSON.parse(localStorage.getItem("current_student"));
        return student;
    }

}