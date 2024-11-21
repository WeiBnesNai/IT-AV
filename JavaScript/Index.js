// Вывод информации в консоль
console.log("Hello World");

// 1. Переменные-Изменяемая
let name = 'Леонид';
console.log('Имя пользователя:', name);

name = 'Леонардо Ди Каприо';
console.log('Новое имя пользователя:', name)

// Константы-Не изменяемая
const age = 49;
console.log('Возраст пользователя:', age)

// 2. Типы данных

let num = 12; // Целое число
let num2 = 12.11 // Десятичное число
let string = 'Строка' // Строка
let bool = true // Булевый тип (True/False)
let empty = null // Пустота
let undef // Значение не задано
console.log(undef) // Значение не задано

// 3. Преобразование типов данных

// Преобразование строки в число
let strToNum = + '12' // Number(12) - второй вариант
console.log(strToNum+ 12 );

// Преобразование числа в строку
let numToStr = String (12);
console.log(numToStr+12);

// 4. Математические операции
console.log(2+2) // Сложение
console.log(2-2) // Вычитание
console.log(2*2) // Умножение
console.log(2/2) // Деление
console.log(2%2) // Остаток от деления
console.log(10**2) // Взведение в степень

// 5. Взаимодействие с пользователем
alert('Добро пожаловать на сайт'); // Вывод окна с сообщением
let userName = prompt('Как тебя зовут?') // Вывод окна для ввода данных
alert('Вас зовут ' + userName);
// confirm - подтверждение действия
confirm('Ты уверен, что тебя зовут ' + userName + '?')

// 6. Условия
let userAge = prompt('Сколько тебе лет?')

// Получение элемента по id
let pagetitle = document.getElementById('title')
console.log(pagetitle);
alert(userAge)
console.log('Возраст: ' + userName + '-' + userAge)

if (userAge > 12){
    alert('Тебе можно пользоваться этим сайтом')
    // Изменяем текст для элемента на html-странице
    pagetitle.innerText = 'Тебе можно пользоваться этим сайтом!'
}
else {
    alert("Тебе ещё рано пользоваться этим сайтом")
    // Изменяем текст для элемента на html-странице
    pagetitle.innerText = 'Тебе ещё рано пользоваться этим сайтом!'
}



