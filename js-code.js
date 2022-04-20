function computerPlay(){
    let computerChoiceNum = Math.floor(Math.random() * 3) + 1; // randomizing a number between 1-3
    switch (computerChoiceNum){
        case 1:
            return 'rock';
        case 2:
            return 'paper';
        case 3:
            return 'scissors';
    }
}
let playerScore = 0;
let computerScore = 0;
let gameRun = 1;

function playRound(e){
    if (gameRun == 1){
        let playerChoice = this.id;
        let computerChoice = computerPlay();
        let resultStr = '';
        let currentScore = '';
        const resultDisplay = document.querySelector('.result');
        const scr = document.querySelector('.score');
        if (playerChoice == computerChoice){
            resultStr = "It's a draw! you both selected " + playerChoice;
        }
        else if ((playerChoice == 'rock') && (computerChoice == 'scissors')){
            resultStr = "Youv'e Won! rock beats scissors!";
            playerScore++;
        }
        else if ((playerChoice == 'scissors') && (computerChoice == 'rock')){
            resultStr = "Youv'e Lost! rock beats scissors!";
            computerScore++;
        }
        else if ((playerChoice == 'scissors') && (computerChoice == 'paper')){
            resultStr = "Youv'e Won! scissors beats paper!";
            playerScore++;
        }
        else if ((playerChoice == 'paper') && (computerChoice == 'rock')){
            resultStr = "Youv'e Won! paper beats rock!";
            playerScore++;
        }
        else if ((playerChoice == 'paper') && (computerChoice == 'scissors')){
            resultStr = "Youv'e Lost! scissors beats paper!";
            computerScore++;
        }
        else if ((playerChoice == 'rock') && (computerChoice == 'paper')){
            resultStr = "Youv'e Lost! paper beats rock!";
            computerScore++;
        }
        currentScore = "You " + playerScore + " - " + computerScore + " Computer";
        if ((playerScore !=5) && (computerScore !=5)){
            resultDisplay.textContent = resultStr;
            scr.textContent = currentScore;
        }
        else{
            if (computerScore>playerScore){
                resultDisplay.textContent = "The Game ended! Youv'e lost, the computer has won!";
            }
            else {
                resultDisplay.textContent = "The game ended! Youv'e won, the computer has lost!";
            }    
        scr.textContent = currentScore;
        playerScore = 0;
        computerScore = 0;
        gameEndMenu();
        }
        this.classList.add('playing');
    }
}

function gameEndMenu(){
    gameRun = 0;
    const restart = document.createElement('button');
    restart.textContent = 'Play Again';
    restart.classList.add('play-again');
    restart.setAttribute('style', 'font-size: 25px; font-width:700; color: #ffc600; border-radius: 15px; background: blue; margin-top: 8px;');
    const div2 = document.querySelector('.second-block');
    div2.appendChild(restart);
    restart.addEventListener('click', () => {
        gameRun = 1;
        restart.remove();
        const resultDisplay = document.querySelector('.result');
        const scr = document.querySelector('.score');
        resultDisplay.textContent = "You started a new game, Good Luck!";
        scr.textContent = "You " + playerScore + " - " + computerScore + " Computer";
    });
}



function endTransition(e) {
    if (e.propertyName != 'transform') return;
    e.target.classList.remove('playing');
  }


const btn = document.querySelectorAll('.move');
btn.forEach(move => move.addEventListener('click', playRound));
btn.forEach(pressed => pressed.addEventListener('transitionend', endTransition));
