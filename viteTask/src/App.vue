<template>
  <div class="container">
    <div class="task">
      <!-- title -->
      <div class="title">
        <h1>Список задач</h1>
      </div>
      <!-- form -->
      <div class="form">
        <input
            v-model='Task'
            class="taskItems"
            type="text"
            placeholder="Новая задача"
        />
        <button
        @click = 'addTask'
        >+</button>
      </div>
      <!-- task lists -->
      <div class="taskItems">
        <ul>
          <li v-for="(Task, index) in Tasks" :class="{
          'toggle i': Task.completed === true,
          'toggle-completed': Task.completed === true
}"
          >
            <button
            @click = 'taskTrue(Task)'
            >
              {{Task.name}}
            </button>
            <button
                class="delete-button"
            @click = 'delTask(index)'
            >X</button>
          </li>
        </ul>
      </div>
      <!-- buttons -->
      <div class="clearBtns">
        <button
        @click = 'delete_ConfirmTasks'
        >Удалить выполненные</button>
        <button
        @click = 'delAllTasks'
        >Удалить все</button>
      </div>
      <!-- pending task -->
      <div class="pendingTasks">
        <span>Ожидают выполнения:</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import {onActivated, ref} from "vue";
console.log('H')

let Task = ref()
let Tasks = ref([])

function addTask() {
  console.log('H')
  Tasks.value.push({
    name: Task.value,
    completed: false,
  })

}

function delTask(index) {

let I = confirm('Вы верены что хотите удалить задачу?')
  if ( I === true){
    Tasks.value.splice(index, 1)
  }
  else {

  }
}

function delAllTasks(){

  let i = confirm('Вы точно хотите удалить все задачи?')
  if ( i === true) {
    let ii = confirm('Точно?')
    if ( ii === true){
      Tasks.value.splice(0)
    }
  }
}

function taskTrue(task) {
  task.completed = !task.completed
}
function delete_ConfirmTasks() {
  Tasks.value.splice( 0)
}

</script>