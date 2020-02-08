const Employee = require("./employee.js");

class Intern extends Employee {
    constructor(name, id, email, schoolAttended, role) {
        super(name, id, email);
        this.school = schoolAttended;
        this.role = role;
    }
    getRole() {
        return "Intern"
    }
    getSchool() {
        return this.school;
    }
}

module.exports = Intern; 
