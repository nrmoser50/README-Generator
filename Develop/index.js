// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs'); 

// Array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'Title',
        message: 'What is the name of this project?',
    },
    {
        type: 'input',
        name: 'Description',
        message: 'Tell us about this project',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What did the installation process look like?',
    },
    {
        type: 'input',
        name: 'Usage',
        message: 'What will this project be used for?',
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license is applied to this project?',
        choices: [
            'Apache',
            'Artistic',
            'Eclipse',
            'MIT',
            'None'
        ]
    },
    {
        type: 'input',
        name: 'Contributing',
        message: 'Who will be contributing to this project?',
    },
    {
        type: 'input',
        name: 'Tests',
        message: 'How can the app be tested?',
    },
console.log(questions)
        
    
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
