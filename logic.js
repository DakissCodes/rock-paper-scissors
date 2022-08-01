
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
        return "It is a draw!";
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        return 'You lost! PAPER beats ROCK';
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        return 'You won! ROCKj beats SCISSORS';
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        return 'You won! PAPER beats ROCK!';
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        return 'You lost! SCISSORS beats PAPER!';
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        return 'You lost! ROCK beats SCISSORS!';
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        return 'You won! SCISSORS beats PAPER!';
    } else {
        return 'you have entered the wrong input!';
    }

}

function game() {

    let playerScore = 0;
    let computerScore = 0;

    for (i = 0; i < 5; i++) {
        // starts from 0, stops when condition is != true.
        const playerChoice = prompt('Rock, Paper or Scissors?: ', '');
        const computerChoice = getComputerChoice()

        const result = playGame(playerChoice.toLowerCase(),computerChoice);
        console.log(result);
        if (result.slice(4,7) === 'won') {

            playerScore += 1;
            console.log('player score:'.concat(playerScore));
            console.log('computer score:'.concat(computerScore));

        } else if (result.slice(4,8) === 'lost') {
            computerScore += 1;
            console.log('player score:'.concat(playerScore));
            console.log('computer score:'.concat(computerScore));

        }

        }

    if (playerScore > computerScore) {
        console.log('Player has won the whole game!');
        console.log('player score:'.concat(playerScore));
        console.log('computer score:'.concat(computerScore));

    } else if (computerScore > playerScore) {
        console.log('Computer has won the whole game!');
        console.log('player score:'.concat(playerScore))
        console.log('computer score:'.concat(computerScore))
        
    } else {
        console.log('The game is a draw!');
        console.log('player score:'.concat(playerScore))
        console.log('computer score:'.concat(computerScore))
        
    }



    }
    // 5 round game


game()



