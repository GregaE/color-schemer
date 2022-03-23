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
    toggleStyles() {
      this.style === "scss";
    },
  },
  props: {
    textPrimary: String,
    textSecondary: String,
    bgPrimary: String,
    bgSecondary: String,
  },
  data() {
    return {
      style: "css",
    };
  },
};
</script>

<template>
  <div class="export-modal">
    <nav>
      <div :class="{ selected: style === 'css' }" @click="style = 'css'">
        CSS
      </div>
      <div :class="{ selected: style === 'scss' }" @click="style = 'scss'">
        SCSS
      </div>
      <div :class="{ selected: style === 'sass' }" @click="style = 'sass'">
        SASS
      </div>
    </nav>
    <pre v-if="style === 'css'" class="code">
:root {
  --text-primary: ${this.textPrimary};
  --text-secondary: ${this.textSecondary};
  --bg-primary: ${this.bgPrimary};
  --bg-secondary: ${this.bgSecondary};
}
    </pre>
    <pre v-if="style === 'scss'" class="code">
$text-primary: ${this.textPrimary};
$text-secondary: ${this.textSecondary};
$bg-primary: ${this.bgPrimary};
$bg-secondary: ${this.bgSecondary};
    </pre>
    <pre v-if="style === 'sass'" class="code">
$text-primary: ${this.textPrimary}
$text-secondary: ${this.textSecondary}
$bg-primary: ${this.bgPrimary}
$bg-secondary: ${this.bgSecondary}
    </pre>
    <button v-on:click="copyStyles">Copy to clipboard</button>
  </div>
</template>

<style scoped>
@import "@/assets/styles/components/exportModal.css";
</style>
