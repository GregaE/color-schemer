<script>
import SaveModal from "./SaveModal.vue";

export default {
  components: {
    SaveModal,
  },
  data: () => ({
    isActive: false,
  }),
};
</script>

<template>
  <header>
    <div>
      <img
        alt="Vue logo"
        class="logo"
        src="@/assets/logo.svg"
        width="125"
        height="125"
      />
      <nav>
        <a href="#home-anchor">Home</a>
        <a href="#customize-anchor">Customize</a>
        <a href="#adv-config-anchor">Advanced</a>
      </nav>
    </div>
    <div>
      <i
        class="fa fa-heart"
        :class="{ active: isActive }"
        @click="isActive = !isActive"
      />
      <button v-on:click="$emit('toggle-export-modal')">Export Scheme</button>
    </div>
    <SaveModal v-if="isActive" @deactivate="isActive = false" />
  </header>
</template>

<style scoped>
@import "@/assets/styles/header.css";
</style>
