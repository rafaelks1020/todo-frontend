import { createRouter, createWebHistory } from "vue-router";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import Tasks from "../views/Tasks.vue";

const routes = [
  { path: "/login", name: "Login", component: Login },
  { path: "/register", name: "Register", component: Register },
  { path: "/tasks", name: "Tasks", component: Tasks },
  { path: "/", redirect: "/login" }, // Redireciona para login por padrão
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
