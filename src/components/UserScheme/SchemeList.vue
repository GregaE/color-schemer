<script>
import { mapState, mapActions } from "vuex";
import UserScheme from "./UserScheme.vue";

export default {
  components: {
    UserScheme,
  },
  computed: {
    ...mapState({
      userSchemeList: (state) => state.userSchemes.userSchemeList,
    }),
  },
  emits: ["apply"],
  methods: {
    emitApply(colors) {
      this.$emit("apply", colors);
    },
    ...mapActions(["fetchUserSchemes"]),
  },
  created() {
    this.fetchUserSchemes("6245d8c249e428cdbaa8d920");
  },
};
</script>

<template>
  <div class="scheme-list">
    <UserScheme
      v-for="scheme in userSchemeList"
      :key="scheme.id"
      :scheme="scheme"
      @apply="emitApply"
    />
  </div>
</template>

<style lang="scss" scoped>
.scheme-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 10px;
  margin: 2rem 0;
}
</style>
