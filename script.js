'use strict'

let height = 600;
let numberOfGrids = 16;
let maxGrids = 100;

let allGrids;
let gridSize;

const btnStart = document.querySelector('#reset');
const drawPAd = document.querySelector('#drawpad');

let init = 1;

const promptText = "Wieviele Spalten/Reihen möchtest Du?";


// Click Event beim Button Start
btnStart.addEventListener('click', () => {

    if (init == 1) {
        init = 0;
        gridSettings(numberOfGrids);
    } else {
        while (drawPAd.hasChildNodes()) {
            drawPAd.removeChild(drawPAd.firstChild);
        }
        do {
            numberOfGrids = prompt(promptText, numberOfGrids);
        } while (numberOfGrids > maxGrids);

        gridSettings(numberOfGrids);

    }
});


const gridSettings = (numberOfGrids) => {

    allGrids = numberOfGrids * numberOfGrids;
    gridSize = height / numberOfGrids;

    drawPAd.style.height = height + 'px';
    drawPAd.style.width = height + 'px';

    drawPAd.style.gridTemplateColumns = "repeat(" + numberOfGrids + ", 1fr)";
    drawPAd.style.gridAutoRows = gridSize + "px";
    drawPAd.style.gridAutoColumns = gridSize + "px";

    for (let i = 0; i < allGrids; i++) {
        addnewBox();
    }
    addClasses();
}

// Div erstellen
const addnewBox = () => {
    let newDiv = document.createElement('div');
    drawPAd.appendChild(newDiv);
}

// Klassen zu Divs hinzufügen
const addClasses = () => {

    const div = document.querySelectorAll('#drawpad div');

    div.forEach(element => mouseOverListener(element));     // MouseOverListener() je div setzen

    for (let i = 0; i < allGrids; i++) {

        div[i].classList.add('box');

        let lastColumn = i + 1;
        let lastRow = allGrids - numberOfGrids - 1;

        if (lastColumn % numberOfGrids == 0) {
            div[i].classList.add('lastColumn');     // Klasse letzte Spalte
        }
        if (i > lastRow) {
            div[i].classList.add('lastRow');        // Klasse letzte Reihe
        }
    }
}


// mouseListener pro DIV Selektor setzen
const mouseOverListener = (qSelector) => {

    qSelector.addEventListener('mouseover', () => {
        qSelector.style.backgroundColor = randomRGB();
    });
}

// Zufalls RGB Wert erstellen
const randomRGB = () => {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    let rgb = "rgb(" + r + ", " + g + ", " + b + ")";

    return rgb;
}