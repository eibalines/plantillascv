import Vue from 'vue'
import App from './App.vue';
import Formulario from './components/Formulario.vue';
import Plantilla from './components/Plantilla.vue';


import VueRouter from "vue-router";

Vue.config.productionTip = false
Vue.use(VueRouter);


const routes = [
  {
    path: "/",
    component: Formulario,
  },
  {path: "/plantilla", component: Plantilla},
 
]

const router = new VueRouter({
    routes,
    mode: "history",
  });
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
