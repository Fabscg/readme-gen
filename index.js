const inquirer = require('inquirer')
const fs = require('fs')
const markdown = require('./utils/generateMarkdown')

inquirer.prompt([
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },
])
.then(function(data) {
    console.log(data)
})