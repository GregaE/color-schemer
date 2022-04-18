<script>
export default {
  props: ["scheme"],
  emits: ["apply", "rename", "remove"],
};
</script>

<template>
  <div>
    {{ scheme.name }}
    <button @click="$emit('apply', scheme.colors)">Apply</button>
    <button @click="$emit('rename', scheme._id, newName)">Rename</button>
    <button @click="$emit('remove', scheme._id)">Delete</button>
  </div>
</template>

<style scoped>
@import "@/assets/styles/components/schemeList.css";
</style>
