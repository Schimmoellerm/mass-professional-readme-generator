const inquirer = require('inquirer');
const fs = require('fs');
//const Choices = require('inquirer/lib/objects/choices');

inquirer
.prompt([
    {type: 'input', message: "What is the title of your project?", name: 'inputTitle'},

    {type: 'input', message: "Write a description of your project.", name: 'description'},

    {type: 'input', message: "Provide installation instructions for your project.", name: 'installation_instructions'},

    {type: 'input', message: "Provide usage information for your project.", name: "usage_information"},

    {type: 'input', message: "Provide contribution information regarding your project.", name: "contribution_information"},

    {type: 'input', message: "Provide test instructions for your project", name: "test_instructions"},

    {type: 'list', message: "Which license would you like to apply to this project?", choices:['MIT License', 'The Unlicense', 'Apache 2.0 License', 'Creative Commons license family', 'Open Database License'], name: "license"},

    {type: 'input', message: "Provide a link to your git hub account", name: "git_hub"},

    {type: 'input', message: "Provide your email address", name: "email"}
])
.then(answers => {
    const proReadMe = createReadme(answers);
    fs.writeFile('./READMEexample.md', proReadMe, (error) => {if (error) console.log("This didn't work.")});
})
.catch(error => {
    if(error.isTtyError) {
    console.log(error);
    }else {
    console.log(error);
    }
})


const licenseChooser = (license) => {
    const licenseTypes = {'MIT License': 'MIT', 'The Unlicense': 'Unlicense', 'Apache 2.0 License': 'Apache 2.0', 'Creative Commons license family': 'CC0 1.0', 'Open Database License': 'ODbL'   }
    //if (license === 'MIT License') {
    return `https://img.shields.io/badge/license-${licenseTypes[license]}-green`
    
}

const createReadme = ({inputTitle, description, installation_instructions, usage_information, contribution_information, test_instructions, license, git_hub, email}) => 

`![Badge](${licenseChooser(license)})
# ${inputTitle}

## Description
${description}

## Table of Contents
1. [Description](#description)
2. [Installation](#installation)
3. [Usage](#usage)
4. [License](#license)
5. [Contributing](#contributing)
6. [Tests](#tests)
7. [Questions](#questions)

## Installation
${installation_instructions}

## Usage
${usage_information}

## License
This project is covered under ${license}

## Contributing
${contribution_information}

## Tests
${test_instructions}

## Questions
If you have questions about this README generator you can reach me at the following:
GitHub: ${git_hub}
Email: ${email}`

