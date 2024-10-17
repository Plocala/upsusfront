import Vue from 'vue'
import App from './App.vue'
import router from './router'
<<<<<<< Updated upstream
import '@/services/components.js'
=======
// import Components from '@/services/components.js'
>>>>>>> Stashed changes
import '@/css/styles.css';

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
