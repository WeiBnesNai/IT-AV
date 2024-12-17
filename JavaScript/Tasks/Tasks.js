let title = document.getElementById('title');
let description = document.getElementById('description');
let button = document.getElementById('button');
let list = document.getElementById('list');
let number = document.getElementById('number');
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
    title.value =''
    description.value =''

}
button.addEventListener('click', addTask)

