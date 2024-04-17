#! /usr/bin/env node 
import inquirer from "inquirer";
let todolist = [];
let conditions = true;
console.log("\n\t WELLCOME TO TO-DO-LIST BY SADIA_KHAN\n");
while (conditions) {
    let addtask = await inquirer.prompt([
        {
            name: "task",
            type: "input",
            message: "Enter Your New Task : "
        }, {
            name: "addmore",
            type: "confirm",
            message: "Do You Want To Add More Task ?",
            default: "false"
        }
    ]);
    todolist.push(addtask.task);
    conditions = addtask.addmore;
}
console.log(todolist);
