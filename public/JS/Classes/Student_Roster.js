
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

    add_student_to_local_storage(student) {
        console.log("Attempting to add student to local storage: " + student.name);
        console.log(JSON.stringify(student));
        this.current_student = student;
        localStorage.setItem(student.name, JSON.stringify(student));
        this.add_student(student);
        console.log("Added student to local storage: "
            + JSON.parse(localStorage.getItem("current_student").name));
    }

    get_students_from_local_storage() {
        let students = [];
        this.students.forEach(student => {
            let stored_student = JSON.parse(localStorage.getItem(student.name));
            students.push(student);
        });
        return students;
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