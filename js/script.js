const buttonEasy = document.querySelector('.easy');
const buttonMedium = document.querySelector('.medium');
const buttonHard = document.querySelector('.hard');
let container = document.querySelector('.campominato-container');
let numPointsUser = 0;
let numBoxs = 0;
let arrayNR = [];
let arrayBox = [];

function RandomNumber(min, max) {
    const result = Math.floor(Math.random() * ((max + 1) - min)) + min;
    return result;
}



function generateBombs(numDifficult) {
    while (arrayNR.length < 16) {
        let numGenerate = RandomNumber(1, numDifficult);
        if (!arrayNR.includes(numGenerate)) {
            arrayNR.push(numGenerate);
        }
    }
}


function finalGame(numPoints) {
    if (numPoints == 43) {
        alert(`Hai vinto con ${numPoints} punti`);

    } else {
        let arrayBombs = document.querySelectorAll('.box');
        for (let i = 0; i < arrayNR.length; i++) {
            arrayBombs[arrayNR[i] - 1].classList.add('red');
            arrayBombs[arrayNR[i] - 1].innerHTML = arrayNR[i];
        }
       container.style.pointerEvents = 'none';
       alert(`Hai perso con ${numPoints} punti`);
    }
}



function changeColor(boxDiv, number) {
    boxDiv.addEventListener('click', function () {
        if (arrayNR.includes(number)) {
            this.classList.add('red');
            finalGame(numPointsUser);
        } else {
            this.classList.add('blue');
            numPointsUser++;
        }
        this.innerHTML = number;
    })
}



function creaBox(containerGame, difficultGame, number) {
    const boxElemento = document.createElement('div');
    boxElemento.classList.add('box');
    if (difficultGame === 'easy') {
        containerGame.style.width = '500px'
    } else if (difficultGame === 'medium') {
        containerGame.style.width = '450px';
    } else {
        containerGame.style.width = '350px';
    }
    containerGame.append(boxElemento);
    changeColor(boxElemento, number);
    arrayBox[numBoxs] = numBoxs;
    numBoxs++;
}





buttonEasy.addEventListener('click', function () {
     numPointsUser = 0;
     numBoxs = 0;
     arrayNR = [];
     arrayBox = [];
     container.style.pointerEvents = 'all';
    container.innerHTML = "";
    let bombsBoom = generateBombs(100);
    for (let i = 1; i <= 100; i++) {
        creaBox(container, 'easy', i);
    }
})

buttonMedium.addEventListener('click', function () {
    numPointsUser = 0;
    numBoxs = 0;
    arrayNR = [];
    container.style.pointerEvents = 'all';
    arrayBox = [];
    container.innerHTML = "";
    let bombsBoom = generateBombs(81);
    for (let i = 1; i <= 81; i++) {
        creaBox(container, 'medium', i);

    }
})

buttonHard.addEventListener('click', function () {
    numPointsUser = 0;
    numBoxs = 0;
    arrayNR = [];
    arrayBox = [];
    container.style.pointerEvents = 'all';
    container.innerHTML = "";
    let bombsBoom = generateBombs(49);
    for (let i = 1; i <= 49; i++) {
        creaBox(container, 'hard', i);
    }
})







