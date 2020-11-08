import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import { IProducts } from './models';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [] as IProducts|never[],
  },
  mutations: {
    setProd(state, products: IProducts) {
      state.products = products;
    },
  },
  getters: {
    goods: (state) => {
      if (state.products.Value) {
        return state.products.Value.Goods;
      }
      return [];
    },
  },
  actions: {
    async getProducts({ commit }) {
      try {
        const resp = await axios.get('/data.json');
        commit('setProd', resp.data);
      } catch (e) {
        console.log(e);
      }
    },
  },
});
