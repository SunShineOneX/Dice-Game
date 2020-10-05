let player1 = document.getElementById("player__1");
let player2 = document.getElementById("player__2");

console.log("HELLO THERE!!!");


function randomNum() { 
    let random = Math.floor(Math.random() * 6) + 1;
    return random;
}

function diceRollPlayer1() {
    randomNum()
    if (randomNum() === 1) {
        player1.src = "assets/dice1.png"
    }
    else if (randomNum()  === 2) {
        player1.src = "assets/dice2.png"
    }
    else if (randomNum()  === 3) {
        player1.src = "assets/dice3.png"
    }
    else if (randomNum()  === 4) {
        player1.src = "assets/dice4.png"
    }
    else if (randomNum()  === 5) {
        player1.src = "assets/dice5.png"
    }
    else player1.src = "assets/dice6.png"
}

function diceRollPlayer2() {
    randomNum()
    if (randomNum() === 1) {
        player2.src = "assets/dice1.png"
    }
    else if (randomNum()  === 2) {
        player2.src = "assets/dice2.png"
    }
    else if (randomNum()  === 3) {
        player2.src = "assets/dice3.png"
    }
    else if (randomNum()  === 4) {
        player2.src = "assets/dice4.png"
    }
    else if (randomNum()  === 5) {
        player2.src = "assets/dice5.png"
    }
    else player2.src = "assets/dice6.png"
}

diceRollPlayer1();
diceRollPlayer2();