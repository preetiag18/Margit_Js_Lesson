const form = document.querySelector('form');
const customerName = document.querySelector('#name');
const customerAge = document.querySelector('#age');
const preConditions = document.querySelectorAll('input[type= "checkbox"]');
const habbits = document.querySelectorAll('input[type= "checkbox"]');

const result = document.querySelector('#health');


const calculate = (event) =>{
    event.preventDefault();
    let CusName = customerName.value;
    let customerAgeValue = customerAge.value;
    let preConditionsResult = []; 
    let goodHabbits = []; 
    let badHabbits = [];   
    let amount = 500;
    let price = 0;
if(customerAgeValue <= 18){
    console.log(amount);
    
}
else if(customerAgeValue>18 && customerAgeValue <= 25){
    amount = amount + (amount)*(10/100)
    console.log(`age is more than 18 and less than 25 so amount ${amount}`);
}
else if(customerAgeValue>26 && customerAgeValue <= 35){
    amount = amount + (amount)*(30/100);
    console.log(`age is more than 26 and less than 35 so amount ${amount} `);
}
else if(customerAgeValue>36 && customerAgeValue <= 45){
    amount = amount + (amount)*(60/100);
    console.log(`age is more than 36 and less than 45 so amount ${amount} `);
}
else if(customerAgeValue>46 && customerAgeValue <=55){
    amount = amount + (amount)*(100/100);
    console.log(`age is more than 46 and less than 55 so amount ${amount} `);
}
else if(customerAgeValue>56 && customerAgeValue <=65){
    amount = amount + (amount)*(150/100);
    console.log(`age is more than 56 and less than 65 amount ${amount} `);
}
else if(customerAgeValue>65){
    amount = amount + (amount)*(210/100);
    console.log(`age is more than 65 so amount ${amount} `);
}

preConditions.forEach((item)=>{
    if(item.checked) {
        preConditionsResult.push(item.value);
    }
    
});
console.log(preConditionsResult);
if(preConditionsResult.length > 0){
    price = amount + amount*(preConditionsResult.length*1)/100;
    console.log(`the amount will be ${price} `);
}
habbits.forEach((item) =>{
    if(item.checked){
        if(item.value === 'Daily exercise'){
            goodHabbits.push(item.value);
            price = amount - amount*(5)/100;
    }
    else{
        badHabbits.push(item.value);
        price = amount + amount*(5)/100;

    }
    console.log(`the amount will be ${price} `);
}});
}


form.addEventListener('submit',calculate);