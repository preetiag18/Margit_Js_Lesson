const form = document.querySelector('form');
const customerName = document.querySelector('#name').value;
const customerAge = document.querySelector('#age');
const result = document.querySelector('#health');

const calculate = (event) =>{
    event.preventDefault();

    let customerAgeValue = +customerAge.value;

let amount = 500;
if(customerAgeValue <= 18){
    return amount = 500;
    console.log(`age is below 18 or equal to 18 ${amount} `);
}
else if(customerAgeValue>18 && customerAgeValue < 25){
    return amount + (amount)*(10/100);
    console.log(`age is more than 18 and less than 25 ${amount} `);
}
else if(customerAgeValue>26 && customerAgeValue < 35){
    return amount + (amount)*(30/100);
    console.log(`age is below 18 or equal to 18 ${amount} `);
}
else if(customerAgeValue>36 && customerAgeValue < 45){
    return amount + (amount)*(60/100);
    console.log(`age is more than 36 and less than 45 ${amount} `);
}
else if(customerAgeValue>46 && customerAgeValue < 55){
    return amount + (amount)*(100/100);
    console.log(`age is more than 46 and less than 55 ${amount} `);
}
else if(customerAgeValue>56 && customerAgeValue < 65){
    return amount + (amount)*(150/100);
    console.log(`age is more than 56 and less than 65 ${amount} `);
}
else if(customerAgeValue>65){
    return amount + (amount)*(210/100);
    console.log(`age is more than 65 ${amount} `);
}

}

form.addEventListener('submit',calculate);