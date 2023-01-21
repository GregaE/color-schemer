<script>
export default {
  props: {
    colorsArr: Array,
  },
  computed: {
    cssVars() {
      return {
        "--color-1": this.colorsArr[0],
        "--color-2": this.colorsArr[1],
        "--color-3": this.colorsArr[2],
        "--color-4": this.colorsArr[3],
        "--color-5": this.colorsArr[4],
      };
    },
  },
};
</script>

<template>
  <div :style="cssVars" />
</template>

<style lang="scss" scoped>
div {
  width: 15rem;
  height: 15rem;
  border-radius: 50%;
  border: 3px solid var(--text-primary);
  background: conic-gradient(
    var(--color-1) 72deg,
    var(--color-2) 72deg 144deg,
    var(--color-3) 144deg 216deg,
    var(--color-4) 216deg 288deg,
    var(--color-5) 288deg 360deg
  );
}
</style>
