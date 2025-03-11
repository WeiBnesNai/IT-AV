<script setup>
import {ref} from "vue";

let name = ref('')
let names = ref([])
let city = ref('')
let cities = ref([])



function addname(){
  if (name ===   null ) {
    alert('Введите имя')
  }
  else {
    names.value.push(name.value)
  }}

function addcity(){
  cities.value.push(city.value)
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

    <div class="names">
      <h2>Место для добавления</h2>
      <ul>
        <li
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

  <div class="city">
    <h2>Место для добавления</h2>
    <ul>
      <li
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