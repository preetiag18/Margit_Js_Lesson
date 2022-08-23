const workHours = window.prompt("Enter your working Hour:");
const salary = window.prompt("Enter your hourly salary:")

let extraTwoHour = workHours - 7;
let extraHour =  workHours - 9;

if(workHours == 7){
    let basicSalary = 7*salary;
    console.log("the total salary for 7 Hour is:",basicSalary);
}
else if(workHours == 7 && extraHour <= 2){
    let basicSalary2 = salary*7 + extraTwoHour*salary*(1/2);
    console.log("the total salary is ",basicSalary2);
}
else if(workHours>9){
    let basicSalary3= salary*7 + extraTwoHour*salary*(1/2)+ extraHour* 2*salary ;
    console.log("the total salary is ",basicSalary3);
}
else{
    console.log("There is no Salary");
}