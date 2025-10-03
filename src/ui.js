export function updateComputerIcon(choice, computerIcon) {
    feather.replace();
    const iconMap = {
        rock: 'square',
        paper: 'file',
        scissors: 'scissors',
        default: 'help-circle'
    };
    
    computerIcon.setAttribute('data-feather', iconMap[choice] || iconMap.default);
    feather.replace();
}

export function updateScoreDisplay(type, scoreDisplay) {
    scoreDisplay.parentElement.classList.add('pulse-animation', 'updated');
    setTimeout(() => {
        scoreDisplay.parentElement.classList.remove('pulse-animation', 'updated');
    }, 1000);
}

export function showModal(type) {
    const modal = document.getElementById(`${type}-modal`);
    modal.classList.remove('hidden');
    if (type === 'victory') createConfetti();
}