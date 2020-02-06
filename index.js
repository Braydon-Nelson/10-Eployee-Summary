// first thing to run
const inquirer = require("inquirer");
const jest = require("jest");
const Engineer = require("./lib/engineer.js");
const Intern = require("./lib/intern.js");
const Manager = require("./lib/manager.js");
var uniqueId = 0;
var teamArray = [];

// will need to have separate inquirer prompts depending on role etc. 



function promptUser(answers) {
    return inquirer.prompt([
        {
            type: "list",
            name: "role",
            message: "what is your role?",
            choices: ["Engineer", "Intern", "Manager"]
        },
    ]).then(function (res) {
        // should use switch case instead of if/else starting here
        console.log(res)
        if (res.role === "Engineer") {
            inquirer.prompt([
                {
                    name: "name",
                    message: "What is your name?",
                    type: "input"
                },
                {
                    name: "github",
                    type: "input",
                    message: "What is your github Username?"
                },
                {
                    name: "email",
                    type: "input",
                    message: "What is your email?"
                }
            ]).then(function (engineerRes) {
                var newEngineer = new Engineer(engineerRes.name, engineerRes.email, uniqueId, engineerRes.github);
                uniqueId = uniqueId + 1; // could be "uniqueId++"
                console.log(newEngineer);
                // run promptUser (called recursion) so that you can add multiple Engineers and id changes incrementally
                teamArray.push(newEngineer);
                addUser();

            });

        } else if (res.role === "Intern") {
            inquirer.prompt([
                {
                    name: "name",
                    message: "What is your name?",
                    type: "input"
                },
                {
                    name: "email",
                    type: "input",
                    message: "What is your email?"
                },
                {
                    name: "school",
                    type: "input",
                    message: "Where did you graduate from college?"
                }
            ]).then(function (internRes) {
                var newIntern = new Intern(internRes.name, internRes.email, uniqueId, internRes.school);
                uniqueId = uniqueId + 1; // could be "uniqueId++"
                console.log(newIntern)
                teamArray.push(newIntern);
                addUser();
            });
        } else if (res.role === "Manager") {
            inquirer.prompt([
                {
                    name: "name",
                    message: "What is your name?",
                    type: "input"
                },
                {
                    name: "email",
                    type: "input",
                    message: "What is your email?"
                },
                {
                    name: "office",
                    type: "input",
                    message: "What is your office number?"
                }
            ]).then(function (managerRes) {
                var newManager = new Manager(managerRes.name, managerRes.email, uniqueId, managerRes.office);
                uniqueId = uniqueId + 1; // could be "uniqueId++"
                console.log(newManager);
                teamArray.push(newManager);
                addUser();
            });
        };
        // should use switch case instead of if/else up until this point

    })
        .catch(function (err) {
            console.log(err);
        });

};




// will need to loop through teamArray and check each item and check and see if it is a mananger, intern or engineer
// will need to check if it is a "manager, intern or engineer"
// should use switch case here

// create template in the HTML file and put in keywords as placeholders and then replace files
// could also go through and creating html and writing it to a file
function generateHTML() {
    // put html here

    console.log(teamArray)

    function renderManager() {

    };
    function renderIntern() {

    };
    function renderEngineer() {

    };

};

function addUser() {
    inquirer.prompt([
        {
            name: "continue",
            message: "Do you want to add another team member?",
            type: "confirm"
        }
    ]).then(function (confirmRes) {
        confirmRes.continue ? promptUser() : generateHTML()
    })
};




promptUser();



// var engineer = new Engineer("christian", "engineer@email.com", "developer", "githubUsername");
// console.log(engineer.getName());

// var intern = new Intern("Daniel", "intern@email.com,", "intern", "Harvard");
// console.log(intern);

// var manager = new Manager("Osei", "manager@email.com,", "manager", "123");
// console.log(manager.getEmail());



// will have a function for each employee type ex: renderIntern(),renderManager()
// then you would add them all together and create a single HTML file under the output folder

//Constructor classes are "models"