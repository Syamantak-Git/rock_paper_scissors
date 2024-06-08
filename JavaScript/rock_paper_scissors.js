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
    let winner = "";
    if ((playerChoice + 1) % 3 == computerChoice) {
        winner = "player";
    } else if (playerChoice == computerChoice) {
        winner = "Tie";
    } else {
        winner = "computer"
    }
    return winner;
}

let playerScore = 0;
let computerScore = 0;

function game(gesture) {
    
    let playerGesture = gesture;
    let playerChoice = getPlayerChoice(playerGesture);
    let computerChoice = getComputerChoice();
    let winner = play(playerChoice, computerChoice);
    //console.log(i);
    if (winner == "player") {
        playerScore++;
    } else if (winner == "computer") {
        computerScore++;
    }
    const curRound = document.querySelector(".curRound");
    curRound.innerText = `player: ${rock_paper_scissor(playerChoice)} \n computer ${rock_paper_scissor(computerChoice)} \n winner: ${winner}`;
    const score = document.querySelector(".score");
    score.innerText = `pScore ${playerScore} \n cScore ${computerScore}`;
    const overallWinner = document.querySelector(".overallWinner");
    if (playerScore == 5 || computerScore == 5) {
        if (playerScore > computerScore) {
            overallWinner.innerText = "Player Wins";
        } else if (computerScore > playerScore) {
            overallWinner.innerText = "Computer Wins";
        } 
        playerScore = 0;
        computerScore = 0;
    } else {
        overallWinner.innerText = "";
    }
}

const playroundBtns = document.querySelector(".playround");
playroundBtns.addEventListener("click", (e) => {
    if (e.target.nodeName == "BUTTON") {
        game(e.target.innerText);
    }
});
