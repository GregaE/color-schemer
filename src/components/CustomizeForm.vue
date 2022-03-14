<script>
const rootScheme = document.querySelector(":root");
const primary = getComputedStyle(document.documentElement).getPropertyValue(
  "--text-secondary"
);

export default {
  methods: {
    onChange(event, field) {
      console.log(event.target.value, field);
      this.$emit("change-color", event.target.value, field);
    },
    hello(name) {
      console.log("hi", name);
      this.$emit("hello", name);
    },
  },
};
</script>

<template>
  <form class="customize-form">
    <div>
      <label>Text primary</label>
      <input type="color" @change="hello('John')" />
    </div>
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
