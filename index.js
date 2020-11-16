// Install the dependencies required
const inquirer = require("inquirer");
const fs = require("fs");


const userInput = async () => {

    try {
        const responses = await inquirer.prompt([
        {
            type: "input", 
            message: "What is the name of your Application?", 
            name: "name",
        }, 
        {
            type: "input", 
            message: "Enter a description of your Application.", 
            name: "description",
        },
        {
            type: "input", 
            message: "Enter the Installation instructions for your Application.", 
            name: "install",
        },
        {
            type: "input", 
            message: "Enter the Usage Information of your Application.", 
            name: "usage",
        },
        {
            type: "list", 
            message: "Choose a license:", 
            name: "license",
            choices: [
                "Apache License 2.0",
                "IBM",
                "MIT License",
                "Mozilla Public License 2.0",
                "No License",
            ]
        },
        {
            type: "input", 
            message: "What are the Contribution Guidelines for your Application?", 
            name: "contribution",
        },
        {
            type: "input", 
            message: "Enter the Test Instructions for your Application.", 
            name: "test",
        },
        {
            type: "input", 
            message: "Enter the email address you wish to be associated with this Application.", 
            name: "email",
        },
        {
            type: "input", 
            message: "Enter your GitHub username you wish to be associated with this Application.", 
            name: "github",
        },

        ])

        return responses;
    } catch (error) {
        console.log(error);
    }
};


async function generateReadMe() {

const  {
    name, 
    description, 
    install, 
    usage, 
    license, 
    contribution, 
    test, 
    email, 
    github
} = await userInput();

const licLogo = LicenseGet();

function LicenseGet (license) {
    switch (license) 
     {
    case "Apache License 2.0":
        return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
        break;
    case "IBM":
        return "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)";
        break;
    case "MIT License":
        return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
        break;
    case "Mozilla Public License 2.0":
        return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
        break;
    case "No License":
        return ":no_entry_sign:"

        break;
}
}

const myREADME = 

`# ${name}

${licLogo} | This application is licensed under: ${license}

## Project Description\n ${description}

## Table of Contents
* [Installation Procedure](#install)
* [Usage Information](#usage)
* [Contribution Guidelines](#contribution)
* [Testing Instructions](#test)
* [Questions](#Questions)

## Installation Procedure\n ${install}

## Usage Information\n ${usage}

## Contribution Guidelines\n ${contribution}

## Testing Instructions\n ${test}

## Questions\n 
Please feel free to reach out to me if you have any quesitons:\n
Email:  ${email}\n 
Visit my GitHub profile: https://github.com/${github}\n

`;


fs.writeFile("./Sample-ReadMe/README.md", myREADME, 
(err) =>
err ? console.log(err) : console.log("ReadMe.md created successfully!")
);
}

generateReadMe();