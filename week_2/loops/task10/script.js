let min,max;
let sum = 0

for(let i=1;i<=10;i++){
    
    let num =Number(prompt(`Enter your no:${i}`));

    if(i === 1){
        min= num;
        max = num;
        sum = num;
    }
    else if(num != null && num < min){
        min = num;
        sum = sum+num;
    }
    else if(num != null && num > max){
        max = num;
        sum = sum + num;
    }

}
console.log("smallest number is",min);
console.log("largest number is",max);
console.log("sum of numbers is",sum);
console.log("sum of numbers is",sum/10);

