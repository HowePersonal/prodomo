
export default function loadHeader() {
    let body = document.body;

    let headerDiv = document.createElement('div');
    let headerText = document.createElement('h1');

    headerDiv.id = 'headerDiv';

    headerText.innerText = 'Prodomo';

    headerDiv.appendChild(headerText);
    body.appendChild(headerDiv);
}