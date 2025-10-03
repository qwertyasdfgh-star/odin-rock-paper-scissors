export class GameHistory {
    constructor() {
        this.history = [];
        this.maxHistory = 5;
    }

    addRound(playerChoice, computerChoice, result) {
        this.history.unshift({
            playerChoice,
            computerChoice,
            result,
            timestamp: new Date()
        });

        if (this.history.length > this.maxHistory) {
            this.history.pop();
        }

        this.updateUI();
    }

    updateUI() {
        const historyContainer = document.getElementById('history-list');
        historyContainer.innerHTML = this.history
            .map(({ playerChoice, computerChoice, result }) => {
                return `
                    <div class="glass-effect p-3 rounded-lg flex justify-between items-center">
                        <span class="text-white">${playerChoice} vs ${computerChoice}</span>
                        <span class="${this.getResultClass(result)}">
                            ${result}
                        </span>
                    </div>
                `;
            })
            .join('');
    }

    getResultClass(result) {
        if (result.includes('win')) return 'text-green-400';
        if (result.includes('lose')) return 'text-red-600';
        return 'text-gray-400';
    }
}