<template>
  <header>
    <div class="menu-btn" :class="{ close: showMenu, show: !showMenu }" @click="toggleMenu()">
      <div class="btn-line"></div>
      <div class="btn-line"></div>
      <div class="btn-line"></div>
    </div>

    <nav class="menu" :class="{ show: showMenu, close: !showMenu }">
      <div class="menu-branding" :class="{ show: showMenu, close: !showMenu }">
        <div class="portrait"></div>
      </div>

      <ul class="menu-nav" :class="{ show: showMenu, close: !showMenu }">
        <li class="nav-item">
          <router-link @click="closeWindow()" to="/" class="nav-link" exact>Home</router-link>
        </li>
        <li class="nav-item">
          <router-link @click="closeWindow()" to="/about" class="nav-link">About</router-link>
        </li>
        <li class="nav-item">
          <router-link @click="closeWindow()" to="/projects" class="nav-link">Projects</router-link>
        </li>
        <li class="nav-item">
          <router-link @click="closeWindow()" to="/contacts" class="nav-link">Contacts</router-link>
        </li>
      </ul>
    </nav>
  </header>
  <router-view />
  <footer id="main-footer">Copyright &copy; 2021</footer>
</template>

<script>
export default {
  data() {
    return {
      showMenu: false,
    };
  },

  methods: {
    closeWindow() {
      this.showMenu = false;
    },
    toggleMenu() {
      this.showMenu = !this.showMenu;

      const menuBtn = document.querySelector(".menu-btn");
      const menu = document.querySelector(".menu");
      const menuNav = document.querySelector(".menu-nav");
      const menuBranding = document.querySelector(".menu-branding");
      const navItems = document.querySelectorAll(".nav-item");

      if (this.showMenu) {
        navItems.forEach((item) => item.classList.add("show"));
      } else {
        navItems.forEach((item) => item.classList.remove("show"));
      }
    },
  },
};
</script>
