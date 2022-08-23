const workHours = window.prompt("Enter your working Hour:");
const salary = window.prompt("Enter your hourly salary:")

let extraHour = workHours - 7;

let basicSalary= workHours*salary;
if(extraHour<=0){
	console.log("total salary is",basicSalary);
}
else if(extraHour<=2){
    let extraSalary1 = extraHour*salary/2;
    let totalSalary = extraSalary1+basicSalary;
    console.log("the total salary is ",totalSalary);

}
else if(extraHour>2){
     let extraSalary2 = 2*salary/2+ (extraHour-2)*salary;
    console.log("the total salary is ",extraSalary2);
}