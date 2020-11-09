<template>
  <div>
    <h3 v-if="!cart.length">выберите товар, чтобы добавить его в корзину</h3>
    <BaseTable :list="productsInCart" @delete-product="deleteProduct($event)" />
    <p>
      сумма {{ convert(cartTotal) | currency }}
    </p>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import BaseTable from '@/components/base/BaseTable.vue';
import { mapGetters, mapMutations, mapState } from 'vuex';
import Convert from '@/components/base/Convert.vue';

@Component({
  components: {
    BaseTable,
    Convert,
  },
  computed: { ...mapState(['cart']), ...mapGetters(['productsInCart', 'cartTotal']) },
  methods: { ...mapMutations(['deleteFromCart']) },
})
export default class Cart extends Convert {
  deleteProduct(index: number) {
    this.$store.commit('deleteFromCart', index);
  }
}
</script>
