import {
  getSavedSchemes,
  createScheme,
  deleteScheme,
  renameScheme,
} from "../../services/colorApiService";

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
  async addUserScheme({ commit }, { schemeName, colorArr, user_id }) {
    const response = await createScheme(schemeName, colorArr, user_id);
    commit("setUserSchemes", response.colorSchemes);
  },
  async deleteUserScheme({ commit }, { schemeId, user_id }) {
    deleteScheme(schemeId, user_id);
    commit("deleteScheme", schemeId);
  },
  async renameUserScheme({ commit }, { schemeId, user_id, newName }) {
    renameScheme(schemeId, user_id, newName);
    commit("renameScheme", { schemeId: schemeId, newName: newName });
  },
};

const mutations = {
  setUserSchemes: (state, schemeList) => (state.userSchemeList = schemeList),
  deleteScheme: (state, schemeId) =>
    (state.userSchemeList = state.userSchemeList.filter(
      (scheme) => scheme._id !== schemeId
    )),
  renameScheme: (state, { schemeId, newName }) =>
    (state.userSchemeList = state.userSchemeList.map((scheme) => {
      if (scheme._id === schemeId) {
        console.log(newName);
        return Object.assign({}, scheme, { name: newName });
      }
      return scheme;
    })),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
