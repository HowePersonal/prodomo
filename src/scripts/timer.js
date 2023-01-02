
export default function timer(duration) {
    let totalDuration = duration*60;
    let currentDuration = duration*60;
    let timeout;

    function getTotalDur() {
        return totalDuration;
    }

    function getCurrentDur() {
        return currentDuration;
    }

    function subtractCurrentDur() {
        currentDuration -= 1;
    }

    function init(timerDiv) {
        this.hourText = timerDiv.querySelector('#timerHour');
        this.minText = timerDiv.querySelector('#timerMin');
        this.secText = timerDiv.querySelector('#timerSec');
        displayTimer(this);
    }

    function step() {
        let drift = Date.now() - this.expected;
        if (drift > 1000) {
            console.log("Error")
        }

        this.subtractCurrentDur();
        displayTimer(this);

        if (currentDuration == 0) {
            this.pause();
            displayTimer(this);
        }
        else {
            this.expected += this.interval
            this.timeout = setTimeout(() => this.step(), Math.max(0, this.interval - drift));
        }
    }

    function countdown() {
        this.interval = 1000;
        this.expected = Date.now() + this.interval;
        this.timeout = setTimeout(() => this.step(), this.interval)
    }

    function pause() {
        clearTimeout(this.timeout);
    }

    function reset() {
        clearTimeout(this.timeout);
        currentDuration = totalDuration;
        displayTimer(this)
    }

    return {
        getTotalDur,
        getCurrentDur,
        subtractCurrentDur,
        step,
        init,
        countdown,
        pause,
        reset
    }
}

export function displayTimer(timer) {
    let hour = Math.floor(timer.getCurrentDur()/3600);
    let min = Math.floor((timer.getCurrentDur() - (hour*3600))/60);
    let sec = timer.getCurrentDur() - (hour*3600) - (min*60);

    timer.hourText.innerText = (hour >= 10) ? hour: '0'+hour;
    timer.minText.innerText = (min >= 10) ? min: '0'+min;
    timer.secText.innerText = (sec >= 10) ? sec: '0'+sec;
}
