import { createStore } from "vuex";
import colors from "./modules/colors";
import userSchemes from "./modules/userSchemes";

export default createStore({
  modules: {
    colors,
    userSchemes,
  },
});
