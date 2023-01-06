import loadHeader from './loadScripts/loadHeader.js'
import loadTab from './loadScripts/loadTab.js';
import loadHome from './loadScripts/loadHome.js';
import loadHistory from './loadScripts/loadHistory.js';

import timer from "./scripts/timer.js";
import history from "./scripts/history.js";

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

let customTimer = timer(45);
let homeDiv = loadHome(customTimer);

let historyDiv = loadHistory();
let historyTool = history(historyDiv)

contentDiv.appendChild(homeDiv);

window.onbeforeunload = customTimer.saveTime;

timerTab.addEventListener('click', function() {
    replaceContent(homeDiv);
})

historyTab.addEventListener('click', function() {
    customTimer.saveTime();
    historyTool.updateAllTime();
    replaceContent(historyDiv);
})


function replaceContent(newDiv) {
    contentDiv.innerHTML = '';
    contentDiv.appendChild(newDiv);
}
