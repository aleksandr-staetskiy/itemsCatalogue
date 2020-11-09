<template>
    <v-simple-table>
    <template v-slot:default>
      <thead v-if="list.length">
        <tr>
          <th class="text-left">
           наименование товара
          </th>
          <th class="text-left">
           количество
          </th>
          <th class="text-left">
           цена
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(item, index) in list"
          :key="item.groupId"
        >
          <td>
            {{ matchList[item.groupId].G }}.
            {{ matchList[item.groupId].B[item.id].N }}
          </td>
          <td>{{ item.quantity }}</td>
          <td>{{ convert(item.price) | currency }}</td>
          <td @click="deleteProduct(index)">удалить</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script lang="ts">
import { Component, Prop } from 'vue-property-decorator';
import names from '@/names.json';
import Convert from '@/components/base/Convert.vue';

@Component
export default class BaseTable extends Convert {
  @Prop({ type: Array, default: () => [] }) readonly list?: Array<any>;

  matchList = names

  deleteProduct(i: number) {
    this.$emit('delete-product', i);
  }
}
</script>
