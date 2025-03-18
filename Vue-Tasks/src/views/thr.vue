<script setup>

import {ref} from "vue";

let N = ref([])
let Nn = ref([])
let Nx2 = ref([])
let Nx3 = ref([])
let Nx4 = ref([])
let Nx22 = ref([])
let Nx23 = ref([])
let red1 = ref([])

function fiveZero() {
for (let i=0;i<6; i=i+1) {
  N.value.push(i)
}
  console.log(N.value)
}
function fiveone() {
  for (let ii=1;ii<6; ii=ii+1) {
    Nn.value.push(ii)
  }
  console.log(Nn.value)
}
function tenzero() {
  for (let ix2=0;ix2<11; ix2=ix2+1) {
    Nx2.value.push(ix2)
  }
  console.log(Nx2.value)
}
function tenzeroo() {
  for (let ix3=0;ix3<11; ix3=ix3+1) {
    Nx3.value.push(ix3)
  }
  console.log(Nx3.value)
}
function tenone() {
  for (let ix4=1;ix4<11; ix4=ix4+1) {
    Nx4.value.push(ix4)
  }
  console.log(Nx4.value)
}
function tenzerosecond() {
  for (let ix22=0;ix22<11; ix22=ix22+2) {
    Nx22.value.push(ix22)
  }
  console.log(Nx22.value)
}
function tenonesecond() {
  for (let ix23=1;ix23<11; ix23=ix23+2) {
    Nx23.value.push(ix23)
  }
  console.log(Nx23.value)
}
function twelwered() {
  red1.value = []
  for (let redi=1;redi<21;redi=redi+1){
    red1.value.push(redi)

  }
}


</script>

<template>
<div class="container">

<div class="five-zerod">
<button
    @click = 'fiveZero'
    class="five-zero" >Создать 5 цифр (начиная с 0)
</button>
  <span v-for="i in N" style="margin-right: 4px">{{ i }}</span>
</div>

  <div class="five-onde">
    <button
        @click = 'fiveone'
        class="five-one">Создать 5 цифр (начиная с 1)
    </button>
    <span v-for="ii in Nn" style="margin-right: 4px">{{ ii }}</span>
  </div>

  <div class="ten-zerod">
    <button
        @click = 'tenzeroo'
        class="ten-zero">Создать 10 цифр (начиная с 0)
    </button>
    <span v-for="ix3 in Nx3" style="margin-right: 4px">{{ ix3 }}</span>
  </div>

  <div class="ten-oned">
    <button
        @click = 'tenone'
        class="ten-one">Создать 10 цифр (начиная с 1)
    </button>
    <span v-for="ix4 in Nx4" style="margin-right: 4px">{{ ix4 }}</span>
  </div>

  <div class="ten-zero-secondd">
    <button
        @click = 'tenzerosecond'
        class="ten-zero-second">Создать 10 цифр (начиная с 0 с шагом 2)
      </button>
    <span v-for="ix22 in Nx22" style="margin-right: 4px">{{ ix22 }}</span>
  </div>

  <div class="ten-one-secondd">
    <button
        @click = 'tenonesecond'
        class="ten-one-second">Создать 10 цифр (начиная с 1 с шагом 2)
     </button>
    <span v-for="ix23 in Nx23" style="margin-right: 4px">{{ ix23 }}</span>
  </div>

<!--  v-for="(company, index) in companies"-->
<!--  :class="{-->
<!--  'active-company': company.data.state.status === 'ACTIVE',-->
<!--  'inactive-company': company.data.state.status !== 'ACTIVE',-->
  <div class="twelve-one-twoRedd"
  >
    <button
        @click = 'twelwered'
        class="twelve-one-twoRed">Создать 20 цифр (начиная с 1, каждая чётная - красная)
      </button>
    <span
        v-for="redi in red1" :class="{
          'Red': redi%2 === 0,
          'white': redi
        }">{{ redi }}
    </span>
  </div>

  </div>
</template>

<style scoped>

.white{
  margin-right: 4px;
}
.Red{
  color: red;
  margin-right: 4px;
}

.container{
}

.five-zero{
  height: 36px;
  font-size: 18px;
}
.five-one{

  height: 36px;
  font-size: 18px;
}
.ten-zero{

  height: 36px;
  font-size: 18px;
}
.ten-one{

  height: 36px;
  font-size: 18px;
}
.ten-zero-second{

  height: 36px;
  font-size: 18px;
}
.ten-one-second{

  height: 36px;
  font-size: 18px;
}
.twelve-one-twoRed{
  height: 36px;
  font-size: 18px;
}
</style>