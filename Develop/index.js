const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// ARRAY OF QUESTIONS FOR USER
const questions = [
    {
        type: "input",
        message: "What is the title of your project?",
        name: "title"
    },
    {
        type: "input",
        message: "Please provide a description of your project.",
        name: "description"
    },
    {
        type: "input",
        message: "Please provide step-by-step instructions on how to install your project.",
        name: "installation"
    },
    {
        type: "input",
        message: "Please provide instructions on how to use your project.",
        name: "usage"
    },
    {
        type: "input",
        message: "Please list any contributors to your project, including yourself.",
        name: "contributions"
    },
    {
        type: "input",
        message: "Please provide testing guidelines. Write N/A if none are included.",
        name: "test"
    },
    {
        type: "checkbox",
        message: "Please select a license for your project:",
        choices: [
            "Apache_License_2.0",
            "Boost_Software_License_1.0",
            "GNU_AGPLv3",
            "GNU_GPLv3",
            "GNU_LGPLv3",
            "ISC",
            "MIT",
            "Mozilla_Public_License_2.0",
            "The_Unlicense",
        ],
        name: "license" 
    },
    {
        type: "input",
        message: "What is your GitHub username?",
        name: "username"
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "email"
    }
];

// FUNCTION TO GENERATE README FILE
function generateFile (fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), function(err) {
        if(err) {
            return console.log(err);
        }
        else{
            return console.log("You have successfully generated your README.md file!")
        }
     });
}

// FUNCTION TO INITIALIZE PROGRAM
function init(){
    inquirer.prompt(questions).then(userdata => generateFile(readme.md, userdata));
}

// CALL TO INITIALIZE PROGRAM
init();

