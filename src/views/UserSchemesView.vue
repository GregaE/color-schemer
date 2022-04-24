<script>
import {
  getSavedSchemes,
  deleteScheme,
  renameScheme,
} from "../services/colorApiService.js";
import SchemeList from "../components/UserScheme/SchemeList.vue";

export default {
  components: {
    SchemeList,
  },
  data: () => ({
    schemeList: [],
  }),
  emits: ["apply"],
  methods: {
    remove(id) {
      deleteScheme(id, "6245d8c249e428cdbaa8d920");
      this.schemeList = this.schemeList.filter((scheme) => scheme._id !== id);
    },
    rename(id, newName) {
      renameScheme(id, "6245d8c249e428cdbaa8d920", newName);
      this.schemeList = this.schemeList.map((scheme) => {
        if (scheme._id === id) {
          return Object.assign({}, scheme, { name: newName });
        }
        return scheme;
      });
      console.log(this.schemeList);
    },
    emitApply(colors) {
      this.$emit("apply", colors);
    },
  },
  mounted() {
    getSavedSchemes("6245d8c249e428cdbaa8d920").then(
      (data) => (this.schemeList = data)
    );
  },
};
</script>

<template>
  <div>
    <SchemeList
      :schemeList="schemeList"
      @remove="remove"
      @apply="emitApply"
      @rename="rename"
    />
  </div>
</template>

<style scoped>
@import "@/assets/styles/userSchemesView.css";
</style>
