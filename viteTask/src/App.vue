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
          <li v-for="Task in Tasks">
            <button>
              {{Task}}
            </button>
            <button
            @click = 'delTask'
            >X</button>
          </li>
        </ul>
      </div>
      <!-- buttons -->
      <div class="clearBtns">
        <button>Удалить выполненные</button>
        <button>Удалить все</button>
      </div>
      <!-- pending task -->
      <div class="pendingTasks">
        <span>Ожидают выполнения:</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref} from "vue";
console.log('H')

let Task = ref()
let Tasks = ref([])

function addTask() {
  console.log('H')
  Tasks.value.push(Task.value)

}

function delTask() {
 prompt('Вы верены что хотите удалить задачу?')

  if (prompt() === true){
    Tasks.value.splice(Task.value)
  }
  else {

  }
}
function taskTrue() {

}


</script>
