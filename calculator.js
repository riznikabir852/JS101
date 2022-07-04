const readline = require('readline-sync');

function prompt(message){
    console.log(`=> ${message}`);
}

function invalidNumber(userInput){
    return userInput.trimStart() === "" || Number.isNaN(Number(userInput));
}

prompt('Welcome to Calculator!');

prompt('What is the first number?');
let number1 = readline.question();

while (invalidNumber(number1)){
    prompt("Hmmm...you entered a wrong number")
    number1 = readline.question();
}


prompt('What is the second number?');
let number2 = readline.question();

while (invalidNumber(number2)){
    prompt("Hmmm...you entered a wrong number")
    number2 = readline.question();
}

prompt(`${number1} and ${number2}`);

prompt('What operation would you like to operate on the numbers?')
let operation = readline.question();

while (!['1','2','3','4'].includes(operation)){
    prompt('Please pick between 1-4')
    operation = readline.question();
}


let output;

switch(operation){
    case '1':
        output = Number(number1) + Number(number2);
        break;
    case '2':
        output = Number(number1) - Number(number2);
        break;
    case '3':
        output = Number(number1) * Number(number2);
        break;
    case '4':
        output = Number(number1) / Number(number2);
        break;
    default:
        prompt('Please specify the operation using a number from 1-4');
}

// if (operation === '1'){
//     output = Number(number1) + Number(number2);
// }
// else if(operation === '2'){
//     output = Number(number1) - Number(number2);
// }
// else if(operation === '3'){
//     output = Number(number1) * Number(number2);
// }
// else if(operation === '4'){
//     output = Number(number1) / Number(number2);
// }
// else{
//     prompt('Please specify the operation using a number from 1-4')
// }

prompt(`the output of those 2 numbers is ${output}`);  