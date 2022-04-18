<script>
import { getSavedSchemes, deleteScheme } from "../services/colorApiService.js";
import SchemeList from "../components/SchemeList.vue";

export default {
  components: {
    SchemeList,
  },
  data: () => ({
    schemeList: [],
  }),
  methods: {
    remove(id) {
      deleteScheme(id, "6245d8c249e428cdbaa8d920");
      this.schemeList = this.schemeList.filter((scheme) => scheme._id !== id);
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
    <SchemeList :schemeList="schemeList" @remove="remove" />
  </div>
</template>

<style scoped>
@import "@/assets/styles/userSchemesView.css";
</style>
