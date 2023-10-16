#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
import { exec } from 'child_process';
const textToConvert = "MY Calculator!";
const command = `figlet ${textToConvert}`;
exec(command, (error, stdout) => {
    if (error) {
        console.error(`Error: ${error}`);
        return;
    }
    console.log(stdout);
});
const sleep = () => {
    return new Promise((res) => {
        setTimeout(res, 1000);
    });
};
async function welcome() {
    let rainbowTitle = chalkAnimation.rainbow("Lets Start Calculation");
    await sleep();
    rainbowTitle.stop();
    console.log(`
      _____________________
      |  _________________  |
      | | JO           0. | |
      | |_________________| |
      | |_________________| |
      |  ___ ___ ___   ___  |
      | | 7 | 8 | 9 | | + | |
      | |___|___|___| |___| |
      | | 4 | 5 | 6 | | - | |
      | |___|___|___| |___| |
      | | 1 | 2 | 3 | | x | |
      | |___|___|___| |___| |
      | | . | 0 | = | | / | |
      | |___|___|___| |___| |
      |_____________________|       `);
}
welcome();
async function YOUR_QUESTION() {
    const answers = await inquirer
        .prompt([
        {
            type: "list",
            name: "operator",
            message: chalk.bgCyan("select opreation \n"),
            choices: ["Addition", "Subtraction", "Multiplication", "Division"]
        },
        {
            type: "number",
            name: "num1",
            message: "Enter Number 1st number:"
        },
        {
            type: "number",
            name: "num2",
            message: "Enter Number 2nd number:"
        }
    ]);
    if (answers.operator == "Multiplication") {
        console.log(chalk.yellow(`${answers.num1} * ${answers.num2} = ${answers.num1 * answers.num2}`));
    }
    else if (answers.operator == "Addition") {
        console.log(chalk.yellow(`${answers.num1} + ${answers.num2} = ${answers.num1 + answers.num2}`));
    }
    else if (answers.operator == "Subtraction") {
        console.log(chalk.bgCyan(`${answers.num1} - ${answers.num2} = ${answers.num1 - answers.num2}`));
    }
    else if (answers.operator == "Division") {
        console.log(chalk.yellow(`${answers.num1} / ${answers.num2} = ${answers.num1 / answers.num2}`));
    }
}
;
async function comeagain() {
    do {
        await YOUR_QUESTION();
        var again = await inquirer.prompt({
            type: "input",
            name: "restart",
            message: "Do You Want to Continue? Press y or n:"
        });
    } while (again.restart == "Y" || again.restart == "YES" || again.restart == "yes" || again.restart == "y");
}
comeagain();
