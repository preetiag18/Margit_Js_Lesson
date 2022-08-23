let input;
let sum = 0;
let count = 0;
while(input != 0){
    input = Number(prompt("enter the number"));
    sum+= input;
    count++;
}
let average = sum/count-1;
console.log("the sum is",sum);
console.log("the count is",count);
console.log("the avg is",average);
