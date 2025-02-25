<script setup>
import { ref } from 'vue';

let api_key = 'ba0235c4d6ba3983024e60f0b3143eddf61513a8'

// Создание переменной с помощью ref из фреймворка Vue.js
let search = ref();

// Ункция для получения информации об организациях
async function getCompanies() {
  // Ссылка на сервис с информацией о компаниях
  let url = 'POST http://suggestions.dadata.ru/suggestions/api/4_1/rs/findById/party'
  // Данные, которые необходимо передать сервису
  let response = await axios.get('Название сайта')
  let data = {
    query:'СберБанк'

  }
  let options = {
    headers: {
      'Conent: Tupe': 'application/json',
      'Accept': 'application/json',
      'Authorization': 'Token + api_key'
    }
  }

  // Получение значения переменной
  console.log(search.value);
}



</script>

<template>
 <div class="app">
    <div class="companies-card">
<h1 class="card-title">Поиск организации
</h1>
      <div class="search-form">
        <input
                v-model="search"
               placeholder="Напишите название организации"
               class="search-input">

        <button
           @click="getCompanies"
            class="search-button">
          Найти
        </button>
          </div>
      <div>
<!--         Вывод значения переенной в HTML код-->
        {{search}}

      </div>

          <div class="companies-list">
            <div class="companies-title">
              Найденные организации
        </div>
      </div>
    </div>

 </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
