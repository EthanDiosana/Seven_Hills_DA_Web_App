/** Holds the information of a Session.
 * 
 */

class Session {

    constructor(date) {
        this.date = date;
        this.notes = "";
    }

    set_notes(notes) {
        this.notes = notes;
    }

}