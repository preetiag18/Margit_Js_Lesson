let input= prompt("how many times you want to give input:");
let smallest;

for(let i=1;i<=input;i++){
    
    let num = prompt(`Enter your no:${i}`);
    if(i === 1){
        smallest = num;
    }
    else if(num != null && num < smallest){
        smallest = num;
    }

}
console.log("smallest number is",smallest);

