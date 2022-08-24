function myFunction(){
   const input1 = Number(document.getElementById("price").value);
    console.log("here is the price", input1);
    
    const input2 = +document.getElementById("money").value;
    console.log("here is the price", input2);
    
    const result = document.getElementById("result");

    const amount = Math.floor(input2/input1);
    if(amount>=10){
        text = `you could get about ${amount} liters,good,now you can escape`;
    }
    else{
        text = `you could get about ${amount} liters,sorry,now you have to stay`;
    }
    result.textContent = amount;
    result.textContent = text;
    
    console.log(`you can get ${output} litre gasoline`);

    }

    
