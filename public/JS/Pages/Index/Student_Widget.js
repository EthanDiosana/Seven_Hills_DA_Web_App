/** Generates html per student.
 * 
 */

class Student_Widget {

    constructor(student) {
        this.student = student
        this.generate_widget();
        console.log("Created widget for student: " + this.student.name)
    }

    generate_widget() {
        // Main widget div.
        this.widget_div = document.createElement("div");
        this.widget_div.className = "student_widget_div";

        // Name div.
        this.name_div = document.createElement("div");
        this.name_div.innerText = this.student.name;
        this.name_div.className = "student_widget_name_div"

        // Sessions button.
        this.sessions_button = document.createElement("a");
        this.sessions_button.innerText = "sessions"
        this.sessions_button.href = "HTML/student_sessions_page.html";
        this.sessions_button.className = "student_widget_button";

        // Info button.
        this.info_button = document.createElement("a");
        this.info_button.innerText = "info"
        this.info_button.href = "HTML/student_info_page.html";
        this.info_button.className = "student_widget_button";

        // Append the pieces to the widget div.
        this.widget_div.appendChild(this.name_div);
        this.widget_div.appendChild(this.sessions_button);
        this.widget_div.appendChild(this.info_button);
    }

    get_widget() {
        return this.widget_div;
    }

}