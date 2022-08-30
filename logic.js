
let imageList = document.getElementById('container').children
// choices

let playerChoice = '';

let playerScore = 0;
let computerScore = 0;

for (let child of imageList) {
    

    child.firstElementChild.addEventListener('mouseenter', () => {
        child.firstElementChild.style.height = '220px'
        
    })

    child.firstElementChild.addEventListener('mouseleave', () => {
        child.firstElementChild.style.height = '200px'
        
    })

    child.firstElementChild.addEventListener('click', () => {
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
    
    
    if (result === 1) {
        console.log('player has won');

    } else if (result === 2) {
        console.log('computer has won')
    } else if (result === 0) {
        console.log('draw')
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





