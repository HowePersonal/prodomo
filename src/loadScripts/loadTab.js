
export default function loadTab() {
    let body = document.body;

    let tabDiv = document.createElement('div');

    let [timerTab, historyTab, optionTab] = createTabs();

    tabDiv.appendChild(timerTab);
    tabDiv.appendChild(historyTab);
    tabDiv.appendChild(optionTab);

    tabDiv.id = 'tabDiv';

    body.appendChild(tabDiv)

    return [timerTab, historyTab, optionTab];
}

function createTabs() {
    let timerTab = document.createElement('button');
    let historyTab = document.createElement('button');
    let optionTab = document.createElement('button');

    timerTab.textContent = "Pomodoro Timer";
    historyTab.textContent = "Study History";
    optionTab.textContent = "Options";

    timerTab.classList.add('tabButton');
    historyTab.classList.add('tabButton');
    optionTab.classList.add('tabButton');

    return [timerTab, historyTab, optionTab];
}

