import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import { ICart, IGood, IProducts } from './models';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [] as unknown as IProducts,
    cart: [] as ICart[],
  },
  mutations: {
    setProd(state, products: IProducts) {
      state.products = products;
    },
    addProductToCart(state, id) {
      state.cart.push({
        id,
        quantity: 1,
      });
    },
    incrementQuantity(state, cartItem) {
      cartItem.quantity += 1;
    },
    decrementQuantity(state, cartItem) {
      cartItem.quantity -= 1;
    },
    deleteFromCart(state, id: number) {
      state.cart.splice(id, 1);
    },
  },
  getters: {
    goods: (state) => {
      if (state.products.Value) {
        return state.products.Value.Goods;
      }
      return [];
    },
    productsInCart: (state) => {
      return state.cart.map((cartItem) => {
        const prod = state.products.Value.Goods.find((product: IGood) => product.T === cartItem.id);
        return {
          id: prod?.T,
          groupId: prod?.G,
          price: prod?.C,
          amount: prod?.P,
          quantity: cartItem.quantity,
        };
      });
    },
    cartTotal: (state, getters) => {
      let total = 0;

      getters.productsInCart.forEach((product: any) => {
        console.log(product);
        total += product.price * product.quantity;
      });

      return total;
    },
  },
  actions: {
    async getProducts({ commit }) {
      try {
        const resp = await axios.get('/data.json');
        commit('setProd', resp.data);
      } catch (e) {
        alert(`не удалось совершить запрос. Ошибка: ${e}`);
      }
    },
    addToCart(context, product) {
      const cartItem = context.state.cart.find((item) => item.id === product.T);
      if (!cartItem) {
        context.commit('addProductToCart', product.T);
      } else {
        context.commit('incrementQuantity', cartItem);
      }
    },
  },
});
