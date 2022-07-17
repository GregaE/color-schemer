<script>
import { mapState, mapActions } from "vuex";

export default {
  methods: {
    onChange(event, field) {
      this.setColor({ color: event.target.value, field: field });
    },
    ...mapActions(["setColor"]),
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
};
</script>

<template>
  <form class="CustomizeView-form">
    <h1>Color Picker</h1>
    <div>
      <div class="color-picker">
        <label for="textPrimary">Text primary</label>
        <div class="color-field">
          <div>{{ textPrimary }}</div>
          <input
            :value="textPrimary"
            type="color"
            id="textPrimary"
            @input="onChange($event, '--text-primary')"
          />
        </div>
      </div>
      <div class="color-picker">
        <label for="textSecondary">Text secondary</label>
        <div class="color-field">
          <div>{{ textSecondary }}</div>
          <input
            :value="textSecondary"
            type="color"
            id="textSecondary"
            @input="onChange($event, '--text-secondary')"
          />
        </div>
      </div>
      <div class="color-picker">
        <label for="bgPrimary">Background primary</label>
        <div class="color-field">
          <div>{{ bgPrimary }}</div>
          <input
            :value="bgPrimary"
            type="color"
            id="bgPrimary"
            @input="onChange($event, '--bg-primary')"
          />
        </div>
      </div>
      <div class="color-picker">
        <label for="bgSecondary">Background secondary</label>
        <div class="color-field">
          <div>{{ bgSecondary }}</div>
          <input
            :value="bgSecondary"
            type="color"
            id="bgSecondary"
            @input="onChange($event, '--bg-secondary')"
          />
        </div>
      </div>
      <div class="color-picker">
        <label for="tertiary">Tertiary</label>
        <div class="color-field">
          <div>{{ tertiary }}</div>
          <input
            :value="tertiary"
            type="color"
            id="tertiary"
            @input="onChange($event, '--tertiary')"
          />
        </div>
      </div>
    </div>
  </form>
</template>

<style lang="scss" scoped>
@import "@/assets/styles/components/customizeForm.scss";
</style>
