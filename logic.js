
const choices = ['rock','paper','scissors']
let imageList = document.getElementById('choice-panel').children
let choicePanel = document.getElementById('choice-panel');
let computerScoreBox = document.getElementById('computer')
let playerScoreBox = document.getElementById('player')
let headerPanel = document.querySelector('.header-panel').firstElementChild;

let playerChoice = '';
let playerScore = 0;
let computerScore = 0 ;
let rounds = 0;  

const audio = document.querySelector("audio[data-name='click-sound']");

// ANIMATIONS

headerPanel.addEventListener('mouseenter', (event) => {
    headerPanel.style.fontSize = '2.05em'
    console.log(event.target)
 })

headerPanel.addEventListener('mouseleave', () => {
    headerPanel.style.fontSize = '2em' 
})

for (let child of Array.from(imageList)) {
     
    child.firstElementChild.addEventListener('mouseenter', () => {
        child.firstElementChild.style.height = '220px'
    })

    child.firstElementChild.addEventListener('mouseleave', () => {
        child.firstElementChild.style.height = '200px'
    }) }

// GAME LOGIC

enableChoiceClick();

function enableChoiceClick() {
    // adds the event listeners for each image
    for (let child of imageList) {
        console.log('event listener added')
        child.firstElementChild.addEventListener('click',rockPaperScissors)
    }
}



function getComputerChoice() {
    let numChoice = Math.floor(Math.random() * choices.length)
    return choices[numChoice]
    // returns the computer's choice
 }

    
function playGame(playerSelection,computerSelection) {
    // decides the winner
    if (playerSelection === computerSelection) {
        return 0;
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        return 1;
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        return 1;
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        return 1;
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        return 2;
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        return 2;
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        return 2;
    } else {
        return 3;
    }

}


function gameWinner(message) {
    // adds winner of game text in DOM    
    let textNode = document.createTextNode(message)
    let messageDiv = document.createElement('div')
    
    messageDiv.className = 'winner-log' 
    messageDiv.appendChild(textNode)
    container.insertBefore(messageDiv, choicePanel)
    
    
}
function roundLog(message) {
    // adds winner of round text in DOM
    let textNode = document.createTextNode(message)
    let gameLog = document.createElement('div')
    gameLog.className = 'game-log' 

    gameLog.appendChild(textNode)
    container.appendChild(gameLog)
}

function rockPaperScissors(event) {
    console.log(rounds)
    audio.currentTime = 0;
    audio.play()
    playerChoice = event.target.alt; 
    rounds += 1;
    const computerChoice = getComputerChoice()
    const result = playGame(playerChoice,computerChoice);

    
    if (result=== 1) {
        roundLog('Player has won!')
        playerScore += 1;
        playerScoreBox.textContent = playerScore;
    } else if (result === 2) {
        roundLog('Computer has won!')
        computerScore += 1;
        computerScoreBox.textContent = computerScore;
    } else if (result === 0) {
        roundLog('It is a draw! One more round is given!')
        rounds -= 1;
    }
                
    if (rounds === 5) {

        for (let child of imageList) {
            child.firstElementChild.removeEventListener('click',rockPaperScissors)
        }

        if (playerScore > computerScore) {
            gameWinner("Player has won Rock Paper Scissors!")
        } else if (computerScore > playerScore) {
            gameWinner("Computer has won Rock Paper Scissors!")
        } else if (playerScore == computerScore) {
            gameWinner("It is a draw!")
        }
        
        let resetButton = document.createElement('button')
        resetButton.className = 'reset-button'
        resetButton.textContent = 'Play Again?'
        container.appendChild(resetButton)  
        resetButton.addEventListener('mouseenter', () => {
            resetButton.style.height = '60px';
            resetButton.style.width = '160px';
        })        
        resetButton.addEventListener('mouseleave', () => {
            resetButton.style.height = '50px';
            resetButton.style.width = '150px';
        })        

        resetButton.addEventListener('click', () => {

            let gameLogs = document.querySelectorAll('.game-log')
            
            gameLogs.forEach(box => {
                box.remove();
            })

            rounds = 0;
            playerScore = 0;
            computerScore = 0;
            computerScoreBox.textContent = 0;
            playerScoreBox.textContent = 0;

            let winnerLog = document.querySelector('.winner-log')
            winnerLog.remove();
        
            
            resetButton.remove()
            enableChoiceClick();

            
        })
    }

}



