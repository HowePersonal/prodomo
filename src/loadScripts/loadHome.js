import { displayTimer } from "../scripts/timer";

export default function loadHome(customTimer) {
    let [homeDiv, timerDiv, timerButtons] = createContainers();
    let timeOptionsDiv = createTimeOptions(customTimer);

    createButtons(customTimer, timerButtons);
    createTimerText(timerDiv);

    customTimer.init(timerDiv);

    homeDiv.appendChild(timeOptionsDiv);
    homeDiv.appendChild(timerDiv);
    homeDiv.appendChild(timerButtons);

    return homeDiv
}

function createTimeOptions(customTimer) {
    let timeOptionsDiv = document.createElement('div');

    timeOptionsDiv.id = 'timeOptionsDiv'

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

    linkChangeTime(customTimer, option15, option25, option45, option60);

    timeOptionsDiv.appendChild(option15);
    timeOptionsDiv.appendChild(option25);
    timeOptionsDiv.appendChild(option45);
    timeOptionsDiv.appendChild(option60);

    return timeOptionsDiv;
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

function linkChangeTime(customTimer, option15, option25, option45, option60) {
    option15.addEventListener('click', function() {
        customTimer.setNewTime(15);
    })

    option25.addEventListener('click', function() {
        customTimer.setNewTime(25);
    })

    option45.addEventListener('click', function() {
        customTimer.setNewTime(45);
    })

    option60.addEventListener('click', function() {
        customTimer.setNewTime(60);
    })
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