let TXT = document.getElementById('H1')
let body = document.body

let C1 = document.getElementById("c1");
C1.addEventListener("click", changecolorC1)
function changecolorC1() {
    body.style.backgroundColor = 'white';
    TXT.style.color = "black";
}
let BC2 = document.getElementById("c2");
BC2.addEventListener("click", changecolorC2)
function changecolorC2() {
    body.style.backgroundColor = 'black';
    TXT.style.color = "white";
}
let BC3 = document.getElementById('c3')
BC3.addEventListener('click', changecolor3)
function changecolor3() {
    body.style.backgroundColor = "grey";
    TXT.style.color = "black";
}
let Bc4 = document.getElementById('c4')
Bc4.addEventListener('click', changecolor4)
function changecolor4() {
    body.style.backgroundColor = "goldenrod";
    TXT.style.color = "black";
}
let Bc5 = document.getElementById('c5')
Bc5.addEventListener('click', changecolor5)
function changecolor5() {
    body.style.backgroundColor = "darkblue";
    TXT.style.color = "greenyellow";
}
let number = 0
let Sysm10 = document.getElementById('Sysm10')
function minus10() {
    number = number-10
    TXT.innerHTML = `<span>Текущее число ${ number }</span>`;
}
Sysm10.addEventListener('click', minus10)

let Sysm1 = document.getElementById('Sysm1')
function minus1() {
    number = number-1
    TXT.innerHTML = `<span>Текущее число ${ number }</span>`;
}
Sysm1.addEventListener('click', minus1)

let Sys1 = document.getElementById('Sys1')
function plus1() {
    number = number+1
    TXT.innerHTML = `<span>Текущее число ${ number }</span>`;
}
Sys1.addEventListener('click', plus1)

let Sys10 = document.getElementById('Sys10')
function plus10() {
    number = number+10
    TXT.innerHTML = `<span>Текущее число ${ number }</span>`;
}
Sys10.addEventListener('click', plus10)