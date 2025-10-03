import { setupEventListeners } from './eventHandlers.js';
import { GameHistory } from './gameHistory.js';
import { setupKeyboardNavigation } from './keyboardNav.js';

document.addEventListener('DOMContentLoaded', () => {
    // Initialize animations
    AOS.init();
    feather.replace();

    // Get DOM elements
    const dom = {
        rockBtn: document.getElementById('rock-btn'),
        paperBtn: document.getElementById('paper-btn'),
        scissorsBtn: document.getElementById('scissors-btn'),
        playRoundBtn: document.getElementById('play-round-btn'),
        resetGameBtn: document.getElementById('reset-game-btn'),
        humanScoreDisplay: document.getElementById('human-score'),
        computerScoreDisplay: document.getElementById('computer-score'),
        playerChoiceDisplay: document.getElementById('player-choice'),
        computerChoiceDisplay: document.getElementById('computer-choice'),
        computerIcon: document.getElementById('computer-icon'),
        roundResultDisplay: document.getElementById('round-result')
    };

    // Initialize modules
    const gameHistory = new GameHistory();

    // Setup event listeners and keyboard navigation
    setupEventListeners(dom, gameHistory);
    setupKeyboardNavigation(dom);
});