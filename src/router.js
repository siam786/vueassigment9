import { createRouter, createWebHistory } from "vue-router";
import Home from "./components/Home.vue";
import PostsPage from "./components/PostsPage.vue";
import SinglePage from "./components/SinglePage.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/category/:id",
    name: "posts",
    component: PostsPage,
  },
  {
    path: "/post/:id",
    name: "post",
    component: SinglePage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
