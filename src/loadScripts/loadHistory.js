import history from '../scripts/history.js';

export default function loadHistory(customTimer) {
    let historyDiv = document.createElement('div');
    historyDiv.id = 'historyDiv';

    let historyButtons = createButtons();
    let graphDiv = document.createElement('div');

    let timeDiv = createTimeBox(customTimer);
    historyDiv.appendChild(timeDiv);

    return historyDiv;

}

function createTimeBox() {
    let timeDiv = document.createElement('div');
    let timeDisplay = document.createElement('p');

    timeDiv.appendChild(timeDisplay);

    return timeDiv;
}

function createButtons() {
    let historyButtons = document.createElement('div');

    let backButton = document.createElement('button');
    let forwardButton = document.createElement('button');

    historyButtons.appendChild(backButton);
    historyButtons.appendChild(forwardButton);

    return historyButtons;
}

