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
  <main class="customization-view">
    <AdvancedConfig />
    <CustomizeForm />
    <InvertColors />
  </main>
</template>

<style lang="scss" scoped>
.customization-view {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  & > * {
    margin-bottom: 4rem;
    flex: 1;
  }
}
</style>
