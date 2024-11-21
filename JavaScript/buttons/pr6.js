let button = document.getElementById('button')
let input = document.getElementById('input')
let input1 = input.value;
let div = document.getElementById('div')
button.addEventListener('click', getText)

    function getText() {
    div.innerText = input.value
}