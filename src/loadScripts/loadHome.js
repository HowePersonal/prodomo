import { displayTimer } from "../scripts/timer";
import timer from "../scripts/timer.js";

export default function loadHome() {
    let body = document.body;

    let customTimer = timer(45);
    let homeDiv = document.createElement('div');
    let timerDiv = document.createElement('div');

    let timerButtons = document.createElement('div');
    let startTimer = document.createElement('button');
    let pauseTimer = document.createElement('button');
    let resetTimer = document.createElement('button');

    let hour = document.createElement('p');
    let min = document.createElement('p');
    let sec = document.createElement('p');

    homeDiv.id = 'homeDiv';
    timerDiv.id = 'timerDiv';
    timerButtons.id = 'timerButtons';

    hour.id = 'timerHour';
    min.id = 'timerMin';
    sec.id = 'timerSec';

    startTimer.textContent = 'Start';
    pauseTimer.textContent = 'Pause';
    resetTimer.textContent = 'Reset';

    linkTimers(customTimer, startTimer, pauseTimer, resetTimer);

    timerDiv.appendChild(hour);
    timerDiv.appendChild(min);
    timerDiv.appendChild(sec);

    customTimer.init(timerDiv)

    timerButtons.appendChild(startTimer)
    timerButtons.appendChild(pauseTimer)
    timerButtons.appendChild(resetTimer)

    homeDiv.appendChild(timerDiv)
    homeDiv.appendChild(timerButtons)
    body.appendChild(homeDiv);
}

function linkTimers(customTimer, startTimer, pauseTimer, resetTimer) {
    startTimer.addEventListener('click', function() {
        customTimer.countdown();
    })
}