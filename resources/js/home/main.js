import Vue from "vue";
import App from "./App.vue";
// import router from "./router";

new Vue({
  // router,
  render: (h) => h(App),
}).$mount("#app");
/*
import Vue from 'vue'
import VueCompositionAPI, { createApp } from '@vue/composition-api'
import App from './App.vue'

Vue.config.productionTip = false

Vue.use(VueCompositionAPI)

const app = createApp({
  render: (h) => h(App),
})

app.mount('#app')

window.Vue = Vue;
*/
