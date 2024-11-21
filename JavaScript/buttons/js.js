// Функции
// function name() {
//  тело функции
// }

// Пример функции в JavaScript
function sayPrivet() {
    alert("Привет");
}

// Вызов функции
sayPrivet();

// Получить кнопку из html
let button = document.getElementById('button')
console.log(button)
// Вызвать функцию при нажатии на кнопку
button.addEventListener('click', sayPrivet)

// Калькулятор
function sumOfNumbers() {
// Получение первого поля
let input1 = document.getElementById('first')
//Число введённое в первом текстовом поле
let firstnumber = +input1.value;
// Получение второго поля
let input2 = document.getElementById('second')
//Число введённое во втором текстовом поле
let secondnumber = +input2.value;
// Сумма введённых чисел
let sum = firstnumber+secondnumber;

// Получаем span элемент со значением суммы
let span = document.getElementById('sum')
// Подставляем найденную сумму в span
span.innerText = sum;
}


// Получаем кнопку для нахождения суммы
let sumButton = document.getElementById('sum-button')
// Отслеживаем нажатие на кнопку "Найти сумму"
sumButton.addEventListener('click', sumOfNumbers)

// Дополнительно 
let body = document.body;

// Изменения background'а страницы
body.style.backgroundColor = 'pink';

console.log(body)