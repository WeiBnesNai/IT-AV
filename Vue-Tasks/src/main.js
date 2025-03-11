import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createRouter, createWebHistory } from "vue-router";
import Index from "./views/Index.vue";
import sec from "./views/sec.vue";
import thr from "./views/thr.vue";

// Переменная со страницами приложения
let routes = [
    {
        // name: 'index',
        path: '/',
        component: Index,
    },

    {
    // name: 'index',
    path: '/second',
    component: sec,
},

    {
// name: 'index',
path: '/third',
    component: thr,
}
];

let router = createRouter({
    history: createWebHistory(),
    routes: routes,
})

createApp(App).use(router).mount('#app')
