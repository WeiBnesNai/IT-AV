// letC -------------------------------------------------------------------------------
let whiteButton = document.getElementById("white-button");
let blackButton = document.getElementById("black-button");
let greyButton = document.getElementById("grey-button");
let goldenButton = document.getElementById("golden-button");
let blueButton = document.getElementById("blue-button");
// letS -------------------------------------------------------------------------------
let minus10b = document.getElementById("minus10");
let minus1b = document.getElementById("minus1");
let plus1b = document.getElementById("plus1");
let plus10b = document.getElementById("plus10");
let total = document.getElementById('total')
let count = 0
let changeButton = document.getElementById("change");

let even  = document.getElementById("even");
let three  = document.getElementById("three");
let five = document.getElementById("five");
let seven = document.getElementById("seven");

let historyEven = document.getElementById("history-even");
let historyThree = document.getElementById("history-three");
let historyFive = document.getElementById("history-five");
let historySeven = document.getElementById("history-seven");
let history = document.getElementById('history')

let del = document.getElementById('Del')
// Color -------------------------------------------------------------------------------
function colorWhite() {
    document.body.style.background = 'white'
    document.body.style.color = 'black';
}
whiteButton.addEventListener('click', colorWhite)

function colorBlack() {
    document.body.style.background = 'black'
    document.body.style.color = 'white';
}

blackButton.addEventListener("click", colorBlack )

function colorGrey() {
    document.body.style.background = 'grey'
    document.body.style.color = 'black';
}

greyButton.addEventListener("click", colorGrey )

function colorGolden() {
    document.body.style.background = 'goldenrod'
    document.body.style.color = 'black';
}

goldenButton.addEventListener("click", colorGolden )

function colorBlue() {
    document.body.style.background = 'blue'
    document.body.style.color = 'greenyellow';
}

blueButton.addEventListener("click", colorBlue )

// Sys -------------------------------------------------------------------------------

function checkEven() {
    if (count % 2 === 0) {
        even.innerText = 'Да'
    }
    else {
        even.innerText = 'Нет'
    }
}



function checkThree() {
    if (count % 3 === 0) {
        three.innerText = 'Да'
    }
    else {
        three.innerText = 'Нет'
    }
}
function checkFive() {
    if (count % 5 === 0) {
        five.innerText = 'Да'
    }
    else {
        five.innerText = 'Нет'
    }
}
function checkSeven() {
    if (count % 7 === 0) {
        seven.innerText = 'Да'
    }
    else {
        seven.innerText = 'Нет'
    }
}
function checkHistory() {
    if (count %2 == 0) {
        historyEven.innerText = historyEven.innerText + ' ' + count
    }
    if (count %3 == 0) {
        historyThree.innerText = historyThree.innerText + ' ' + count
    }
    if (count %5 == 0) {
        historyFive.innerText = historyFive.innerText + ' ' + count
    }
    if (count %7 == 0) {
        historySeven.innerText = historySeven.innerText + ' ' + count
    }
    if (count % 2 != 0 && count % 3 !=0 && count % 5 !=0 && count % 7 !=0){
        history.innerHTML = history.innerHTML + ' ' +
            '' + count
    }
}


function minus10F() {
    count = count-10
    total.innerHTML = count
    checkEven()
    checkThree()
    checkFive()
    checkSeven()
    checkHistory()
}

minus10b.addEventListener("click", minus10F )

function minus1F() {
    count = count-1
    total.innerHTML = count
    checkEven()
    checkThree()
    checkFive()
    checkSeven()
    checkHistory()
}

minus1b.addEventListener("click", minus1F )

function plus1F() {
    count = count+1
    total.innerHTML = count
    checkEven()
    checkThree()
    checkFive()
    checkSeven()
    checkHistory()
}

plus1b.addEventListener("click", plus1F )

function plus10F() {
    count = count+10
    total.innerHTML = count
    checkEven()
    checkThree()
    checkFive()
    checkSeven()
    checkHistory()
}

plus10b.addEventListener("click", plus10F )

function changeNumber() {
    count = +prompt('Укажите число')
    total.innerHTML = count
    checkEven()
    checkThree()
    checkFive()
    checkSeven()
    checkHistory()
    if (count %2 == 0) {
        historyEven.innerText = historyEven.innerText + ' ' + count
    }
    if (count %3 == 0) {
        historyThree.innerText = historyThree.innerText + ' ' + count
    }
    if (count %5 == 0) {
        historyFive.innerText = historyFive.innerText + ' ' + count
    }
    if (count %7 == 0) {
        historySeven.innerText = historySeven.innerText + ' ' + count
    }
}
changeButton.addEventListener('click', changeNumber)


// // Del ------------------------------------------------------------------------------- ?
// function Del() {
//     cont = 0
//     total.innerHTML = cont
// }
// del.addEventListener('click', Del)
