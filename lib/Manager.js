const Employee = require("./employee.js");

class Manager extends Employee {
    constructor(name, id, email, officeNumber, role) {
        super(name, id, email);
        this.office = officeNumber;
        this.role = role;
    }
    getRole() {
        return "Manager"
    }
    getOfficeNumber() {
        return this.office;
    }
}

module.exports = Manager; 
