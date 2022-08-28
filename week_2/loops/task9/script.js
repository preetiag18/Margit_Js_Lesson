let firstNum, secondNum;
for(let i=1;i<=10;i++){
    
    let input =Number(prompt(`Enter your no:${i}`));
    if(i === 1){
        firstNum = input;
    }
    else if(i === 2){
        secondNum = input;
    }
    else{
        if(firstNum < secondNum && firstNum < input){
            firstNum = input;
        }
        else if(secondNum < firstNum && secondNum < input){
            secondNum = input;
        }
    }

}
console.log("here is the first highest number",firstNum);
console.log("here is the second highest number",secondNum);
