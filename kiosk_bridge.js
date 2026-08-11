/**
 * ============================================================================
 * DIBYARATNA SELFECONOMY FRONT-END INTERFACE BRIDGE
 * Connects kiosk.html Element Events directly to the Backend Ledger Engine
 * Bounded to the System-Frequency Horizons: 01:08 and 10:08 Local Time
 * ============================================================================
 */

class DibyaRatnaInterfaceBridge {
    constructor() {
        this.selectedSector = null;
        this.currentUserNodeId = 1; // Default test manifest human position
        this.initializeKioskEventListeners();
        console.log("[BRIDGE] DibyaRatna Front-End Ledger Bridge initialized.");
    }

    initializeKioskEventListeners() {
        const sectorButtons = document.querySelectorAll('.sector-button');
        const confirmButton = document.querySelector('.btn-submit');

        sectorButtons.forEach((button) => {
            button.addEventListener('click', (event) => {
                sectorButtons.forEach(btn => btn.style.borderColor = 'var(--border-color)');
                
                const targetButton = event.currentTarget;
                targetButton.style.borderColor = 'var(--saffron-gold)';
                
                const fullText = targetButton.querySelector('.sector-title span').textContent;
                this.selectedSector = fullText.split('/')[1]?.trim().toUpperCase() || fullText.trim().toUpperCase();
                
                console.log(`[SELECTION] Target sector isolated: ${this.selectedSector}`);
            });
        });

        if (confirmButton) {
            confirmButton.addEventListener('click', () => {
                this.executePreOrderTransaction();
            });
        }
    }

    async executePreOrderTransaction() {
        if (!this.selectedSector) {
            alert("[REJECTION] Please select one of the 8 essential sectors to log a pre-order.");
            return;
        }

        const simulatedPreOrderCost = 150.00; 
        const expectedMuktiReturn = simulatedPreOrderCost * 0.10;

        this.updateKioskInterfaceDisplay(simulatedPreOrderCost, expectedMuktiReturn);
    }

    updateKioskInterfaceDisplay(cost, returnEquity) {
        alert(`[SUCCESS] Pre-Order logged for ${this.selectedSector}!\nCost: ${cost} GNH Credits\n10% Mukti Equity Deposited: +${returnEquity} Credits.`);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    window.DibyaRatnaBridge = new DibyaRatnaInterfaceBridge();
});
