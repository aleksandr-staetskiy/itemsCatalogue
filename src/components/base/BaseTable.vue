<template>
    <v-simple-table>
    <template v-slot:default>
      <thead v-if="list.length">
        <tr>
          <th v-for="(value, name) in list[0]" :key="name" class="text-left">
           {{ name }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in list"
          :key="item.name"
        >
          <td>{{ item.name }}</td>
          <td>{{ item.calories }}</td>
          <td>
            <v-text-field
            label="Regular"
          ></v-text-field>
            </td>
          <td>{{ item.test }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script lang="ts">
import { Component, Prop } from 'vue-property-decorator';
import { VSimpleTable } from 'vuetify/lib';

@Component
export default class BaseTable extends VSimpleTable {
  @Prop({ type: Array, default: () => [] }) readonly list?: Array<any>;
}
</script>
