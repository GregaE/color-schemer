<script>
import SaveModal from "./SaveModal.vue";

export default {
  components: {
    SaveModal,
  },
  data: () => ({
    isActive: false,
  }),
  emits: ["create", "deactivate"],
  methods: {
    emitCreate(name) {
      this.$emit("create", name);
    },
  },
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
      <button v-on:click="$emit('toggle-export-modal')">Export Scheme</button>
    </div>
    <SaveModal
      v-if="isActive"
      @create="emitCreate"
      @deactivate="isActive = false"
    />
  </header>
</template>

<style lang="scss" scoped>
@import "@/assets/styles/header.scss";
</style>
