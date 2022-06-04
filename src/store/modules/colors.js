const state = () => ({
  textPrimary: localStorage.getItem("text-primary"),
  textSecondary: localStorage.getItem("text-secondary"),
  bgPrimary: localStorage.getItem("bg-primary"),
  bgSecondary: localStorage.getItem("bg-secondary"),
  tertiary: localStorage.getItem("tertiary"),
});

const getters = {
  currentScheme: (state) => [
    state.textPrimary,
    state.textSecondary,
    state.bgPrimary,
    state.bgSecondary,
    state.tertiary,
  ],
};

const actions = {
  setScheme({ commit }, colorArr) {
    commit("changeColor", { color: colorArr[0], field: "--text-primary" });
    commit("changeColor", { color: colorArr[1], field: "--text-secondary" });
    commit("changeColor", { color: colorArr[2], field: "--bg-primary" });
    commit("changeColor", { color: colorArr[3], field: "--bg-secondary" });
    commit("changeColor", { color: colorArr[4], field: "--tertiary" });
  },
  setColor({ commit }, { color, field }) {
    commit("changeColor", { color: color, field: field });
  },
};

const mutations = {
  changeColor: (state, { color, field }) => {
    if (field === "--text-primary") {
      state.textPrimary = color;
    } else if (field === "--text-secondary") {
      state.textSecondary = color;
    } else if (field === "--bg-primary") {
      state.bgPrimary = color;
    } else if (field === "--bg-secondary") {
      state.bgSecondary = color;
    } else if (field === "--tertiary") {
      state.tertiary = color;
    }
    rootScheme.style.setProperty(field, color);
    localStorage.setItem(field.slice(2, field.length), color);
  },
};

const rootScheme = document.querySelector(":root");

export default {
  state,
  getters,
  actions,
  mutations,
};
