<script>
import GenerateColor from "@/components/GenerateColor.vue";

export default {
  components: {
    GenerateColor,
  },
  props: {
    textPrimary: String,
  },
};
</script>

<template>
  <main>
    <div>boo {{ textPrimary }}</div>
    <GenerateColor />
  </main>
</template>
