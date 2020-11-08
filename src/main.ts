import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import VueCurrencyFilter from 'vue-currency-filter';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false;

Vue.use(VueAxios, axios);
Vue.use(VueCurrencyFilter, {
  symbol: '₽',
  thousandsSeparator: '.',
  fractionCount: 2,
  fractionSeparator: ',',
  symbolPosition: 'back',
  symbolSpacing: true,
  avoidEmptyDecimals: undefined,
});

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
