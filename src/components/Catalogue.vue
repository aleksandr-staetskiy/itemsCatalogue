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

        <v-list-item-content :class="isCurrencyGrowing ? 'high' : 'low'">
          <span>{{ convert(item.C) | currency }}</span>
        </v-list-item-content>
      </v-list-item>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
</template>

<script lang="ts">
import { IGood } from '@/store/models';
import {
  Vue, Component, Prop, Watch,
} from 'vue-property-decorator';
import names from '@/names.json';

@Component
export default class Catalogue extends Vue {
  @Prop({ type: Object, default: () => [] }) readonly list!: IGood;

  matchesList = names

  currentCourse = 80

  isCurrencyGrowing = false

  @Watch('currentCourse')
  handleCourseChange(oldVal: number, newVal: number) {
    console.log(oldVal);
    if (oldVal < newVal) {
      this.isCurrencyGrowing = true;
    } else {
      this.isCurrencyGrowing = false;
    }
  }

  convert(val): number {
    return val * this.currentCourse;
  }

  randomCourse() {
    setInterval(() => {
      this.currentCourse = Math.floor(Math.random() * 80) + 20;
    }, 5000);
  }

  mounted() {
    this.randomCourse();
  }
}
</script>

<style lang="scss">
  .low {
    border: 1px solid green;
  }

  .high {
    border: 1px solid red;
  }
</style>
