<script setup>
import {ref} from "vue";

let name = ref('')
let names = ref([])
let city = ref('')
let cities = ref([])
let nameInd = ref('')
let cityInd = ref('')



function addname(){
  if (name.value === '' ) {
    alert('Введите имя')
  }
  else {
    if(nameInd.value === '0') {
      alert('Введите количество')
    }
    else{
  if(nameInd.value > '333') {
    alert('Слишком большое количество!')
  }
  else {
    for (let i = 0; i < nameInd.value; i = i + 1) {
      names.value.push(name.value)
    }}
      }
  }
}

function addcity(){
  if(city.value ==='') {
    alert('Введите город')
  }
  else {
    if(cityInd.value === '0') {
      alert('Введите количство')
    }
    else {
      if(cityInd.value > '333') {
        alert('Слишком большое количество!')
      }
      else {

    for (let i = 0; i < cityInd.value; i = i + 1) {
      cities.value.push(city.value)
    }}
    }
  }
}


</script>

<template>
  <div class="container">
    <div class="namee">
      <h1 class="title-name">Имена</h1>

      <input class="input-name"
             v-model="name"
      >
      <button
          @click = 'addname'
          class="button-name"
      >
        Добавить
      </button>
      <h1 class="title-name-ind">Сколько добавить?</h1>

      <input class="input-name-ind"
             v-model="nameInd"
      >



      <div class="names">
        <h2>Место для добавления</h2>
        <ul>
          <li class="nameS"
              v-for="n in names"
          >
            {{ n }}
          </li>
        </ul>
      </div>
  </div>

    <div class="cityy">
      <h1 class="title-city">Города</h1>
      <input
          v-model="city"
          class="input-city">
      <button
          @click = 'addcity'
          class="button-city">Добавить</button>
      <h1 class="title-city-ind">Сколько доабвить?</h1>
      <input
          v-model="cityInd"
          class="input-city">
      <div class="city">


        <h2>Место для добавления</h2>
        <ul>
          <li class="cityS"
              v-for="n in cities"
          >
            {{ n }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
}

.nameS{
  font-style: italic;
  color: green;
}
.cityS{
  font-style: italic;
  font-weight: bold;
}

.namee {
  width: 50%;
  color: lightgreen;
}

.cityy {
  width: 50%;
  color: red;

}

.input-name{
  height: 25px;
  width: 250px;
}
.input-name-ind{
  height: 25px;
  width: 250px;
}

.button-name{

  height: 27px;
  background-color: #1a191f;
  color: white;
}


.input-city{
  height: 25px;
  width: 250px;
}

.button-city{

  height: 27px;
  background-color: #1a191f;
  color: white;
}


</style>