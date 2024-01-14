function getComputerChoice() {
    let choice = Math.floor((Math.random()) * 3);
    return choice;
}
function getPlayerChoice(choice) {
    let gesture = {"rock":0, "scissor":1, "paper":2};
    return gesture[choice];
}
function rock_paper_scissor(choice) {
    let gesture = new Array("Rock", "Scissor", "Paper");
    return gesture[choice];
}
function play(playerChoice, computerChoice) {
    let playerGesture = rock_paper_scissor(playerChoice);
    let computerGesture = rock_paper_scissor(computerChoice);
    let result;
    let winner = "";
    if ((playerChoice + 1) % 3 == computerChoice) {
        result = `You Win, ${playerGesture} beats ${computerGesture}.\n`;
        winner = "player";
    } else if (playerChoice == computerChoice) {
        result = "Tie";
    } else {
        result = `You Lose, ${computerGesture} beats ${playerGesture}.\n`;
        winner = "computer"
    }
    console.log(result);
    return winner;
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        let playerGesture = prompt("enter rock, paper or scissor").toLowerCase();
        let playerChoice = getPlayerChoice(playerGesture);
        let computerChoice = getComputerChoice();
        let winner = play(playerChoice, computerChoice);
        //console.log(i);
        if (winner == "player") {
            playerScore++;
        } else if (winner == "computer") {
            computerScore++;
        }
    }
    if (playerScore > computerScore) {
        console.log("Player Wins");
    } else if (computerScore > playerScore) {
        console.log("Computer Wins");
    } else {
        console.log("TIE b/w Computer and Player");
    }
}
game();
