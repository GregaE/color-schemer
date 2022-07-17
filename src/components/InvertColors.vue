<script>
import { mapState, mapActions } from "vuex";
import Button from "@/components/ui/Button/Button.vue";

export default {
  components: {
    Button,
  },
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
    <Button @click="invertText" variant="secondary">Invert Text</Button>
    <Button @click="invertBg" variant="secondary">Invert Background</Button>
  </div>
</template>

<style lang="scss" scoped>
.invert-colors {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4rem;
  padding: 4rem;
}
</style>
