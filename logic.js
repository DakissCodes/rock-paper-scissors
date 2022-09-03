
let imageList = document.getElementById('choice-panel').children
// choices

let playerChoice = '';

let playerScore = 0;
let computerScore = 0 ;
let rounds = 0;  
let choicePanel = document.getElementById('choice-panel');

function gameWinner(message) {
    
    let textNode = document.createTextNode(message)
    let messageDiv = document.createElement('div')
    messageDiv.className = 'winner-log' 
    messageDiv.appendChild(textNode)
    container.insertBefore(messageDiv, choicePanel)
    
    
}
function gameLog(message) {

    let textNode = document.createTextNode(message)
    let gameLog = document.createElement('div')
    gameLog.className = 'game-log' 

    gameLog.appendChild(textNode)
    container.appendChild(gameLog)
}
                


for (let child of imageList) {
    

    child.firstElementChild.addEventListener('mouseenter', () => {
        child.firstElementChild.style.height = '220px'
        
    })

    child.firstElementChild.addEventListener('mouseleave', () => {
        child.firstElementChild.style.height = '200px'
        
    })

    child.firstElementChild.addEventListener('click', function rockPaperScissors() {

        rounds += 1;
        if (child.firstElementChild.alt === 'scissors') {
            playerChoice = 'scissors';
        } else if (child.firstElementChild.alt === 'rock') {
            playerChoice = 'rock';
                
        } else if  (child.firstElementChild.alt === 'paper') {
            playerChoice = 'paper';
        }

        const computerChoice = getComputerChoice()
        // gets computer choice 


        const result = playGame(playerChoice.toLowerCase(),computerChoice);
        // plays the game



        // add new div
        // append text node
        // add to container body!
        let container = document.getElementById('container');
        let computerScoreBox = document.getElementById('computer')
        let playerScoreBox = document.getElementById('player')

        

        if (result=== 1) {
            gameLog('Player has won!')
            console.log('player has won');
            playerScore += 1;
            playerScoreBox.textContent = playerScore;

        } else if (result === 2) {
            gameLog('Computer has won!')
            computerScore += 1;
            computerScoreBox.textContent = computerScore;
            console.log('computer has won')
        } else if (result === 0) {
            gameLog('It is a draw! One more round is given!')
            console.log('draw')

            rounds -= 1;
        }
                    

        if (rounds === 5) {
            
            child.firstElementChild.removeEventListener('click', rockPaperScissors )
            if (playerScore > computerScore) {
                gameWinner("Player has won Rock Paper Scissors!")
            } else if (computerScore > playerScore) {
                gameWinner("Computer has won Rock Paper Scissors")
            } else if (playerScore == computerScore) {
                gameWinner("It is a draw!")
            }

        }

    })
    
}


const choices = ['rock','paper','scissors']

function getComputerChoice() {
    let numChoice = Math.floor(Math.random() * choices.length)
    return choices[numChoice]
    // returns the computer's choice
}

function playGame(playerSelection,computerSelection) {
    // plays one round of rock paper scissors
    // returns a string
// make sure inputs are case insensitive
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


// task one - add event listener to each image
// if an event is clicked, set player choice as the corresponding choice




function game() {


    // for (i = 0; i < 5; i++) {
        // starts from 0, stops when condition is != true.
            //
        // playerChoice = prompt('Rock, Paper or Scissors?: ', '')
        // const computerChoice = getComputerChoice()

        // const result = playGame(playerChoice.toLowerCase(),computerChoice);
        // console.log(result);
        
        // if (result.slice(4,7) === 'won') {

        //     playerScore += 1;
        //     console.log('player score:'.concat(playerScore));
        //     console.log('computer score:'.concat(computerScore));

        // } else if (result.slice(4,8) === 'lost') {
        //     computerScore += 1;
        //     console.log('player score:'.concat(playerScore));
        //     console.log('computer score:'.concat(computerScore));

        // }

        // }

    // if (playerScore > computerScore) {
    //     console.log('Player has won the whole game!');
    //     console.log('player score:'.concat(playerScore));
    //     console.log('computer score:'.concat(computerScore));

    // } else if (computerScore > playerScore) {
    //     console.log('Computer has won the whole game!');
    //     console.log('player score:'.concat(playerScore))
    //     console.log('computer score:'.concat(computerScore))
        
    // } else {
    //     console.log('The game is a draw!');
    //     console.log('player score:'.concat(playerScore));
    //     console.log('computer score:'.concat(computerScore));
        
    // }


    }
    // 5 round game


game()





