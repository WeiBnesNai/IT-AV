let input = document.getElementById("input");

 // Функция добавления элемента в input
 // value - аргумент функции
function appendValue(value) {
    input.value = input.value + value
}
// Функция для рассчёта
function complete(){
    // eval - функция для выполнения JavaScript-кода
    input.value = eval(input.value);
}