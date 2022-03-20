<script>
export default {
  methods: {
    copyStyles() {
      const styleCSS = `:root {
        --text-primary: ${this.textPrimary};
        --text-secondary: ${this.textSecondary};
        --bg-primary: ${this.bgPrimary};
        --bg-secondary: ${this.bgSecondary};
}`;
      function listener(e) {
        e.clipboardData.setData("text/html", styleCSS);
        e.clipboardData.setData("text/plain", styleCSS);
        e.preventDefault();
      }
      console.log(this.textPrimary);
      document.addEventListener("copy", listener);
      document.execCommand("copy");
      document.removeEventListener("copy", listener);
    },
    toggleStyles() {},
  },
  props: {
    textPrimary: String,
    textSecondary: String,
    bgPrimary: String,
    bgSecondary: String,
  },
};
</script>

<template>
  <div class="export-modal">
    <nav>
      <div>CSS</div>
      <div>SCSS</div>
      <div>SASS</div>
      <button v-on:click="copyStyles">Copy</button>
    </nav>
    <div>Content</div>
  </div>
</template>

<style scoped>
@import "@/assets/styles/components/exportModal.css";
</style>
