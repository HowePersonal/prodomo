
export default function loadTab() {
    let body = document.body;

    let tabDiv = document.createElement('div');
    let timerTab = document.createElement('button');
    let historyTab = document.createElement('button');
    let optionTab = document.createElement('button');

    timerTab.textContent = "Pomodoro Timer";
    historyTab.textContent = "Study History";
    optionTab.textContent = "Options";

    tabDiv.id = 'tabDiv';
    timerTab.classList.add('tabButton');
    historyTab.classList.add('tabButton');
    optionTab.classList.add('tabButton');

    tabDiv.appendChild(timerTab);
    tabDiv.appendChild(historyTab);
    tabDiv.appendChild(optionTab);

    body.appendChild(tabDiv)
}