
const student_roster = document.getElementById("student_roster");

ROSTER.students.forEach(student => {
    student_widget = new Student_Widget(student);
    student_widget.widget_button.addEventListener("click", function() {
        ROSTER.set_current_student(student);
    });
    student_roster.appendChild(student_widget.get_widget());
});

