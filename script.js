'use strict'

let height = 600;
let numberOfGrids = 16;
let allGrids = numberOfGrids * numberOfGrids;

let gridSize = height / numberOfGrids;

const btnStart = document.querySelector('#reset');
const drawPAd = document.querySelector('#drawpad');

btnStart.addEventListener('click', () => {

    drawPAd.style.height = height + 'px';
    drawPAd.style.width = height + 'px';

    drawPAd.style.gridTemplateColumns = "repeat(" + numberOfGrids + ", 1fr)";
    drawPAd.style.gridAutoRows = gridSize + "px";
    drawPAd.style.gridAutoColumns = gridSize + "px";

    for (let i = 0; i < allGrids; i++) {
        let newDiv = document.createElement('div');
        drawPAd.appendChild(newDiv);
    }
    const div = document.querySelectorAll('#drawpad div');

    for (let i = 0; i < allGrids; i++) {
        div[i].classList.add('box');

        let lastColumn = i + 1;
        let lastRow = allGrids - numberOfGrids - 1;

        if (lastColumn % numberOfGrids == 0) {
            div[i].classList.add('lastColumn');
        }
        if (i > lastRow) {
            div[i].classList.add('lastRow');
        }
    }
});