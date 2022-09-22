// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const createReadme = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
// const questions = [];
inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is the title of your project/repository name?',
      name: 'title',
    },
    {
      type: 'input',
      message: 'Please provide a concise description of your project: ',
      name: 'description',
    },
    {
      type: 'editor',
      message: 'Please include installation instructions:',
      name: 'installation',
    },
    {
      type: 'editor',
      message: 'Please include usage information:',
      name: 'usage',
    },
    {
      type: 'editor',
      message: 'Please include testings steps: ',
      name: 'test',
    },
    {
      type: 'editor',
      message: 'Please include contribution guidelines: ',
      name: 'contributions',
    },
    {
      type: 'input',
      message: 'What is your GitHub username where this project can be found?',
      name: 'github',
    },
    {
      type: 'input',
      message: 'What is the best e-mail for contacting you? Provide direct link',
      name: 'email',
    },
  ])
  
  .then((data)=> {
  
  fs.writeFile('README.md', createReadme(data),(err) =>
  err ? console.log(err) : console.log("Check out your new README page! Make sure to ADD,COMMIT, AND PUSH"))
    
  })

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
// init();
