const h3 = document.querySelector("h3");
// input colors
const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");
//Get background
const body = document.getElementById("gradient");


//Create new function for color pick
function setGradient(event) {
	const selectedArrow = document.querySelector('input[name="arrows"]:checked').value;
	body.style.background = "linear-gradient("+ selectedArrow+ "deg, " + color1.value + ", " 
	+ color2.value +")";
	h3.textContent = body.style.background + ";";
}


//Pick and set Bkground colors 
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);

