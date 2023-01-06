import { compareAsc, format } from 'date-fns'

export default function history(historyDiv) {
    let today = new Date()
    let todayFormatted = today.getFullYear() + '-' + today.getMonth() + '-' + today.getDate().toString().padStart(2, '0');
    
    let timeDisplay = historyDiv.querySelector('#timeDisplay');

    let dayDisplay = historyDiv.querySelector('#dayDisplay');
    dayDisplay.innerText = 'Today'

    function convertToHours(seconds) {
        return seconds/3600
    }

    function getTodayTime() {
        return convertToHours(localStorage.getItem(todayFormatted)).toFixed(2);
    }

    function updateAllTime() {
        timeDisplay.innerText = getTodayTime() + ' hours';
    }

    return {updateAllTime};

}

function createGraph() {

}