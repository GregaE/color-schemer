<script>
export default {
  props: {
    variant: {
      type: String,
      required: true,
    },
    disabled: Boolean,
  },
};
</script>

<template>
  <button :class="variant" :disabled="disabled">
    <slot />
  </button>
</template>

<style lang="scss" scoped>
@import "./Button.scss";
</style>
