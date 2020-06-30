import Vue from 'vue'
import App from './App.vue'

import RuPage from './components/RuPage'
import BelPage from './components/BelPage'
import UkrPage from './components/UkrPage'


import MainPage from './components/MainPage'

import VueRouter from 'vue-router' //Import VueRouter as plugin

//Start using routing
Vue.use(VueRouter)

Vue.config.productionTip = false

//Определяем несколько маршрутов
const routes = [
  { path: '/ru', component: RuPage },
  { path: '/rb', component: BelPage },
  { path: '/ukr', component: UkrPage },
  { path: '/', component: MainPage },

]

// Создаём экземпляр маршрутизатора и передаём маршруты в опции `routes`
const router = new VueRouter({
  routes // сокращённая запись для `routes: routes`
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
