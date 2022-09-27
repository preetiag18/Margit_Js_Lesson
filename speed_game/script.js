const startButton = document.querySelector("#start");
const stopButton = document.querySelector("#stop");
const circles = document.querySelectorAll(".circle");
const scoreShow = document.querySelector("#score");
const closeButton = document.querySelector("#close");
const overlay = document.querySelector("#overlay");
const endResult = document.querySelector("#endResult");

let score = 0; 
let active = 0;
let timer;
let pace = 1000;
let rounds = 0;
let gameSound;
// random number function from W3 page
const RndNumber = (min, max)=> {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

  circles.forEach((circle,i) =>{
     circle.addEventListener("click", ()=>clickCircle(i))
   
});


const clickCircle = (i)=>{
    if(i !== active){
        return stopGame();
        }
        else{
            score++;
            rounds--;
            return scoreShow.textContent = score;
        }
        
    };


const startGame = (e) => {
    if(rounds >= 3){
        return stopGame();
    }
    for(let j=0;j<circles.length;j++){
        circles[j].style.pointerEvents='auto';
    }

    let nextActive = pickNewNo(active);

    circles[nextActive].classList.toggle('active');
    circles[active].classList.remove('active');
    stopButton.style.display = "block";
    startButton.style.display = "none"; 

    active = nextActive;
    console.log('current active number is',active);
    timer = setTimeout(startGame,pace);

    pace = pace - 10;

    rounds++;

    function pickNewNo(active){
        let nextActive =  RndNumber(0,3); 
        if(nextActive != active){
            return nextActive;
        }
        else{
            return pickNewNo(active);
        }
    }
};

const stopGame = (e) => {
    overlay.style.visibility = 'visible';
    stopButton.style.display = "none";
    startButton.style.display = "block";
    if(score < 10){
        endResult.textContent = `Your Total Score is ${score} you can it try again`;
    }
    else if(score >= 10 && score < 20 ){
        endResult.textContent = `Your Total Score is ${score} you are good`;
    }
   
    clearTimeout(timer);
  };

//   for(const circle of circles){
//     circle.addEventListener("click",()=>{
//         console.log("I was Clicked",circle.textContent);
//     })
           
//     }

const resetGame = () =>{
    window.location.reload();
};

startButton.addEventListener("click", startGame);
stopButton.addEventListener("click", stopGame);
closeButton.addEventListener("click", resetGame);
