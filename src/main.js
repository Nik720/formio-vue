import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)

import 'bootstrap/dist/css/bootstrap.css'
import 'formiojs/dist/formio.full.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
