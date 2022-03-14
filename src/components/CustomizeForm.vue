<script>
const rootScheme = document.querySelector(":root");
const primary = getComputedStyle(document.documentElement).getPropertyValue(
  "--text-secondary"
);

console.log(primary);

export default {
  methods: {
    onChange(event, field) {
      this.$emit("change-color", event.target.value, field);
    },
  },
  data: () => ({
    form: {
      primary: getComputedStyle(document.documentElement).getPropertyValue(
        "--text-secondary"
      ),
    },
  }),
};
</script>

<template>
  <form class="customize-form" :model="form">
    <div>
      <label>Text primary</label>
      <input
        v-model="primary"
        type="color"
        @change="onChange($event, '--text-secondary')"
      />
    </div>
    <div>
      <label>Text secondary</label>
      <input
        value='getComputedStyle(document.documentElement).getPropertyValue("--text-secondary")'
        type="color"
        @change="onChange($event, '--text-secondary')"
      />
    </div>
    <div>
      <label>Background primary</label>
      <input
        value='rootScheme.style.getPropertyValue("--bg-primary")'
        type="color"
        @change="onChange($event, '--bg-primary')"
      />
    </div>
    <div>
      <label>Background secondary</label>
      <input
        value='rootScheme.style.getPropertyValue("--bg-secondary")'
        type="color"
        @change="onChange($event, '--bg-secondary')"
      />
    </div>
  </form>
</template>

<style>
@media (min-width: 1024px) {
}
</style>
