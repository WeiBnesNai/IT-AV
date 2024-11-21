let button = document.getElementById('button')
let div = document.getElementById('div')
button.addEventListener('click', changetext)
function changetext() {
    let button1 = prompt('введите текст')
    div.innerText = button1

}