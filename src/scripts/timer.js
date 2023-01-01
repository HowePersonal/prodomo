
export default function timer(duration, timerDiv) {
    return {
        totalDuration: duration*60,
        currentDuration: duration*60,


        init(timerDiv) {
            this.timerHour = timerDiv.querySelector('#timerHour');
            this.timerMin = timerDiv.querySelector('#timerMin');
            this.timerSec = timerDiv.querySelector('#timerSec');
            displayTimer(this, this.timerHour, this.timerMin, this.timerSec);
        },

        countdown() {
            let interval = setInterval(() => {
                displayTimer(this, this.timerHour, this.timerMin, this.timerSec);
                if (this.currentDuration == 0) {
                    clearInterval(interval)
                    this.currentDuration = this.totalDuration;
                }
                this.currentDuration -= 1;
            }, 1000)
        }    
    }
}

export function displayTimer(timer, timerHour, timerMin, timerSec) {
    let hour = Math.floor(timer.currentDuration/3600);
    let min = Math.floor((timer.currentDuration - (hour*3600))/60);
    let sec = timer.currentDuration - (hour*3600) - (min*60);

    timerHour.innerText = (hour >= 10) ? hour: '0'+hour;
    timerMin.innerText = (min >= 10) ? min: '0'+min;
    timerSec.innerText = (sec >= 10) ? sec: '0'+sec;
}
