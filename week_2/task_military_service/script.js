const checkAge =()=>{
    const age = window.prompt("How old are you");


if(age<18){
   return console.log("too young");
}
else if(age<27){
    return console.log("Right age for Miloitary Service");
}
else if(age<41){
    return console.log("Right age for Miloitary Service");
}else if(age<55){
    return console.log("you are in backup reserve");
}
else{
    return console.log("Too aged");
}
};
checkAge();