<script>
import { mapState, mapActions } from "vuex";
import UserScheme from "./UserScheme.vue";

export default {
  components: {
    UserScheme,
  },
  props: {
    schemeList: Array,
  },
  computed: {
    ...mapState({
      userSchemeList: (state) => state.userSchemes.userSchemeList,
    }),
  },
  emits: ["apply", "rename", "remove"],
  methods: {
    emitRemove(id) {
      this.$emit("remove", id);
    },
    emitApply(colors) {
      this.$emit("apply", colors);
    },
    emitRename(id, newName) {
      this.$emit("rename", id, newName);
    },
    ...mapActions(["fetchUserSchemes"]),
  },
  created() {
    this.fetchUserSchemes("6245d8c249e428cdbaa8d920");
  },
};
</script>

<template>
  <div>
    <h1>My Schemes {{ userSchemeList }}</h1>
    <UserScheme
      v-for="scheme in userSchemeList"
      :key="scheme.id"
      :scheme="scheme"
      @remove="emitRemove"
      @apply="emitApply"
      @rename="emitRename"
    />
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/styles/components/schemeList.scss";
</style>
