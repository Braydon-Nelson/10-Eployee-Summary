const Employee = require("./employee.js");

class Intern extends Employee {
    constructor(name, email, id, schoolAttended, role) {
        super(name, email, id);
        this.school = schoolAttended;
        this.role = role;
    }
    getRole() {
        return "Intern"
    }
}

module.exports = Intern; 
