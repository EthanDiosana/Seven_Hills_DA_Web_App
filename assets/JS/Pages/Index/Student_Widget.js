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

        // Widget button.
        this.widget_button = document.createElement("a");
        this.widget_button.href = "assets/HTML/student_info_page.html";
        this.widget_button.className = "student_widget_button";

        // Arrow.
        this.arrow = document.createElement("s");
        this.arrow.innerHTML = "&#8594;";
        this.widget_button.appendChild(this.arrow);

        // Append the pieces to the widget div.
        this.widget_div.appendChild(this.name_div);
        this.widget_div.appendChild(this.widget_button);
    }

    get_widget() {
        return this.widget_div;
    }

}