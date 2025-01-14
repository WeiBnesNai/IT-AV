let title = document.getElementById('title');
let description = document.getElementById('description');
let button = document.getElementById('button');
let list = document.getElementById('list');
let number = document.getElementById('number');
let searchInput = document.getElementById('search');
let searchButton = document.getElementById('search-button');
let resetButton = document.getElementById('reset-button')
let tasksListHtml = '';
number = 0
function addTask() {

    // создание нового элемента с помощью createElement
    let task = document.createElement("div")
    let taskTitle= document.createElement('div')
    let taskDescription= document.createElement('div')
    let deleteButton = document.createElement('button')

    function deleteTask() {
    task.remove()
        taskTitle.remove()
        taskDescription.remove()
        number = number-1
    }
    deleteButton.addEventListener('click', deleteTask)

    number = number+1
    // Добавляем HTML внутрь элементов
    task.innerHTML = `<b>Номер задачи №${number} </b>`;
    taskTitle.innerHTML = `<b>Название: </b> ${ title.value }`;
    taskDescription.innerHTML = `<b>Описание: </b> ${ description.value }`;
    deleteButton.innerHTML = 'Удалить';

    // Добавляем CSS-классы на элементы
    task.classList.add('task')
    taskTitle.classList.add('task-title')
    taskDescription.classList.add('task-description')

    // Добавляем название и описание задачи внутрь div-элемента
    task.append(taskTitle, taskDescription, deleteButton);

    // Добавление нового элемента в конец элемента
    list.append(task);

    tasksListHtml = list.innerHTML;

    // Очищаем поля формы
    title.value =''
    description.value =''
}
button.addEventListener('click', addTask)

function searchTask() {
    let tasks = document.getElementsByClassName('task')

    for (let task of tasks) {
        let titles = task.getElementsByClassName('task-title')
        let title = titles[0];

        if (title.innerText.includes(searchInput.value) == false) {
            task.remove()
        }
    }
}

searchButton.addEventListener('click', searchTask)

function resetTasks() {
    list.innerHTML = tasksListHtml
}

resetButton.addEventListener('click', resetTasks)