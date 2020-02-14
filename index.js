const fs = require("fs");
const util = require("util");
const inquirer = require("inquirer");
const axios = require("axios");

const writeFileAsync = util.promisify(fs.writeFile);

async function userQuestions() {
    return inquirer.prompt([
        {
            type: "input",
            message: "What is your name?",
            name: "name"
        },
        {
            type: "input",
            message: "What is your email?",
            name: "email"
        },
        {
            type: "input",
            message: "What is your github username?",
            name: "username"
        },
        {
            type: "input",
            message: "What is the name of this repository?",
            name: "title"
        },
        {
            type: "input",
            message: "Describe the project",
            name: "description"
        },
        {
            type: "input",
            message: "Table of Contents",
            name: "contents"
        },
        {
            type: "input",
            message: "Installation notes",
            name: "install"
        },
        {
            type: "input",
            message: "How does the project work?",
            name: "usage"
        },
        {
            type: "input",
            message: "Any licences on this project?",
            name: "licence"
        },
        {
            type: "input",
            message: "Any other contributors to the project?",
            name: "contributors"
        },
        {
            type: "input",
            message: "Describe any testing that has been done",
            name: "test"
        },
        {
            type: "input",
            message: "Any addition Questions relating to the project?",
            name: "questions"
        },

    ])
};

async function init() {
    try {
        
        let userInput = await userQuestions();
        let userMD = await generateMD(userInput);

        writeFileAsync("new.md", userMD);
    } catch (err) {
        console.log(err);
    }
}

init();

function generateMD(answer) {
    return `#
* Name: ${answer.name}
* Email: ${answer.email}
* Github: https://github.com/${answer.username}
* Repo title: ${answer.title}
  * Description: ${answer.description}
  * Table of Contents: ${answer.contents}
  * Installation: ${answer.install}
  * Usage: ${answer.usage}
  * License: ${answer.licence}
  * Contributing: ${answer.contributors}
  * Tests: ${answer.tests}
  * Questions: ${answer.questions}
`
}   
