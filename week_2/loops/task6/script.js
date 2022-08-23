let input;
let sum = 0;
let count = 0;
    for(let i = 1; i<=3;i++){
        let input = Number(prompt("Enter your number"));
        count++;
        sum+= input;
    
    
}
console.log(sum/count);

/*let sum = 0;
let counter = 0;
do {
    let input = Number(promot("enter the value"));
    sum+= input;
    counter++;
}while(counter !== 5);
console.log(`average`)*/
