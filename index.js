#! /usr/bin/env node
// ATM Machine Interface with TypeScript and Inquirer
import inquirer from "inquirer";
let myBalance = 10000;
let myPin = 1234;
console.log("Wellcome to ATM!!!");
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "Enter your pin",
        type: "number",
    },
]);
if (myPin === pinAnswer.pin) {
    console.log("Correct pin code !!!");
    let operationAnswer = await inquirer.prompt({
        name: "operation",
        message: "what you want to do?",
        type: "list",
        choices: ["withdraw", "fast cash", "check balance"],
    });
    if (operationAnswer.operation === "withdraw") {
        let amountAnswer = await inquirer.prompt({
            name: "amount",
            message: "enter amount",
            type: "number",
        });
        if (amountAnswer.amount > myBalance) {
            console.log("your balance is insufficient");
        }
        else {
            let remaingBalance = myBalance - amountAnswer.amount;
            console.log(`You withdrew ${amountAnswer.amount}, so your balance is now ${remaingBalance}`);
        }
    }
    else if (operationAnswer.operation === "fast cash") {
        let fastamount = await inquirer.prompt([
            {
                name: "fastCash",
                message: "select an option",
                type: "list",
                choices: [500, 1000, 2000, 5000, 10000],
            },
        ]);
        let fastWithdraw = myBalance - fastamount.fastCash;
        console.log(`You withdrew ${fastamount.fastCash}, so your balance is now ${fastWithdraw}`);
    }
    else if (operationAnswer.operation === "check balance") {
        console.log(`your balance is ${myBalance}`);
    }
    else {
        console.log("please select an option");
    }
}
else {
    console.log("Your pin is incorrect");
}
