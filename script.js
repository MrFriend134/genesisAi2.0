/**
 * AI GENESIS - UI CONTROLLER v2.0
 * Purpose: Handle page interactions and FastBots integration
 */

// Function to open the chat widget manually (if supported by FastBots)
function openGenesis() {
    console.log("Initializing AI Genesis Communication...");
    
    // Most FastBots widgets open automatically via a floating button,
    // but we can trigger a greeting message if you use their API.
    alert("Click on the chat bubble in the bottom corner to talk to Genesis.");
}

// Analytics and Performance tracking (Standard 2026 practice)
window.addEventListener('load', () => {
    console.info("AI Genesis Interface: Deployment Successful.");
    initializeSystemCheck();
});

function initializeSystemCheck() {
    // Check if the FastBots script has loaded correctly
    setTimeout(() => {
        const isBotActive = document.querySelector('iframe') || document.querySelector('#fastbots-chat');
        if (isBotActive) {
            console.log("Status: AI Engine is Linked.");
        } else {
            console.warn("Status: AI Engine not found. Please check your embed code.");
        }
    }, 3000);
}