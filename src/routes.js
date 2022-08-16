import { createRouter, createWebHistory } from "vue-router";
import Home from "./views/Home/home";
import About from "./views/About/about";
import Project from "./views/Project/project";
import Contact from "./views/Contact/contact";
import NotFound from "./views/NotFound/not_found";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/about", name: "About", component: About },
  { path: "/projects", name: "Projects", component: Project },
  { path: "/contacts", name: "Contact", component: Contact },
  { path: "/:catchError(.*)", name: "404", component: NotFound },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: "current",

  scrollBehavior() {
    document.getElementById("app").scrollIntoView({ behavior: "smooth" });
  },
});

router.beforeEach((to, from, next) => {
  document.title = `Here's - ${to.name}`;
  next();
});

export default router;
