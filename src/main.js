import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";

import App from "./App.vue";
import HomeView from "@/views/HomeView.vue";
import CustomizeView from "@/views/CustomizeView.vue";
import UserSchemes from "@/views/UserSchemes.vue";
import "./assets/styles/reset.scss";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", name: "Home", component: HomeView },
    { path: "/customize", name: "Customize", component: CustomizeView },
    { path: "/saved", name: "UserSchemes", component: UserSchemes },
  ],
});

const app = createApp(App);

app.use(router).mount("#app");
