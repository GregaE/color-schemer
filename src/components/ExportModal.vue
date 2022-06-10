<script>
import { mapState } from "vuex";
import Button from "@/components/ui/Button/Button.vue";

export default {
  components: {
    Button,
  },
  computed: {
    ...mapState({
      textPrimary: (state) => state.colors.textPrimary,
      textSecondary: (state) => state.colors.textSecondary,
      bgPrimary: (state) => state.colors.bgPrimary,
      bgSecondary: (state) => state.colors.bgSecondary,
      tertiary: (state) => state.colors.tertiary,
    }),
  },
  methods: {
    copyStyles() {
      const styleCSS = this.getStyling(
        this.selectedStyle,
        this.textPrimary,
        this.textSecondary,
        this.bgPrimary,
        this.bgSecondary,
        this.tertiary
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
    getStyling(selectedStyle, style1, style2, style3, style4, style5) {
      if (selectedStyle === "css") {
        return `:root {
  --text-primary: ${style1};
  --text-secondary: ${style2};
  --bg-primary: ${style3};
  --bg-secondary: ${style4};
  --tertiary: ${style5};
}`;
      } else if (selectedStyle === "scss") {
        return `$text-primary: ${style1};
$text-secondary: ${style2};
$bg-primary: ${style3};
$bg-secondary: ${style4};
$tertiary: ${style5};`;
      } else {
        return `$text-primary: ${style1}
$text-secondary: ${style2}
$bg-primary: ${style3}
$bg-secondary: ${style4}
$tertiary: ${style5}`;
      }
    },
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
          this.bgSecondary,
          this.tertiary
        )
      }}
    </pre>
    <Button v-on:click="copyStyles" variant="primary">Copy to clipboard</Button>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/styles/components/exportModal.scss";
</style>
