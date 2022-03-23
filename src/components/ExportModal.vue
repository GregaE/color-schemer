<script>
export default {
  methods: {
    copyStyles() {
      const styleCSS = this.getStyling(
        this.selectedStyle,
        this.textPrimary,
        this.textSecondary,
        this.bgPrimary,
        this.bgSecondary
      );
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
      this.selectedStyle === "scss";
    },
    getStyling(selectedStyle, style1, style2, style3, style4) {
      if (selectedStyle === "css") {
        return `:root {
  --text-primary: ${style1};
  --text-secondary: ${style2};
  --bg-primary: ${style3};
  --bg-secondary: ${style4};
}`;
      } else if (selectedStyle === "scss") {
        return `$text-primary: ${style1};
$text-secondary: ${style2};
$bg-primary: ${style3};
$bg-secondary: ${style4};`;
      } else {
        return `$text-primary: ${style1}
$text-secondary: ${style2}
$bg-primary: ${style3}
$bg-secondary: ${style4}`;
      }
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
      selectedStyle: "css",
    };
  },
};
</script>

<template>
  <div class="export-modal">
    <nav>
      <div
        :class="{ selected: selectedStyle === 'css' }"
        @click="selectedStyle = 'css'"
      >
        CSS
      </div>
      <div
        :class="{ selected: selectedStyle === 'scss' }"
        @click="selectedStyle = 'scss'"
      >
        SCSS
      </div>
      <div
        :class="{ selected: selectedStyle === 'sass' }"
        @click="selectedStyle = 'sass'"
      >
        SASS
      </div>
    </nav>
    <pre class="code"
      >{{
        this.getStyling(
          this.selectedStyle,
          this.textPrimary,
          this.textSecondary,
          this.bgPrimary,
          this.bgSecondary
        )
      }}
    </pre>
    <button v-on:click="copyStyles">Copy to clipboard</button>
  </div>
</template>

<style scoped>
@import "@/assets/styles/components/exportModal.css";
</style>
