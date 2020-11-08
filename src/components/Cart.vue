<template>
 <BaseTable :list="list" />
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import BaseTable from '@/components/base/BaseTable.vue';

@Component({
  components: {
    BaseTable,
  },
})
export default class Cart extends Vue {
  list = [{ name: 'ewd', kek: 're' }, { name: 'ewd', kek: 're' }]
}
</script>
