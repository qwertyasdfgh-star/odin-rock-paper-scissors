export function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}

export function determineWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) return 'tie';
    
    const winConditions = {
        rock: 'scissors',
        paper: 'rock',
        scissors: 'paper'
    };
    
    return winConditions[playerChoice] === computerChoice ? 'win' : 'lose';
}

export function formatResult(result, playerChoice, computerChoice) {
    switch(result) {
        case 'tie':
            return `It's a tie! Both chose ${playerChoice}`;
        case 'win':
            return `You win! ${playerChoice} beats ${computerChoice}`;
        case 'lose':
            return `You lose! ${computerChoice} beats ${playerChoice}`;
    }
}