<script>
export default {
  methods: {
    onChange(event, field) {
      this.$emit("change-color", event.target.value, field);
    },
  },
  data: () => ({
    textPrimary: localStorage.getItem("text-primary"),
    textSecondary: localStorage.getItem("text-secondary"),
    bgPrimary: localStorage.getItem("bg-primary"),
    bgSecondary: localStorage.getItem("bg-secondary"),
  }),
  watch: {
    textPrimary(newVal) {
      localStorage.setItem("text-primary", newVal);
    },
    textSecondary(newVal) {
      localStorage.setItem("text-secondary", newVal);
    },
    bgPrimary(newVal) {
      localStorage.setItem("bg-primary", newVal);
    },
    bgSecondary(newVal) {
      localStorage.setItem("bg-secondary", newVal);
    },
  },
};
</script>

<template>
  <form class="customize-form" :model="form">
    <div>
      <label>Text primary</label>
      <div>{{ textPrimary }}</div>
      <input
        v-model="textPrimary"
        type="color"
        @input="onChange($event, '--text-primary')"
      />
    </div>
    <div>
      <label>Text secondary</label>
      <div>{{ textSecondary }}</div>
      <input
        v-model="textSecondary"
        type="color"
        @input="onChange($event, '--text-secondary')"
      />
    </div>
    <div>
      <label>Background primary</label>
      <div>{{ bgPrimary }}</div>
      <input
        v-model="bgPrimary"
        type="color"
        @change="onChange($event, '--bg-primary')"
      />
    </div>
    <div>
      <label>Background secondary</label>
      <div>{{ bgSecondary }}</div>
      <input
        v-model="bgSecondary"
        type="color"
        @input="onChange($event, '--bg-secondary')"
      />
    </div>
  </form>
</template>

<style>
@media (min-width: 1024px) {
}
</style>
