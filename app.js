import { test } from '/index.js';

function ui(divID) {
    let divUI = divID ? document.getElementById(divID) : document.createElement('div');

    divUI.innerHTML = `
    <h1 class="text-3xl font-bold underline">
        Hello World!
    </h1>
    `;
}




ui("app");
test();