const Employee = require("./employee.js");

class Manager extends Employee {
    constructor(name, email, id, officeNumber, role) {
        super(name, email, id);
        this.office = officeNumber;
        this.role = role;
    }
    getRole() {
        return "Manager"
    }
}

module.exports = Manager; 
