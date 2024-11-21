let button1 = document.getElementById('button1')
let body = document.body;
button1.addEventListener('click', changecolor)
function changecolor() {
    body.style.backgroundColor = "red";
}
let button2 = document.getElementById('button2')
button2.addEventListener('click', changecolor2)
function changecolor2() {
    body.style.backgroundColor = "green";
}
let button3 = document.getElementById('button3')
button3.addEventListener('click', changecolor3)
function changecolor3() {
    body.style.backgroundColor = "blue";
}