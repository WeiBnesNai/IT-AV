let button = document.getElementById('button')
button.addEventListener('click', changeButton)
function changeButton() {
    if (button.innerText == 'Текст кнопки') {
        button.innerText = 'Новый текст'
}
    else {
        button.innerText = 'Текст кнопки' }

}



