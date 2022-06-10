<script>
import Button from "@/components/ui/Button/Button.vue";
import SaveModal from "./SaveModal.vue";

export default {
  components: {
    Button,
    SaveModal,
  },
  data: () => ({
    isActive: false,
  }),
  emits: ["toggle-export-modal"],
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
        @click="isActive = !isActive"
      />
      <Button @click="$emit('toggle-export-modal')" variant="secondary"
        >Export Scheme</Button
      >
    </div>
    <!-- <Teleport to="body"> -->
    <SaveModal v-if="isActive" />
    <!-- </Teleport> -->
  </header>
</template>

<style lang="scss" scoped>
@import "@/assets/styles/header.scss";
</style>
