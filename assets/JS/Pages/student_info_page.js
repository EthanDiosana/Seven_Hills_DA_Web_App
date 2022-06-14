const hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', function() {
    this.classList.toggle('is-active');
});

const student_name_header = document.getElementById("navbar_student_name");

student_name_header.innerText = ROSTER.get_current_student().name
