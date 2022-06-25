const inquirer = require("inquirer")
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const fs = require("fs");

const initializeProfiles = () => {
    return inquirer 
        .prompt({
            type: 'list',
            name: 'employeeRole',
            message: 'What is the title of the employee you want to add?',
            choices: ['Manager', 'Engineer', 'Intern', 'No more profiles to add']
        })
        .then ((response) => {
            if (response.employeeRole != 'No more profiles to add') {
                employeeQuestions(response.employeeRole)
            }
            // else {
                //fs.writefileSync("./dist/profiles.html", need to create function that calls starter html passing in employee array)
            // }
        })
}

const employeeQuestions = (employeeRole) => {
    return inquirer 
        .prompt([
            {type: 'input',
            name: 'name',
            message: `What is the employee's name?`
            },
            {
              type: 'number',
              name:  'id',
              message: `What is the employee's id number?`
            },
            {
              type: 'input',
              name: 'email',
              message: `What is the employee's email address?`
            }
        ])
        .then((generalQuestions) => {
            if (employeeRole == "Manager") {
                managerQuestions(generalQuestions);
            }
            else if (employeeRole == "Engineer") {
                engineerQuestions(generalQuestions);
            }
            else if (employeeRole == "Intern") {
                internQuestions(generalQuestions);
            }

        });
    }

        const managerQuestions = (generalAnswers) => {
            return inquirer
                .prompt({
                    type: 'number',
                    name: 'officeNumber',
                    message: `What is this manager's office number?`                    
                 })
                 .then(({officeNumber}) => {
                    let manager = new Manager(generalAnswers.name, generalAnswers.id, generalAnswers.email, officeNumber);
                    employeeArr.push(manager);
                    initializeProfiles();
                 })
        }

        const engineerQuestions = (generalAnswers) => {
            return inquirer
                .prompt({
                    type: 'input',
                    name: 'github',
                    message: `What is this engineer's GitHub username?`                    
                 })
                 .then(({github}) => {
                    let engineer = new Engineer(generalAnswers.name, generalAnswers.id, generalAnswers.email, github);
                    employeeArr.push(engineer);
                    initializeProfiles();
                 })
        }

        const internQuestions = (generalAnswers) => {
            return inquirer
                .prompt({
                    type: 'input',
                    name: 'school',
                    message: `What school is this intern attending?`                    
                 })
                 .then(({school}) => {
                    let intern = new Intern(generalAnswers.name, generalAnswers.id, generalAnswers.email, school);
                    employeeArr.push(intern);
                    initializeProfiles();
                 })
        }




// starter HTML function goes here
initializeProfiles();