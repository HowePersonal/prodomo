import { displayTimer } from "../scripts/timer";

export default function loadHome(customTimer) {
    let [homeDiv, timerDiv, timerButtons] = createContainers();

    createButtons(customTimer, timerButtons);
    createTimerText(timerDiv);

    customTimer.init(timerDiv)

    homeDiv.appendChild(timerDiv)
    homeDiv.appendChild(timerButtons)

    return homeDiv
}

function createContainers() {
    let homeDiv = document.createElement('div');
    let timerDiv = document.createElement('div');
    let timerButtons = document.createElement('div');

    homeDiv.id = 'homeDiv';
    timerDiv.id = 'timerDiv';
    timerButtons.id = 'timerButtons';

    return [homeDiv, timerDiv, timerButtons];
}

function createTimerText(timerDiv) {
    let hour = document.createElement('p');
    let min = document.createElement('p');
    let sec = document.createElement('p');

    hour.id = 'timerHour';
    min.id = 'timerMin';
    sec.id = 'timerSec';

    timerDiv.appendChild(hour);
    timerDiv.appendChild(min);
    timerDiv.appendChild(sec);
}

function createButtons(customTimer, timerButtons) {
    let startTimer = document.createElement('button');
    let pauseTimer = document.createElement('button');
    let resetTimer = document.createElement('button');
    startTimer.textContent = 'Start';
    pauseTimer.textContent = 'Pause';
    resetTimer.textContent = 'Reset';

    linkTimers(customTimer, startTimer, pauseTimer, resetTimer);

    timerButtons.appendChild(startTimer)
    timerButtons.appendChild(pauseTimer)
    timerButtons.appendChild(resetTimer)
}

function linkTimers(customTimer, startTimer, pauseTimer, resetTimer) {
    startTimer.addEventListener('click', function() {
        customTimer.countdown();
    })

    pauseTimer.addEventListener('click', function() {
        customTimer.pause();
    })

    resetTimer.addEventListener('click', function() {
        customTimer.reset();
    })
}