<script setup>
import { ref } from 'vue';
import axios from "axios";
import CompanyCard from "./components/CompanyCard.vue";

let api_key = 'ba0235c4d6ba3983024e60f0b3143eddf61513a8'

// Создание переменной с помощью ref из фреймворка Vue.js
let search = ref();
let companies = ref([])

// Переменная с выбранной компанией
let selectedCompany = ref(null);
// Функция для получения информации об организациях
async function getCompanies() {
  // Ссылка на сервис с информацией о компаниях
  let url = 'https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/party'

  let data = {
    query: search.value

  }
  let options = {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': `Token ` + api_key
    }
  }
  // Данные, которые необходимо передать сервису
  let response = await axios.post(url, data, options)
  // Получение значения переменной
  companies.value = response.data.suggestions;
  console.log(search.value);

console.log(response.data.suggestions)

}

// Функцмя для выбора компании
function selectCompany(company){
selectedCompany.value = company;
console.log(selectedCompany);
}

// Функция для возвращения к форме поиска организаций
function goBack() {
  selectedCompany.value = null
}

// Функция для удаления организации
function deleteCompany(index){
  companies.value.splice(index, 1)
}

</script>

<template>
 <div class="app">
    <div class="companies-card">
      <transition name="mode-fade" mode="out-in">

        <CompanyCard
            @goBack="goBack"
          v-if="selectedCompany"
          :selected-company = "selectedCompany"
          />


        <div v-else>
          <h1 class="card-title">Поиск организации
          </h1>
          <div class="search-form">
            <input
                v-model="search"
                placeholder="Напишите название организации"
                class="search-input"
                @keyup.enter='getCompanies'>

            <button
                @click="getCompanies"
                class="search-button">
              Найти
            </button>
          </div>
          <div>
            <!--         Вывод значения переенной в HTML код-->


          </div>

          <div class="companies-list">
            <div class="companies-title">
              Найденные организации
            </div>

            <div v-if='companies.length > 0'
                 class="companies"
            >

              <div
                  v-for="(company, index) in companies"
                  :class="{
              'active-company': company.data.state.status === 'ACTIVE',
              'inactive-company': company.data.state.status !== 'ACTIVE',
            }"
                  class="company"
                  @click="selectCompany(company)"
              >
                <div class="company-name">
                  {{index + 1}}.  {{ company.value }}
                </div>
                <div class="company-inn">
                  ИНН:{{company.data.inn}}
                </div>
                <div class="company-adress">
                  Адрес:{{company.data.address.value}}
                </div>
                <button
                @click.stop='deleteCompany(index)'>Удалить</button>
              </div>
            </div>

            <div v-else>
              Напишите название организации в текстовое поле и нажмите на кнокпку 'Найти'
            </div>
          </div>
        </div>
    </transition>
    </div>
 </div>
</template>

<style scoped>
.active-company{
  background-color: lightgreen;
}

.inactive-company{
  background-color: lightcoral;
}
</style>
