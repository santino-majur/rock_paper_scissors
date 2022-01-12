
const computerPlay = () => {
    let choices = ['Rock', 'Paper', 'Scissors']
    const computerChoices = Math.floor(Math.random() * choices.length)
    if (computerChoices === 0) {
        return choices[0]
    } else if (computerChoices === 1) {
        return choices[1]
    } else if (computerChoices === 2) {
        return choices[2]
    }
}
const playerPlay = () => {
    let choices = prompt('Please make a selection between Paper, Rock or Scissors: ');
    return choices.toLowerCase()
}

const playRound = (playerSelection, computerSelection) => {
    if (playerSelection.toLowerCase() === computerSelection) {
        return 'You have tied! please make another selection'
    } else if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'Paper') {
        return 'You Lose! Paper beats Rock'
    } else if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'Scissors') {
        return 'You Lose! Scissors beats Paper'
    } else if (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'Rock') {
        return 'You Lose! Rock beats Scissors'
    } else if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'Rock') {
        return 'You Won! Paper beats Rock'
    } else if (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'Paper') {
        return 'You Won! Scissors beats Paper'
    } else if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'Scissors') {
        return 'You Won! Rock beats Scissors'
    } else {
        return 'Please select a valid choice!'
    }
}
/* const playerSelection = playerPlay()
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection))
 */

const game = () =>{
    for(let i = 0; i < 5; i++){
        const playerSelection = playerPlay()
        const computerSelection = computerPlay()
        console.log(playRound(playerSelection, computerSelection))
    }
}
console.log(game())