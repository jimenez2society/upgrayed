// TODO: Include packages needed for this application

const inquirer = require("inquirer");
const { generateQuestion } = require("./utils/generateQuestion");
const { generateMarkdown } = require("./utils/generateMarkdown");
const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = [
  generateQuestion("input", "title", "Give a title for you README"),
  generateQuestion("input", "description", "Give a description of your app"),
  generateQuestion(
    "input",
    "installation",
    "Explain the installaion steps of your app"
  ),
  generateQuestion("input", "usage", "Explain how to use this app"),
  generateQuestion("input", "contribution", "Explain how to contribute"),
  generateQuestion("input", "test", "What kind of test did you do?"),
  generateQuestion("list", "badge", "Choose a badge", [
    "MIT",
    "ISC",
    "Mozzila",
    "IBM",
  ]),
  generateQuestion("input", "email", "What is your email"),
  generateQuestion("input", "github", "What is your github link?"),
];
let inq = inquirer.createPromptModule();

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(`${__dirname}/${fileName}`, data, (err) => {
    if (err) console.log(err);
  });
}

// TODO: Create a function to initialize app
function init() {
  inq(questions).then((data) => {
    data.questions = {
      email: data.email,
      github: data.github,
    };
    let md = generateMarkdown(data);
    writeToFile("README.md", md);
  });
}

// Function call to initialize app
init();
