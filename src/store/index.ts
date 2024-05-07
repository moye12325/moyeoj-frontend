import { createStore } from "vuex";
import user from "@/store/user"; // 确保这个路径是正确的

const store = createStore({
  modules: {
    user: user,
  },
});
export default store;
