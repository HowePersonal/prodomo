import loadHeader from './loadScripts/loadHeader.js'
import loadTab from './loadScripts/loadTab.js';
import loadHome from './loadScripts/loadHome.js';

import './styles/page.css';
import './styles/header.css';
import './styles/tab.css';
import './styles/home.css'

let body = document.body;

let contentDiv = document.createElement('div');
contentDiv.id = 'contentDiv';

body.appendChild(contentDiv);

loadHeader()

let [timerTab, historyTab, optionTab] = loadTab()

let homeDiv = loadHome();

timerTab.addEventListener('click', function() {
    document.getElementById('contentDiv').appendChild(homeDiv);
})

