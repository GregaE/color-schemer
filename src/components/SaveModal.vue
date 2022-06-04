<script>
import { mapActions, mapState } from "vuex";

export default {
  data: () => ({
    nameInput: "",
  }),
  emits: ["create", "deactivate"],
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
    ...mapActions(["addUserScheme"]),
    saveScheme() {
      event.preventDefault();
      this.addUserScheme({
        schemeName: this.nameInput,
        colorArr: [
          this.textPrimary,
          this.textSecondary,
          this.bgPrimary,
          this.bgSecondary,
          this.tertiary,
        ],
        user_id: "6245d8c249e428cdbaa8d920",
      });
      this.$emit("deactivate");
    },
  },
};
</script>

<template>
  <form @submit="saveScheme">
    <label for="scheme-name">Scheme Name</label>
    <input id="scheme-name" v-model="nameInput" />
    <button type="submit">Save Scheme</button>
  </form>
</template>

<style lang="scss" scoped>
@import "@/assets/styles/components/saveModal.scss";
</style>
