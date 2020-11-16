// Install the dependencies required
const inquirer = require("inquirer");
const fs = require("fs");
const getLicenseInfo = require("./licenseinfo");

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
                "MIT License",
                "Mozilla Public License 2.0",
                "IBM Public License Version 1.0", 
                "The Do What the F**k You Want to Public License",
                "None"
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

const licenseBadge = getLicenseInfo.licenseInfo(license);

const myREADME = 

`# ${name}

${licenseBadge} \n
This application is licensed under: ${license}

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


fs.writeFile("./Sample-ReadMe/readMeSampleFile.md", myREADME, 
(err) =>
err ? console.log(err) : console.log("ReadMe.md created successfully!")
);
}

generateReadMe();