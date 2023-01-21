<script>
import SchemeList from "../components/UserScheme/SchemeList.vue";

export default {
  components: {
    SchemeList,
  },
  props: {
    schemeList: Array,
  },
  emits: ["remove", "apply", "rename"],
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
  <main>
    <h1>My Schemes</h1>
    <SchemeList
      :schemeList="schemeList"
      @remove="emitRemove"
      @apply="emitApply"
      @rename="emitRename"
    />
  </main>
</template>

<style lang="scss" scoped></style>
