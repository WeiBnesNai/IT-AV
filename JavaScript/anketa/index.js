let Name = prompt('Введите своё имя')
let NameElement = document.getElementById('Name')
NameElement.innerText = Name

let lastname = prompt('Фамилия')
let lastnameElement = document.getElementById('lastname')
lastnameElement.innerText = lastname

let middlename = prompt('Отчество')
let middlenameElement = document.getElementById('middlename')
middlenameElement.innerText = middlename

let age = prompt('Возраст')
let ageElement = document.getElementById('age')
ageElement.innerText = age

let school = prompt('Школа')
let schoolElement = document.getElementById('school')
schoolElement.innerText = school

let classs = prompt('Класс')
let classsElement = document.getElementById('classs')
classsElement.innerText = classs

let sport = prompt('Любимый вид спорта -')
let sportElement = document.getElementById('sport')
sportElement.innerText = sport

let subject = prompt('Любимый предмет -')
let subjectElement = document.getElementById('subject')
subjectElement.innerText = subject

let color = prompt('Любимый цвет -')
let colorElement = document.getElementById('color')
colorElement.innerText = color

function restart() {
    alert('spacibo');
}
input.addEventListener("button", clear);

