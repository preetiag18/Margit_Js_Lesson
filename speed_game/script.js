const startButton = document.querySelector("#start");
const stopButton = document.querySelector("#stop");
const circles = document.querySelectorAll(".circle");

const startGame = (e) => {
  console.log("Games started",e.target.value);  
}

const stopGame = (e) => {
    console.log("Games ended",e.target.value);  
  }


startButton.addEventListener("click", startGame);
stopButton.addEventListener("click", stopGame);