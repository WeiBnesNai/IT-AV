let b1 = document.getElementById("b1")
let inputt1 = document.getElementById("inputt1")
b1.addEventListener('click', changetext1)

let b2 = document.getElementById("b2")
let input2 = document.getElementById("input2")
b2.addEventListener('click', changetext2)

let b3 = document.getElementById("b3")
let input3 = document.getElementById("input3")
b3.addEventListener('click', changetext3)

let del = document.getElementById("del")
del.addEventListener('click', deleteText)

function changetext1() {
    obl3.innerText += inputt1.value
}
function changetext2() {
    obl1.innerText += input2.value
}
function changetext3() {
    obl2.innerText += input3.value
}

function deleteText() {
    obl3.innerText = ''
    inputt1.value = ''
    obl1.innerText = ''
    input2.value = ''
    obl2.innerText = ''
    input3.value = ''
}

