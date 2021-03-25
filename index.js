// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');



// TODO: Create an array of questions for user input
inquirer
.prompt([
    {type: 'input', message: "What is the title of your project?", name: 'inputTitle'},

    {type: 'input', message: "Write a description of your project.", name: 'description'},

    {type: 'input', message: "Provide installation instructions for your project.", name: 'installation_instructions'},

    {type: 'input', message: "Provide usage information for your project.", name: "usage_information"},

    {type: 'input', message: "Provide contribution information regarding your project.", name: "contribution_information"},

    {type: 'input', message: "Provide test instructions for your project", name: "test_instructions"},

    


])
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
