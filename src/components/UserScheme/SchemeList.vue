<script>
import UserScheme from "./UserScheme.vue";

export default {
  components: {
    UserScheme,
  },
  props: {
    schemeList: Array,
  },
  emits: ["apply", "rename", "remove"],
  methods: {
    emitRemove(id) {
      this.$emit("remove", id);
    },
    emitApply(colors) {
      this.$emit("apply", colors);
    },
    emitRename(id, newName) {
      this.$emit("rename", id, newName);
    },
  },
};
</script>

<template>
  <div>
    <h1>My Schemes</h1>
    <UserScheme
      v-for="scheme in schemeList"
      :key="scheme.id"
      :scheme="scheme"
      @remove="emitRemove"
      @apply="emitApply"
      @rename="emitRename"
    />
  </div>
</template>

<style scoped>
@import "@/assets/styles/components/schemeList.css";
</style>
