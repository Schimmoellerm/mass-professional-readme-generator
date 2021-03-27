// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const Choices = require('inquirer/lib/objects/choices');



// TODO: Create an array of questions for user input
inquirer
.prompt([
    {type: 'input', message: "What is the title of your project?", name: 'inputTitle'},

    {type: 'input', message: "Write a description of your project.", name: 'description'},

    {type: 'input', message: "Provide installation instructions for your project.", name: 'installation_instructions'},

    {type: 'input', message: "Provide usage information for your project.", name: "usage_information"},

    {type: 'input', message: "Provide contribution information regarding your project.", name: "contribution_information"},

    {type: 'input', message: "Provide test instructions for your project", name: "test_instructions"},

    {type: 'list', message: "Which license would you like to apply to this project?", choices:['MIT License', 'The Unlicense', 'Academic Free License v3.0', 'Creative Commons license family', 'Open Software License 3.0'], name: "license"},

    {type: 'input', message: "Provide a link to your git hub account", name: "git_hub"},

    {type: 'input', message: "Provide your email address", name: "email"}




])
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
