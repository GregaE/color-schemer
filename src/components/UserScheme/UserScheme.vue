<script>
export default {
  props: ["scheme"],
  emits: ["apply", "rename", "remove"],
  data: () => ({
    isOpen: false,
  }),
  methods: {
    emitRename(e) {
      if (e instanceof KeyboardEvent && e.code !== "Enter") return;
      if (this.isOpen) {
        if (this.scheme.name !== document.getElementById("rename-input").value)
          this.$emit(
            "rename",
            this.scheme._id,
            document.getElementById("rename-input").value
          );
      }
      this.isOpen = !this.isOpen;
    },
  },
};
</script>

<template>
  <div>
    <span v-if="!isOpen">{{ scheme.name }}</span>
    <input
      v-else
      :value="`${scheme.name}`"
      @keydown="emitRename($event)"
      id="rename-input"
    />
    <button @click="$emit('apply', scheme.colors)">Apply</button>
    <button @click="emitRename($event)">Rename</button>
    <button @click="$emit('remove', scheme._id)">Delete</button>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/styles/components/schemeList.scss";
</style>
