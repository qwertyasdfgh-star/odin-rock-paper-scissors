export function setupKeyboardNavigation(dom) {
    document.addEventListener('keydown', (e) => {
        switch(e.key.toLowerCase()) {
            case 'r':
                dom.rockBtn.click();
                break;
            case 'p':
                dom.paperBtn.click();
                break;
            case 's':
                dom.scissorsBtn.click();
                break;
            case 'enter':
                if (!dom.playRoundBtn.disabled) {
                    // Trigger the playRound function directly
                    dom.playRoundBtn.click();
                }
                break;
            case 'escape':
                dom.resetGameBtn.click();
                break;
        }
    });
}