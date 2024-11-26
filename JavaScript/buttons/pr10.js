let b1 = document.getElementById("b1")
let input1 = document.getElementById("input")
let obl1 = document.getElementById("obl1")
let obl2 = document.getElementById("obl2")
let obl3 = document.getElementById("obl3")

b1.addEventListener("click", getText)
function getText() {
    let bb1 = prompt("Укажите номер блока куда добавить текст")
    if (bb1 == 1) {
        obl1.innerText = input1.value
        if (bb1 == 2) {
            obl2.innerText = input1.value
        }
            if (bb1 == 3) {
                obl2.innerText = input1.value
            }
    }
}