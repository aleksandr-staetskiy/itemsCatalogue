<template>
  <div />
</template>

<script lang="ts">
import {
  Vue, Component, Watch,
} from 'vue-property-decorator';

@Component
export default class Convert extends Vue {
  currentCourse = 80

  isCurrencyGrowing = false

  @Watch('currentCourse')
  handleCourseChange(oldVal: number, newVal: number) {
    if (oldVal < newVal) {
      this.isCurrencyGrowing = true;
    } else {
      this.isCurrencyGrowing = false;
    }
  }

  convert(val: number): number {
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
