const readline = require('readline-sync');

console.log('Welcome to Calculator!');

console.log('What is the first number?');
let number1 = readline.question();


console.log('What is the second number?');
let number2 = readline.question();

console.log(`${number1} and ${number2}`);

console.log('What operation would you like to operate on the numbers?')
let operation = readline.question();

let output;
if (operation === '1'){
    output = Number(number1) + Number(number2);
}
else if(operation === '2'){
    output = Number(number1) - Number(number2);
}
else if(operation === '3'){
    output = Number(number1) * Number(number2);
}
else if(operation === '4'){
    output = Number(number1) / Number(number2);
}
else{
    console.log('Please specify the operation using a number from 1-4')
}
console.log(`the output of those 2 numbers is ${output}`);