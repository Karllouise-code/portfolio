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
          <router-link @click="closeWindow()" :to="{ name: 'Home' }" class="nav-link" exact>Home</router-link>
        </li>
        <li class="nav-item">
          <router-link @click="closeWindow()" :to="{ name: 'About' }" class="nav-link">About</router-link>
        </li>
        <li class="nav-item">
          <router-link @click="closeWindow()" :to="{ name: 'Projects' }" class="nav-link">Projects</router-link>
        </li>
        <li class="nav-item">
          <router-link @click="closeWindow()" :to="{ name: 'Contact' }" class="nav-link">Contacts</router-link>
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
      const navItems = document.querySelectorAll(".nav-item");

      this.showMenu = false;
      navItems.forEach((item) => item.classList.remove("show"));
    },
    toggleMenu() {
      this.showMenu = !this.showMenu;

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
