const inquirer = require('inquirer');
const fs = require("fs");
const generateMarkdown = require('./utils/generateMarkdown.js')

const questions = [
    {
      type: 'input',
      name: 'projectTitle',
      message: 'What is the project title?',
    },
    {
      type: 'input',
      name: 'descriptionQuestion',
      message: 'Description of the project?',
    },
    {
      type: 'input',
      name: 'installationQuestion',
      message: 'installation Instructions?',
    },
    {
      type: 'input',
      name: 'usageQuestion',
      message: 'What is the intended usage?',
    },
    {
      type: 'list',
      name: 'licenseQuestion',
      message: 'Please provide a license for this project:',
      // license choices
      choices: ['MIT', 'The Unlicense', 'GNU GPL v3', 'Apache 2.0', 'None'], 
    },
    {
      type: 'input',
      name: 'contributionQuestion',
      message: 'Who are the repository contributors?',
    },
    {
      type: 'input',
      name: 'testQuestion',
      message: 'Do you have test instructions?',
    },
    {
      type: 'input',
      name: 'emailQuestion',
      message: 'What is the contact email?',
    }   
]

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  inquirer.prompt(data).then((answers) => {
    fs.writeFile(
      `./generatedReadme/${fileName}`,
      generateMarkdown(answers),
      (err) => {
        if (err) throw err;
        console.log("created README.md file.");
      }
    );
  });
}

function init() {
    writeToFile("README.md", questions);
}

// Function call to initialize app
init();
