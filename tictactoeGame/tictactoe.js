
var newGame = document.querySelector("#newGame");
var cells = document.getElementsByTagName("td");
var messageScore = document.querySelector("#message");


var T_SIZE = 3,
    score,
    box = [];
    turn = 'X';



function init(){


	var identifier = 0;
	for (var i = 0; i < T_SIZE; i++) {
	    for (var j = 0; j < T_SIZE; j++) {
	    	cells[identifier].classList.add("row" + i,"column" + j);
	    	if (i == j) {
	    		cells[identifier].classList.add("diagonal0");
	    	}  
	    	if(j == T_SIZE - i - 1) {
	    		cells[identifier].classList.add("diagonal1");
	    	}
	    	cells[identifier].addEventListener("click",set);
	    	box.push(cells[identifier]);
	    	identifier++;
	    }   
	
    }
    startNewGame();

}


function startNewGame() {
	score = {
		'X':0,
		'O':0
	};
	moves = 0;
	turn = 'X';
	box.forEach(function(square) {
		square.innerHTML = '';
	});
	newGameButton();
	messageScore.textContent = "Player1 " + score['X'] + ":" + score['O'] + " Player2";

}

function set() {
	if (this.innerHTML!= '') {
		return;
	}
	this.innerHTML = turn;
	moves+=1;
	if (win(this)) {
		alert("Player " + turn + " win.");
		score[turn] += 1;
		messageScore.textContent = "Player1 " + score['X'] + ":" + score['O'] + " Player2";
		startNewGame();
		return;
	}
    else if (moves === T_SIZE * T_SIZE) {
		alert("draw");
		return;
	} 
		
	turn = turn === 'X' ? 'O':'X';
		
	
}

function win(click) {
	var memberOf = click.className.split(/\s+/);
	for (var i = 0; i < memberOf.length; i++) {
		var testClass = '.' + memberOf[i];
		var items = contain(testClass, turn);
		if (items.length === 3) {
			return true;
		}
	}
	return false;

}

function contain(selected,turn) {
	// check each turned player have the same row or column or diagonal property.
	var selectedClasses_property = document.querySelectorAll('#tictactoe ' + selected);

	return [].filter.call(selectedClasses_property,function(selectedClass) {
		return RegExp(turn).test(selectedClass.textContent);
	});
}

function newGameButton() {
	newGame.addEventListener("click", function() {
		startNewGame();
	})
}


init();





