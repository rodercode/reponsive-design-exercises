import { createRouter, createWebHistory } from "vue-router";
import HomepageView from "../views/HomepageView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomepageView,
    },
  ],
});
export default router;
