const Employee = require("./employee.js");

class Engineer extends Employee {
    constructor(name, email, id, githubUsername, role) {
        super(name, email, id);
        this.github = githubUsername;
        this.role = role;

    }
    getRole() {
        return "Engineer"
    }
}

module.exports = Engineer; 
