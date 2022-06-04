/* eslint-disable vue/multi-word-component-names */
<script>
import CustomizeForm from "@/components/CustomizeForm.vue";
import InvertColors from "@/components/InvertColors.vue";
import AdvancedConfig from "@/components/AdvancedConfig.vue";

export default {
  components: {
    CustomizeForm,
    InvertColors,
    AdvancedConfig,
  },
};
</script>

<template>
  <div class="customization-view">
    <CustomizeForm />
    <InvertColors />
    <AdvancedConfig />
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/styles/customizeView.scss";
</style>
