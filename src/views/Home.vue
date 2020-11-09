/* eslint-disable @typescript-eslint/no-explicit-any */
<template>
  <v-container>
    <v-row class="text-center justify-space-between">
      <v-col cols="6">
      <Catalogue v-if="categorized" :list="categorized" />
      </v-col>
      <v-col cols="6">
      <Cart />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import Cart from '@/components/Cart.vue';
import Catalogue from '@/components/Catalogue.vue';
import { mapActions, mapGetters } from 'vuex';
import { IGood } from '@/store/models';

@Component({
  components: {
    Cart,
    Catalogue,
  },
  computed: { ...mapGetters(['goods']) },
  methods: { ...mapActions(['getProducts']) },
})
export default class Home extends Vue {
  goods!: IGood[];

  get categorized() {
    return this.goods.reduce((acc: any, item: any) => {
      if (!acc[item.G]) {
        acc[item.G] = [];
      }

      acc[item.G].push(item);
      return acc;
    }, {});
  }

  created() {
    this.$store.dispatch('getProducts');
  }
}
</script>
