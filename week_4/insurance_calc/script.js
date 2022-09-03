const form = document.querySelector('form');
const customerName = document.querySelector('#name');
const customerAge = document.querySelector('#age');
const preConditions = document.getElementsByName('currentHealth');
const habbits = document.getElementsByName('habits');

const insuranceScore = document.getElementById('insuranceResult');


const calculate = (event) =>{
    event.preventDefault();
    let CusName = customerName.value;
    let customerAgeValue = customerAge.value;
    let preConditionsResult = []; 
    let goodHabbits = []; 
    let badHabbits = [];   
    let baseScore = 500;
    let preConScore = 0;
    let goodHabScore = 0;
    let badHabScore = 0;
if(customerAgeValue <= 18){
    console.log(baseScore);
    
}
else if(customerAgeValue>=18 && customerAgeValue <= 25){
    baseScore = baseScore + (baseScore)*(10/100)
    console.log(`age is more than 18 and less than 25 so baseScore ${baseScore}`);
}
else if(customerAgeValue >= 26 && customerAgeValue <= 35){
    baseScore = baseScore + (baseScore)*(30/100);
    console.log(`age is more than 26 and less than 35 so baseScore ${baseScore} `);
}
else if(customerAgeValue>=36 && customerAgeValue <= 45){
    baseScore = baseScore + (baseScore)*(60/100);
    console.log(`age is more than 36 and less than 45 so baseScore ${baseScore} `);
}
else if(customerAgeValue>=46 && customerAgeValue <=55){
    baseScore = baseScore + (baseScore)*(100/100);
    console.log(`age is more than 46 and less than 55 so baseScore ${baseScore} `);
}
else if(customerAgeValue>=56 && customerAgeValue <=65){
    baseScore = baseScore + (baseScore)*(150/100);
    console.log(`age is more than 56 and less than 65 baseScore ${baseScore} `);
}
else if(customerAgeValue>65){
    baseScore = baseScore + (baseScore)*(210/100);
    console.log(`age is more than 65 so baseScore ${baseScore} `);
}

preConditions.forEach((item)=>{
    if(item.checked) {
        preConditionsResult.push(item.value);
    }
    
});
console.log(preConditionsResult);
if(preConditionsResult.length > 0){
    preConScore  =  baseScore*(preConditionsResult.length*1)/100;
    console.log(`the baseScore will be ${preConScore} `);
}
habbits.forEach((item) =>{
    if(item.checked){
        if(item.value === 'Daily exercise'){
            goodHabbits.push(item.value);
            goodHabScore =  -(baseScore*(5)/100) ;
    }
    else{
        badHabbits.push(item.value);
        badHabScore =  badHabScore + baseScore*(5)/100;

    }
}});
console.log("Total score is", baseScore + preConScore + goodHabScore + badHabScore);


insuranceScore.innerHTML = `
   Hello <span class="highlight">${CusName}</span>,Your age is <span class="highlight">${customerAgeValue}</span> so  your total insurance score is 
   <span class = "highlight">${baseScore + preConScore + goodHabScore + badHabScore}</span>

`;
form.reset();
}


form.addEventListener('submit',calculate);