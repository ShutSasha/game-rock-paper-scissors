document.write("<div class = 'block_button'><button id ='rock'></button><button id ='scissors'></button><button id ='paper'></button></div>");
let block_button = document.querySelector(".block_button");
block_button.style.display = 'flex';
block_button.style.justifyContent = 'space-around';
let button_rock = document.getElementById("rock");
let button_scissors = document.getElementById("scissors");
let button_paper = document.getElementById("paper");


button_rock.style.width = '300px';
button_rock.style.height = '300px';
button_rock.style.backgroundImage = 'url(img/rock.png)';
button_rock.style.backgroundRepeat = 'no-repeat';
button_rock.style.backgroundSize = 'cover';
button_rock.style.cursor = 'pointer';


button_scissors.style.width = '300px';
button_scissors.style.height = '300px';
button_scissors.style.backgroundImage = 'url(img/scissors.png)';
button_scissors.style.backgroundRepeat = 'no-repeat';
button_scissors.style.backgroundSize = 'cover';
button_scissors.style.cursor = 'pointer';


button_paper.style.width = '300px';
button_paper.style.height = '300px';
button_paper.style.backgroundImage = 'url(img/paper.png)';
button_paper.style.backgroundRepeat = 'no-repeat';
button_paper.style.backgroundSize = 'cover';
button_paper.style.cursor = 'pointer';


let player = 0;

let p1;
let p2;
const set = (value) => {
	if (player)
		p2 = value;
	else
		p1 = value;
	player = 1 - player;
	console.log("p1: " + p1);
	console.log("p2: " + p2);
	const rps = (p1, p2) => {
		if (p1 == "scissors" && p2 == "paper") {
			let result = document.write("<img id='round' src='../img/scissors_won_paper.png' alt=''><p id='1'>first player won</p>");
			let text = document.getElementById("1");
			let img = document.getElementById('round');
			img.style.display = "block";
			img.style.marginLeft = "auto";
			img.style.marginRight = "auto";
			text.style.color = "blue";
			text.style.fontWeight = "700";
			text.style.textAlign = "center";
			text.style.fontSize = "60px";
			return result;
		}
		else if (p1 == "paper" && p2 == "rock") {
			let result = document.write("<img id='round' src='../img/paper_won_rock.png' alt=''><p id='1'>first player won</p>");
			let text = document.getElementById("1");
			let img = document.getElementById('round');
			img.style.display = "block";
			img.style.marginLeft = "auto";
			img.style.marginRight = "auto";
			text.style.color = "blue";
			text.style.fontWeight = "700";
			text.style.textAlign = "center";
			text.style.fontSize = "60px";
			return result;
		}
		else if (p1 == "rock" && p2 == "scissors") {
			let result = document.write("<img id='round' src='../img/rock_won_scissors.png' alt=''><p id='1'>first player won</p>");
			let text = document.getElementById("1");
			let img = document.getElementById('round');
			img.style.display = "block";
			img.style.marginLeft = "auto";
			img.style.marginRight = "auto";
			text.style.color = "blue";
			text.style.fontWeight = "700";
			text.style.textAlign = "center";
			text.style.fontSize = "60px";
			return result;
		}
		else if (p2 == "scissors" && p1 == "paper") {
			let result = document.write("<img id='round' src='../img/scissors_won_paper.png' alt=''><p id='1'>second player won</p>");
			let text = document.getElementById("1");
			let img = document.getElementById('round');
			img.style.display = "block";
			img.style.marginLeft = "auto";
			img.style.marginRight = "auto";
			text.style.color = "blue";
			text.style.fontWeight = "700";
			text.style.textAlign = "center";
			text.style.fontSize = "60px";
			return result;
		}
		else if (p2 == "paper" && p1 == "rock") {
			let result = document.write("<img id='round' src='../img/paper_won_rock.png' alt=''><p id='1'>second player won</p>");
			let text = document.getElementById("1");
			let img = document.getElementById('round');
			img.style.display = "block";
			img.style.marginLeft = "auto";
			img.style.marginRight = "auto";
			text.style.color = "blue";
			text.style.fontWeight = "700";
			text.style.textAlign = "center";
			text.style.fontSize = "60px";
			return result;
		}
		else if (p2 == "rock" && p1 == "scissors") {
			let result = document.write("<img id='round' src='../img/rock_won_scissors.png' alt=''><p id='1'>second player won</p>");
			let text = document.getElementById("1");
			let img = document.getElementById('round');
			img.style.display = "block";
			img.style.marginLeft = "auto";
			img.style.marginRight = "auto";
			text.style.color = "blue";
			text.style.fontWeight = "700";
			text.style.textAlign = "center";
			text.style.fontSize = "60px";
			return result;
		}
		else if (p1 == p2)
			return 'Draw!'
		/* 		else
					return "Player 2 won!"; */
	};
	rps(p1, p2);
}

button_rock.onclick = () => set('rock');
button_scissors.onclick = () => set('scissors');
button_paper.onclick = () => set('paper');

