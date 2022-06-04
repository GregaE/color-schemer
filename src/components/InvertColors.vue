<script>
import { mapState, mapActions } from "vuex";

export default {
  computed: {
    ...mapState({
      textPrimary: (state) => state.colors.textPrimary,
      textSecondary: (state) => state.colors.textSecondary,
      bgPrimary: (state) => state.colors.bgPrimary,
      bgSecondary: (state) => state.colors.bgSecondary,
      tertiary: (state) => state.colors.tertiary,
    }),
  },
  methods: {
    ...mapActions(["setScheme"]),
    invertText() {
      this.setScheme([
        this.textSecondary,
        this.textPrimary,
        this.bgPrimary,
        this.bgSecondary,
        this.tertiary,
      ]);
    },
    invertBg() {
      this.setScheme([
        this.textPrimary,
        this.textSecondary,
        this.bgSecondary,
        this.bgPrimary,
        this.tertiary,
      ]);
    },
  },
};
</script>

<template>
  <div class="invert-colors">
    <button @click="invertText">Invert Text</button>
    <button @click="invertBg">Invert Background</button>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/styles/components/invertColors.scss";
</style>
