let input,confirmation;

let sum = 0;
let counter = 0;
while(confirmation != "n"){
    input = Number(prompt("enter your no"));
    confirmation = prompt("Do you want to continue giving numbers?(y/n)");
    sum = sum + input;
    counter++;
}
console.log(`avg is ${sum/counter}`);