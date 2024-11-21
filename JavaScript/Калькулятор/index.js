alert('Добро пожаловать на сайт! Давай посчитаем 2 числа')

let number1 = +prompt('Введи 1-е число')

let number2 = +prompt('Введи 2-е число')
console.log(number1, number2)

let sum = number1 + number2 
//console.log('sum', sum)
let raznost = number1 - number2
//console.log('raznost', raznost)
let proisvedenie = number1 * number2
//console.log('proisvedenie', proisvedenie)
let chastnost = number1 / number2
//console.log('chastnost', chastnost)

let firstElement = document.getElementById('first')
firstElement.innerText = number1

let secondElement = document.getElementById('second')
secondElement.innerText = number2

let sumElement = document.getElementById('summa')
sumElement.innerText = sum

let razElement = document.getElementById('raznost')
razElement.innerText = raznost

let proiElement = document.getElementById('proisvedenie')
proiElement.innerText = proisvedenie

let chessElement = document.getElementById('chastnost')
chessElement.innerText = chastnost
