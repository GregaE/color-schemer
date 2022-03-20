<script>
export default {
  methods: {},
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
        <div to="/">Home</div>
        <div to="/customize">Customize</div>
      </nav>
    </div>
    <div>
      <button v-on:click="$emit('toggle-export-modal')">Export Scheme</button>
    </div>
  </header>
</template>

<style scoped>
@import "@/assets/styles/header.css";
</style>
