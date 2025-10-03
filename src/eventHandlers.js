import { getComputerChoice, determineWinner, formatResult } from './gameLogic.js';
import { updateComputerIcon, updateScoreDisplay, showModal } from './ui.js';
import { createConfetti } from './confetti.js';

export function setupEventListeners(dom, gameHistory) {
    let humanChoice = '';
    let humanScore = 0;
    let computerScore = 0;
    let playRoundListener = null;

    // Cache DOM elements
    const {
        rockBtn,
        paperBtn,
        scissorsBtn,
        playRoundBtn,
        resetGameBtn,
        humanScoreDisplay,
        computerScoreDisplay,
        playerChoiceDisplay,
        computerChoiceDisplay,
        computerIcon,
        roundResultDisplay
    } = dom;

    const handleWeaponClick = (weapon) => {
        resetWeaponButtons();
        humanChoice = weapon;
        dom[`${weapon}Btn`].classList.add('active');
        playerChoiceDisplay.textContent = weapon.charAt(0).toUpperCase() + weapon.slice(1);
    };

    rockBtn.addEventListener('click', () => handleWeaponClick('rock'));
    paperBtn.addEventListener('click', () => handleWeaponClick('paper'));
    scissorsBtn.addEventListener('click', () => handleWeaponClick('scissors'));

    const playRound = () => {
        if (!humanChoice) {
            roundResultDisplay.textContent = "Please select your choice first!";
            return;
        }

        const computerChoice = getComputerChoice();
        computerChoiceDisplay.textContent = computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1);
        updateComputerIcon(computerChoice, computerIcon);

        const result = determineWinner(humanChoice, computerChoice);
        const formattedResult = formatResult(result, humanChoice, computerChoice);
        
        if (result === 'win') {
            humanScore++;
            humanScoreDisplay.textContent = humanScore;
            if (humanScore === 5) {
                createConfetti();
                showModal('victory');
            }
        } else if (result === 'lose') {
            computerScore++;
            computerScoreDisplay.textContent = computerScore;

            if (computerScore === 5) {
                showModal('defeat');
            }
        }

        roundResultDisplay.textContent = formattedResult;
        gameHistory.addRound(humanChoice, computerChoice, formattedResult);
    };

    playRoundBtn.addEventListener('click', playRound);

    resetGameBtn.addEventListener('click', () => {
        humanScore = 0;
        computerScore = 0; 
        humanChoice = '';
        resetGame();
    });

    const resetWeaponButtons = () => {
        ['rock', 'paper', 'scissors'].forEach(weapon => {
            dom[`${weapon}Btn`].classList.remove('active');
        });
    };

    const resetGame = () => {
        humanScoreDisplay.textContent = '0';
        computerScoreDisplay.textContent = '0';
        playerChoiceDisplay.textContent = '-';
        computerChoiceDisplay.textContent = '-';
        roundResultDisplay.textContent = 'Make your selection!';
        computerIcon.setAttribute('data-feather', 'help-circle');
        feather.replace();
        resetWeaponButtons();
    };
}