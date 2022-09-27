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
let missedHits = 0;
const playSmashSound = () => new Audio("media/smash.ogg").play();
const gameOverSound = () => new Audio("media/game-over.mp3").play();
// random number function from W3 page
const RndNumber = (min, max)=> {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

circles.forEach((circle,i) =>{
     circle.addEventListener("click", ()=>clickCircle(i))
});

const clickCircle = (i)=>{
    playSmashSound()
    if(i !== active){
        return stopGame();
    } else{
            score++;
            missedHits--;
            return scoreShow.textContent = score;
        }
        
    };


const startGame = (e) => {
    if(missedHits >= 3){
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

    missedHits++;

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
    gameOverSound();
    overlay.style.visibility = 'visible';
    stopButton.style.display = "none";
    startButton.style.display = "block";
    if(score < 10){
        endResult.textContent = `Your Total Score is ${score}. You can it try again`;
    }
    else if(score >= 10 && score < 20 ){
        endResult.textContent = `Well Done..!! Your Total Score is ${score}`;
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
