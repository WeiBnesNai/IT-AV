let button = document.getElementById('button')
let input = document.getElementById('input')
button.addEventListener('click', ChangetextInInput)
function ChangetextInInput() {
    if (input.value == 'Текст внутри input') {
        input.value = 'Новый текст внутри input'
    }
    else {
        input.value = 'Текст внутри input'
    }

}