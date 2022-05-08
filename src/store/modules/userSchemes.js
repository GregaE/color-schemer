import { getSavedSchemes } from "../../services/colorApiService";

const state = () => ({
  userSchemeList: [],
});

const getters = {
  userSchemeList: (state) => state.userSchemeList,
};

const actions = {
  async fetchUserSchemes({ commit }, userId) {
    const response = await getSavedSchemes(userId);
    commit("setUserSchemes", response);
  },
};

const mutations = {
  setUserSchemes: (state, schemeList) => (state.userSchemeList = schemeList),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
