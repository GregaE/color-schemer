<script>
import { mapState } from "vuex";
import Modal from "@/components/ui/Modal/Modal.vue";
import Button from "@/components/ui/Button/Button.vue";

export default {
  components: {
    Modal,
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
  <Modal>
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
  </Modal>
</template>

<style lang="scss" scoped>
nav {
  display: flex;
  width: 100%;
  border-bottom: 1px solid var(--text-secondary);
}

nav div {
  padding: 1.5rem 2rem;
  margin: -0.17rem;
  cursor: pointer;
}

.selected {
  border-bottom: 2.5px solid var(--text-primary);
  font-weight: 700;
}

.code {
  background-color: var(--bg-primary);
  color: var(--text-primary);
  border-radius: var(--border-radius);
  padding: 1rem;
  margin: 0.5rem;
  width: 90%;
  min-height: 14rem;
  line-height: 2rem;
}
</style>
