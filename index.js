const fs = require("fs");
const util = require("util");
const inquirer = require("inquirer");
const generateMD = require("./utils/generateMarkdown");
const api = require("./utils/api.js");

const writeFileAsync = util.promisify(fs.writeFile);

function questions() {
	return inquirer.prompt([
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
init();

async function init() {
	try {
		var userAnswers = await questions();
		// console.log(userAnswers);
		var response = await api.getUser(userAnswers.username);
		var info = await api.data(userAnswers.username);
		var gitInfo = { info, ...userAnswers, ...response.data };
		

		var userMD = await generateMD(gitInfo);

		await writeFileAsync("new.md", userMD, "utf8");
	} catch (err) {
		console.log(err);
	}
}
    



   
  
