const Employee = require("./employee.js");

class Engineer extends Employee {
    constructor(name, id, email, githubUsername, role) {
        super(name, id, email);
        this.github = githubUsername;
        this.role = role;

    }
    getRole() {
        return "Engineer"
    }
}

module.exports = Engineer; 
