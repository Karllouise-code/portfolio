import { createRouter, createWebHistory } from "vue-router";
import Home from "./views/Home/home";
import About from "./views/About/about";
import Project from "./views/Project/project";
import Contact from "./views/Contact/contact";
import NotFound from "./views/NotFound/not_found";

const routes = [
  { path: "/", name: "home", component: Home },
  { path: "/about", name: "about", component: About },
  { path: "/projects", name: "projects", component: Project },
  { path: "/contacts", name: "contact", component: Contact },
  { path: "/:catchError(.*)", name: "not_found", component: NotFound },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: "current",

  scrollBehavior() {
    document.getElementById("app").scrollIntoView({ behavior: "smooth" });
  },
});

export default router;
