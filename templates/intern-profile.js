const EmployeeProfile = require('./employee-profile');

class InternProfile extends EmployeeProfile {

    constructor(intern) {
        super(intern);
        this.school = intern.school;
        this.setProfile();
    }
}

module.exports = InternProfile;
