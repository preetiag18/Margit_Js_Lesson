let distance,time;
while (distance != 0){
    distance = prompt("Enter distance");
    if(distance == 0){
        console.log("distance is zero");
        break;
    }
    time = prompt("Enter the time");
    let average = distance/time;
    console.log("average is:",average);
}
