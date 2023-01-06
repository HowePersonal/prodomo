
export default function loadHistory() {
    let historyDiv = document.createElement('div');
    historyDiv.id = 'historyDiv';

    
    let historyButtons = createButtons();
    let graphDiv = document.createElement('div');

    let timeDiv = createTimeBox();
    historyDiv.appendChild(timeDiv);

    return historyDiv;

}

function createTimeOptions() {
    let timeOptionsDiv = document.createElement('div');

    let option15 = document.createElement('button');
    let option25 = document.createElement('button');
    let option45 = document.createElement('button');
    let option60 = document.createElement('button');

    option15.innerText = '15';
    option25.innerText = '25';
    option45.innerText = '45';
    option60.innerText = '60';

    option15.value = '15';
    option25.value = '25';
    option45.value = '45';
    option60.value = '60';

    timeOptionsDiv.appendChild(option15);
    timeOptionsDiv.appendChild(option25);
    timeOptionsDiv.appendChild(option45);
    timeOptionsDiv.appendChild(option60);

    return timeOptionsDiv;
}

function createTimeBox() {
    let timeDiv = document.createElement('div');
    let dayDisplay = document.createElement('p');
    let timeDisplay = document.createElement('p');

    timeDiv.id = 'timeDiv'

    dayDisplay.id = 'dayDisplay';
    timeDisplay.id = 'timeDisplay';


    timeDiv.appendChild(dayDisplay);
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

