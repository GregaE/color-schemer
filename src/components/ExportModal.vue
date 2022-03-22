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
  data() {
    return {
      isActive: true,
    };
  },
};
</script>

<template>
  <div class="export-modal">
    <nav>
      <div :class="{ selected: isActive }">CSS</div>
      <div>SCSS</div>
      <div>SASS</div>
    </nav>
    <pre class="code">
:root {
  --text-primary: ${this.textPrimary};
  --text-secondary: ${this.textSecondary};
  --bg-primary: ${this.bgPrimary};
  --bg-secondary: ${this.bgSecondary};
}
    </pre>
    <button v-on:click="copyStyles">Copy to clipboard</button>
  </div>
</template>

<style scoped>
@import "@/assets/styles/components/exportModal.css";
</style>
