/** Holds all of the information of a Student.
 * 
 * 
 * */

class Student {

    constructor(first_name, last_name, address, phone_number, email, license_number, license_expiry) {
        this.first_name = first_name;
        this.last_name = last_name;
        this.name = this.first_name + " " + this.last_name;
        this.address = address;
        this.phone_number = phone_number;
        this.email = email;
        this.license_number = license_number;
        this.license_expiry = license_expiry;
        this.sessions = {};
    }

    add_session(session) {
        this.sessions[session.date_string] = session;
    }

    print_values() {
        let values = [
            this.first_name,
            this.last_name,
            this.address,
            this.phone_number,
            this.email,
            this.license_number,
            this.license_expiry,
            this.sessions
        ]

        values.forEach(element => {
            console.log(element)
        });
    }

}

const TEST_STUDENT = new Student("Alfred", "Wegener", "1000 Tectonic Street",
 "1", "mercator@gmail.com", "123", "1/1/1");

 const TEST_STUDENT2 = new Student("Richard", "Watterson", "1000 Tectonic Street",
 "1", "mercator@gmail.com", "123", "1/1/1");
