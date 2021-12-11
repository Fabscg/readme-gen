const inquirer = require('inquirer')
const fs = require('fs')
const markdown = require('./utils/generateMarkdown')



inquirer
    .prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?(Required)'
        },
        {
            type: 'input',
            name: 'description',
            message: 'Provide a description of the project(Required)',
            validate: description => {
                if (description) {
                    return true;
                } else {
                    console.log('You need to enter a description');
                    return false
                }
            }
        },
        {
            type: 'header',
            name: 'tableOfcontents',
            message: 'Table of Contents(Optional)'
        },
        {
            type: 'input',
            name: 'installation',
            message: 'What dependencies were installed in this project?(Required)',
            validate: installation => {
                if (installation) {
                    return true
                        ;
                } else {
                    return false
                }

            }
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Provide instructions and examples for use. Include screenshots as needed.'
        },
        {
            type: 'input',
            name: 'Credits',
            message: 'List your collaborators if any'
        },
        {
            type: 'checkbox',
            name: 'license',
            message: 'What license protect this project?(Check the one that apply)',
            choices: ['MIT', 'GNU', 'Mozilla Public License', 'Apache', 'Boost Soaftware', 'none']
        },
        {
            type: 'input',
            name: 'test',
            message: 'Test'
        },
        {
            input: 'input',
            name: 'questions',
            message: "If you have any questions about the project, you can reach me here:",
        },

        {
            type: 'input',
            name: 'name',
            message: 'What is your name?(Required)'
        },
        {
            type: 'input',
            name: 'link',
            message: 'What is your Github username?(Required)'
        },
        {
            type: 'input',
            name: 'email',
            message: 'Provide your email address'
        }
    ])
    .then((data) => {
    const readmeData = markdown.generateMarkdown(data)
    fs.writeFile('generateMarkdown', readmeData, function (err) {
        if (err) throw err;
        console.log('Data Saved!');
    })
});


