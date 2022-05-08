const state = () => ({
  textPrimary: localStorage.getItem("text-primary"),
  textSecondary: localStorage.getItem("text-secondary"),
  bgPrimary: localStorage.getItem("bg-primary"),
  bgSecondary: localStorage.getItem("bg-secondary"),
  tertiary: localStorage.getItem("tertiary"),
});

const getters = {};

const actions = {};

const mutations = {};

export default {
  state,
  getters,
  actions,
  mutations,
};
