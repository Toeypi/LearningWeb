var numberOfSquare = 6;
var colors = [];
var pickedColor = pickColor();

var easyBtn = document.querySelector("#EasyBtn");
var hardBtn = document.querySelector("#HardBtn");
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var newColorButton = document.getElementById("newColorButton");
var h1 = document.querySelector("h1");





newGame();

function newGame() {
    createNewcolor();
    // you can reset new game,even you didn't play before
    resetColor(numberOfSquare);
    selector();
}

function selector() {
	easyBtn.addEventListener("click",function() {
		easyBtn.classList.add("selected");
		hardBtn.classList.remove("selected");
		resetBymode();
	});
	hardBtn.addEventListener("click",function() {
	    easyBtn.classList.remove("selected");
		hardBtn.classList.add("selected");
		resetBymode();
	});
}


function createNewcolor() {
        colors = generateRandomColor(numberOfSquare);
        pickedColor = pickColor();
		colorDisplay.textContent = pickedColor;
		for (var i = 0; i < numberOfSquare; i++) {
	    // add inital color to square
		    squares[i].style.backgroundColor = colors[i];
		// add button and function after click to each color square.
		    squares[i].addEventListener("click", function() {
		        var clickedColor = this.style.backgroundColor;
		        if (clickedColor === pickedColor) {
			        messageDisplay.textContent = "Correct!";
			        changeColor(clickedColor);// change all square color to clicked color.
			        h1.style.backgroundColor = clickedColor;
			        newColorButton.textContent = "RESTART?";

			    } else{
			        this.style.backgroundColor = "#232323";
			        messageDisplay.textContent = "Try again";
			    } 
	        });
        }

	
}

function resetColor(number) {
	newColorButton.addEventListener("click",function(){
		newColorButton.textContent = "NEW COLOUR";
		messageDisplay.textContent = "";
		h1.style.backgroundColor = "steelblue";
		colors = generateRandomColor(number);
		pickedColor = pickColor();
		colorDisplay.textContent = pickedColor;
		for (var i = 0; i < numberOfSquare ; i++) {
		    squares[i].style.backgroundColor = colors[i];
        }
	});
	
} 
function resetBymode() {
	if (hardBtn.classList.contains("selected")) {
		colors = generateRandomColor(6);
		pickedColor = pickColor();
	    colorDisplay.textContent = pickedColor;
		for (var i = 0; i < numberOfSquare ; i++) {
		    squares[i].style.backgroundColor = colors[i];
			squares[i].style.display = "block"; 
		}
		resetColor(6);
		return 1;
	} else if (easyBtn.classList.contains("selected"))  {
		colors = generateRandomColor(3);
		pickedColor = pickColor();
		colorDisplay.textContent = pickedColor;
	    for (var i = 0; i < numberOfSquare ; i++) {
			if (colors[i]) {
				squares[i].style.backgroundColor = colors[i];
			} else {
				squares[i].style.display = "none";
				} 
		    }
		resetColor(3);
		return 2;
		}
}

	




function changeColor(color) {
// change color to all square.
    for (var i = 0; i < numberOfSquare; i++) {
	squares[i].style.backgroundColor = color;
    }
}

function pickColor () {
	return colors[Math.floor(Math.random() * colors.length)];
}
function generateRandomColor(number){
	var arr = []
	for (var i = 0; i < number; i++) {
		arr.push(randomColor());
	}
	return arr;
}

function randomColor() {
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", "+ g + ", " + b + ")";
}