import loadHeader from './loadScripts/loadHeader.js'
import loadTab from './loadScripts/loadTab.js';
import loadHome from './loadScripts/loadHome.js';
import loadHistory from './loadScripts/loadHistory.js';
import timer from "./scripts/timer.js";

import './styles/page.css';
import './styles/header.css';
import './styles/tab.css';
import './styles/home.css';
import './styles/history.css';

let body = document.body;

let contentDiv = document.createElement('div');
contentDiv.id = 'contentDiv';

body.appendChild(contentDiv);

loadHeader()

let [timerTab, historyTab, optionTab] = loadTab()

let customTimer = timer(0.1);

let homeDiv = loadHome(customTimer);
let historyDiv = loadHistory(timeDiv);

contentDiv.appendChild(homeDiv);

window.onunload = customTimer.saveTime();

timerTab.addEventListener('click', function() {
    replaceContent(homeDiv);
})

historyTab.addEventListener('click', function() {
    customTimer.saveTime();
    replaceContent(historyDiv);
})


function replaceContent(newDiv) {
    contentDiv.innerHTML = '';
    contentDiv.appendChild(newDiv);
}
