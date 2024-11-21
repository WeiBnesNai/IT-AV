let button = document.getElementById('button')
let div = document.getElementById('div')
button.addEventListener('click', changetext)
function changetext() {
    if (div.innerText == 'Текст внутри div') {
        div.innerText = 'Новый текст внутри div'
    }
    else {
        div.innerText = 'Текст внутри div'
    }

}