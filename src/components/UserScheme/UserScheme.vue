<script>
import { mapActions } from "vuex";

export default {
  props: ["scheme"],
  data: () => ({
    isOpen: false,
  }),
  methods: {
    handleRename(e) {
      if (e instanceof KeyboardEvent && e.code !== "Enter") return;
      if (this.isOpen) {
        if (this.scheme.name !== document.getElementById("rename-input").value)
          this.renameUserScheme({
            schemeId: this.scheme._id,
            user_id: "6245d8c249e428cdbaa8d920",
            newName: document.getElementById("rename-input").value,
          });
      }
      this.isOpen = !this.isOpen;
    },
    ...mapActions(["deleteUserScheme", "renameUserScheme", "setScheme"]),
  },
};
</script>

<template>
  <div>
    <span v-if="!isOpen">{{ scheme.name }}</span>
    <input
      v-else
      :value="`${scheme.name}`"
      @keydown="handleRename($event)"
      id="rename-input"
    />
    {{ scheme.colors }}
    <button @click="setScheme(scheme.colors)">Apply</button>
    <button @click="handleRename($event)">Rename</button>
    <button
      @click="
        deleteUserScheme({
          schemeId: scheme._id,
          user_id: '6245d8c249e428cdbaa8d920',
        })
      "
    >
      Delete
    </button>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/styles/components/schemeList.scss";
</style>
