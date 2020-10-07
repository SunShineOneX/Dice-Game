// ─── GLOBAL VARIABLES ───────────────────────────────────────────────────────────
//
let randomNumber1 = Math.floor(Math.random() * 6) + 1;
let randomNumber2 = Math.floor(Math.random() * 6) + 1;

let randomDiceImg = "./assets/dice" + randomNumber1 + ".png";
let randomDiceImg2 = "./assets/dice" + randomNumber2 + ".png";

let player1 = document.getElementById("player__1");
let player2 = document.getElementById("player__2");
let winner = document.getElementById("winner");
//
// ─── CHANGE IMG ELEMENTS SOURCES BASED ON RANDOM NUMBERS GENERATED ──────────────
//
player1.src=randomDiceImg;
player2.src=randomDiceImg2;

//
// ─── SIMPLE FUNCTION TO DETERMINE WINNER ───────────────────────────────────────────────
//
let determineWinner = () => {
    if(randomNumber1 > randomNumber2) {
        winner.innerHTML= "☀️ Player 1 wins!"
    }
    else if (randomNumber2 > randomNumber1) {
        winner.innerHTML= "🌙 Player 2 wins!" 
    }
    else winner.innerHTML= "❄️ Draw!"
}

determineWinner();

//
// ─── ALTERNATIVE SOLUTION TO DICE GAME ──────────────────────────────────────────
//
// let player1 = document.getElementById("player__1");
// let player2 = document.getElementById("player__2");
// let header = document.getElementById("winner");

// let diceRoll = () => {
//     let diceOneRandom = Math.floor(Math.random() * 6) + 1;
//     let diceTwoRandom = Math.floor(Math.random() * 6) + 1;

//     let playerOneImg = () => {
//         if (diceOneRandom === 1) {
//             player1.src = "./assets/dice1.png"
//         } else if (diceOneRandom === 2) {
//             player1.src="./assets/dice2.png"
//         } else if (diceOneRandom === 3) {
//             player1.src="./assets/dice3.png"
//         } else if (diceOneRandom === 4) {
//             player1.src="./assets/dice4.png"
//         } else if (diceOneRandom === 5) {
//             player1.src="./assets/dice5.png"
//         } else player1.src="./assets/dice6.png"
//     }

//     let playerTwoImg = () => {
//         if (diceTwoRandom === 1) {
//             player2.src = "./assets/dice1.png"
//         } else if (diceTwoRandom === 2) {
//             player2.src="./assets/dice2.png"
//         } else if (diceTwoRandom === 3) {
//             player2.src="./assets/dice3.png"
//         } else if (diceTwoRandom === 4) {
//             player2.src="./assets/dice4.png"
//         } else if (diceTwoRandom === 5) {
//             player2.src="./assets/dice5.png"
//         } else player2.src="./assets/dice6.png"
//     }

//     if (diceOneRandom === diceTwoRandom) {
//         header.innerHTML = "Draw!"
//     } else if (diceOneRandom > diceTwoRandom) {
//         header.innerHTML = "Player 1 wins!"
//     } else {
//         header.innerHTML = "Player 2 wins!"
//         console.log(diceOneRandom, "Player one!");
//         console.log(diceTwoRandom, "Player Two!");
//     }
//     playerOneImg();
//     playerTwoImg();
// }

// diceRoll();
    