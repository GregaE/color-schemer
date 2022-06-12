<script>
import Button from "@/components/ui/Button/Button.vue";

export default {
  components: {
    Button,
  },
  data: () => ({
    isActive: false,
  }),
  emits: ["toggle-export-modal", "toggle-save-modal"],
};
</script>

<template>
  <header>
    <div>
      <nav>
        <router-link to="/">Home</router-link>
        <router-link to="/customize">Customize</router-link>
        <router-link to="/saved">Saved Schemes</router-link>
      </nav>
    </div>
    <div>
      <i
        class="fa fa-heart"
        :class="{ active: isActive }"
        @click="$emit('toggle-save-modal')"
      />
      <Button @click="$emit('toggle-export-modal')" variant="secondary"
        >Export Scheme</Button
      >
    </div>
  </header>
</template>

<style lang="scss" scoped>
@import "@/assets/styles/header.scss";
</style>
