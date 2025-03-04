<script setup>

let props = defineProps({
  selectedCompany: {
    type: Object,
  }
})

// События, которые происходят в копмоненте
let emit = defineEmits(["goBack"]);

// Функция для возвращения назад
function goBack() {
  // Вызываем событие goBack для возвращения назад
  emit('goBack');
}

</script>

<template>
  <div
      v-if="selectedCompany"
      class="company-card"
  >
    <h1 class="card-title company card__title">
      {{selectedCompany.value}}
    </h1>

    <div class="company-card__status"
         :class="{
          'active' : selectedCompany.data.state.status === 'ACTIVE',
          'inactive' : selectedCompany.data.state.status !== 'ACTIVE',
        }"
    >
      {{selectedCompany.data.state.status === 'ACTIVE' ? 'Действющая оранизация' : 'Организация ликвидирована'}}
    </div>

    <div class="company-card__property">
      ОГРН организации: {{selectedCompany.data.ogrn}}
    </div>

    <div class="company-card__property">
      ИНН организации: {{selectedCompany.data.inn}}
    </div>

    <div class="company-card__property">
      КПП организации: {{selectedCompany.data.kpp}}
    </div>

    <div class="company-card__property">
      Дата регестрации: {{ new Date(selectedCompany.data.state.registration_date).toLocaleDateString() }}
    </div>

    <div class="company-card__property">
      Адрес организации {{selectedCompany.data.address.value}}
    </div>

    <div class="company-card__property">
      Руководитель: {{selectedCompany.data.management.name}} ({{selectedCompany.data.management.post.toLocaleLowerCase()}})
    </div>

    <button
        @click="goBack"
        class="company-card__button">

      Вернуться назад
    </button>

  </div>
</template>

<style scoped>

</style>