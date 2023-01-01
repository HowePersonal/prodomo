import loadHeader from './loadScripts/loadHeader.js'
import loadTab from './loadScripts/loadTab.js';
import loadHome from './loadScripts/loadHome.js';

import './styles/page.css';
import './styles/header.css';
import './styles/tab.css';
import './styles/home.css'

let body = document.body;

loadHeader()
loadTab()
loadHome()

