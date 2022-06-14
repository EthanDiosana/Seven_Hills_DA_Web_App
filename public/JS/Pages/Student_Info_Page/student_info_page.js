// Header.
const student_name_header = document.getElementById("navbar_student_name");

// Information.
const first_name_field = document.getElementById("first-name");
const last_name_field = document.getElementById("last-name");
const address_field = document.getElementById("address");
const phone_number_field = document.getElementById("phone-number");
const email_field = document.getElementById("email");
const license_number_field = document.getElementById("license-number");
const license_expiry_field = document.getElementById("license-expiry");

// Set values.
const student = ROSTER.get_current_student()

student_name_header.innerText = student.name;

first_name_field.innerText = student.first_name;
last_name_field.innerText = student.last_name;
address_field.innerText = student.address;
phone_number_field.innerText = student.phone_number;
email_field.innerText = student.email;
license_number_field.innerText = student.license_number;
license_expiry_field.innerText =student.license_expiry;