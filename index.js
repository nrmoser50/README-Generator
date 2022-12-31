// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs'); 
const generateMarkdown = require('./utils/generateMarkdown');

// Array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the name of this project?',
    },
    {
        type: 'input',
        name: 'description',
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
        name: 'contributing',
        message: 'Who will be contributing to this project?',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'How can the app be tested?',
    },
    {
        type: 'input',
        name: 'name',
        message: 'What is your name?',
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub user name?',
    },
// console.log(questions)
        
    
];

// TODO: Create a function to write README file
const writeToFile = (data) => {
    return new Promise ((resolve, reject) => {
        fs.writeFile('./develop/README.md', data, err => {
            if (err) {
                reject (err);
                // if there's an error the Promise will stop and default to the .catch() method 
                return;
            }

            resolve({
                ok: true,
            })

        })
    })
}

// TODO: Create a function to initialize app
const init = () => {
    return inquirer.prompt(questions);
}

// Function call to initialize app
init()
.then(userInput => {
    return generateMarkdown(userInput);
})
.then(readmeInfo => {
    return writeToFile(readmeInfo);
})
.catch(err => {
    console.log(err);
})
