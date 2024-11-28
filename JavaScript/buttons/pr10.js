let b1 = document.getElementById("b1")
let input1 = document.getElementById("input")
let obl1 = document.getElementById("obl1")
let obl2 = document.getElementById("obl2")
let obl3 = document.getElementById("obl3")
let obl4 = document.getElementById("obl4")
let b4 = document.getElementById("b4")
let d1 = document.getElementById("d1")

b1.addEventListener("click", getText)
function getText() {
    let bb1 = prompt("Укажите номер блока куда добавить текст")
    if (bb1 == 1) {
        obl1.innerText += input1.value
    }
        if (bb1 == 2) {
            obl2.innerText += input1.value
        }
            if (bb1 == 3) {
                obl3.innerText += input1.value
            }

}
b4.addEventListener("click", oText)
function oText() {
    obl4.innerText = obl1.innerText + obl2.innerText + obl3.innerText
}
d1.addEventListener("click", delText)
function delText() {
    input1.value = ''
    obl1.innerText = ''
    obl2.innerText = ''
    obl3.innerText = ''
    obl4.innerText = ''
}
