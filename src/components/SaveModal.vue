<script>
import { mapActions, mapState } from "vuex";
import Modal from "@/components/ui/Modal/Modal.vue";
import Button from "@/components/ui/Button/Button.vue";

export default {
  components: {
    Modal,
    Button,
  },
  data: () => ({
    nameInput: "",
  }),
  emits: ["deactivate"],
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
  <Modal>
    <form @submit="saveScheme">
      <label for="scheme-name">Scheme Name</label>
      <input type="text" id="scheme-name" v-model="nameInput" />
      <Button type="submit" variant="primary">Save Scheme</Button>
    </form>
  </Modal>
</template>

<style lang="scss" scoped>
form {
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 2rem;

  input[type="text"] {
    background-color: var(--bg-primary);
    color: var(--text-primary);
  }
}
</style>
