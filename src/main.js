import Vue from 'vue';
import VueAnalytics from 'vue-analytics';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';

Vue.config.productionTip = false;

Vue.use(VueAnalytics, {
  id: 'UA-96996449-1',
  router,
});

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
