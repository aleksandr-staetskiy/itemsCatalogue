<template>
   <v-expansion-panels
      v-model="panel"
      multiple
    >
      <v-expansion-panel
        v-for="(elem, name) in list"
        :key="name"
      >

        <v-expansion-panel-header>{{ matchesList[name].G }}</v-expansion-panel-header>
        <v-expansion-panel-content>
      <v-list-item
        v-for="item in elem"
        :key="item.B"
        @click="test(ietem)"
      >
        <v-list-item-content>
          <v-list-item-title v-text="matchesList[name].B[item.T].N "></v-list-item-title>
        </v-list-item-content>

        <v-list-item-avatar>
          <span>{{ item.C }}</span>
        </v-list-item-avatar>
      </v-list-item>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
</template>

<script lang="ts">
import { IGood } from '@/store/models';
import { Vue, Component, Prop } from 'vue-property-decorator';
import names from '@/names.json';

@Component
export default class Catalogue extends Vue {
  @Prop({ type: Object, default: () => [] }) readonly list!: IGood;

  matchesList = names

  test(itemm) {
    console.log(itemm);
  }

  mounted() {
    console.log(names);
  }
}
</script>
