const first = Number(prompt("Enter your first number:"));
const second =  Number(prompt("Enter your second number:"));
const third =  Number(prompt("Enter your Third number:"));



if(first>=0&&second>=0 &&third>=0){
    let sumOfthree = first + second + third;
    let multiply = first*second*third;
    console.log("sum is ",sumOfthree);
    console.log("multiply is ",multiply);
}
else if(first<=0||second<=0||third<=0){
    if(first<=0 && second<=0 && third<=0){
        console.log("all no are neg.");
    }
    else{
        let sumOfthree = first+second+third;
        console.log(`there is the sum of three no:${sumOfthree}`);
    }
    
};

