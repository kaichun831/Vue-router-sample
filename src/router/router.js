import { createWebHistory, createRouter } from "vue-router";
import Index from "../Screen/IndexScreen.vue";
import Home from "../Screen/HomeScreen.vue";
import Other from "../Screen/Other.vue";
import NotFound from "../Screen/NotFound.vue";
import Users from "../Screen/Users.vue";
import UserDetail from "../Screen/UserDetail.vue";
const webHistory = createWebHistory();
const routes = [
  { path: "/", redirect: "/index" },
  { path: "/index", component: Index },
  { path: "/home", component: Home },
  { path: "/other", component: Other },
  { path: "/user", component: Users },
  { path: "/user/:id", component: UserDetail },
  { path: "/:notfound(.*)", component: NotFound },
];

const router = createRouter({
  history: webHistory,
  routes,
});
export default router;
