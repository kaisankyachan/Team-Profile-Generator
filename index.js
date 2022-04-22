// set up the required components
const inquirer = require("inquirer"); // needed to prompt the user for information
const fs = require("fs"); // needed to open and save the html file
const htmlBlocks = require("./lib/htmlBlocks.js"); // needed to format the html file as needed
const team = [htmlBlocks.header(), htmlBlocks.footer()]; // needed to store the team information in an object so we can use it to build out the html at the end

//EMPLOY CLASS - sets up the basic object for us to store information in
class Employee {
    constructor(name,id,email,role= "Employee") {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = role;
    }
    getName() { return this.name }
    getId() { return this.id }
    getEmail() { return this.email }
    getRole() { return "Employee" }
}

//MANAGER CLASS - stores manager content
class Manager extends Employee {
    constructor(name,id,email,officeNumber) {
        super(name,id,email);
        this.officeNumber = officeNumber;
    }
    getRole() { return "Manager" }
    getOfficeNumber() { return this.officeNumber }
    format() { return htmlBlocks.manager(this) } 
};

//ENGINEER CLASS - stores engineer content
class Engineer extends Employee {
    constructor(name,id,email,gitUser,engineerBlock) {
        super(name,id,email)
        this.gitUser = gitUser;
    }
    getRole() { return "Engineer" }
    getgitUser() { return this.gitUser }
    format() { return htmlBlocks.engineer(this) }       
}

//INTERN CLASS - stores intern content
class Intern extends Employee {
    constructor(name,id,email,school) {
        super(name,id,email)
        this.school = school
    }
    getRole() { return "Intern" }
    getSchool() { return this.school }
    format() { return htmlBlocks.intern(this) } 
}

//IN THE BEGINNING - prompts the user for the manager details
function genesis(){
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Team Manager Name"
        },
        {
            type: "input",
            name: "id",
            message: "Manager ID"
        },
        {
            type: "input",
            name: "email",
            message: "Manager Email"
        },
        {
            type: "input",
            name: "officeNumber",
            message: "Manager office number"
        }
    ])
}

//Add Engineer or Intern - asks the user if they want to add an engineer or an intern to the team or to finish up and generate the html content
function addToTeam(){
    inquirer.prompt([
        {
            type: "list",
            name: "role",
            message:"Who would you like to add?",
            choices: ["Engineer", "Intern", "Finish Team"]
        }
        //ADDS ENGINEER
    ]).then((answer)=> {
        if (answer.role === "Engineer") { // if engineer is selected, we will prompt the user for the engineers details
        return inquirer.prompt([
            {
                type: "input",
                name: "name",
                message: "Engineer name"
            },
            {
                type: "input",
                name: "id",
                message: "Engineer ID"
            },
            {
                type: "input",
                name: "email",
                message: "Engineer email"
            },
            {
                type: "input",
                name: "gitUser",
                message: "Engineer GitHub username"
            }
    ]).then((answers)=>{
        let engineer = new Engineer(answers.name, answers.id, answers.email,answers.gitUser);
        team.splice(team.length-1,0,engineer.format());
        addToTeam();
        })
    }
    //ADDS INTERN
    if (answer.role === "Intern") { // if intern is selected, we will prompt the user for the interns details
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Intern name"
        },
        {
            type: "input",
            name: "id",
            message: "Intern ID"
        },
        {
            type: "input",
            name: "email",
            message: "Intern email"
        },
        {
            type: "input",
            name: "school",
            message: "Intern school"
        }
    ]).then((answers)=>{
        let intern = new Intern(answers.name, answers.id, answers.email, answers.school);
        team.splice(team.length-1,0,intern.format());
        addToTeam();
        })
    }
    return generateHTMLfile(team);
    });
}

//HTML
function generateHTMLfile(team) {
    fs.writeFile("./dist/team.html",team.join(''), (err) => {
        if(err) {
        throw err;
        };
        console.log("The HTML file has been Generated. You can now open it in your favorite browser. It's located at /dist/team.html");
        });
};

//GENESIS - this gets everything going - the beginning, if you will
genesis().then((answers)=>{
    const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
    team.splice(team.length-1,0,manager.format());
    addToTeam();
});