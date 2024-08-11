#! /usr/bin/env node

import { input } from "@inquirer/prompts";
import chalk from "chalk";

console.log(chalk.bold.greenBright("\n\t Welcome to word counter made by Syeda Ashna Ghazanfar\t"));
console.log("*".repeat(70));

let message1 = await input ({message : "Type any message to proceed further (WARNING:dont use numbers):"});

console.log("*".repeat(70));

let noOfWords = message1.trim().split(" ");
 console.log(chalk.italic("\nHere is your message words indivisually:"));
 console.log(noOfWords);

 console.log("*".repeat(70));

 console.log(chalk.italic("Here is your words count:"));
 console.log(chalk.red(noOfWords.length));

 console.log("*".repeat(70));

console.log(chalk.greenBright("You can also enter long messages to find out how many words they have!!"));
console.log("*".repeat(70));