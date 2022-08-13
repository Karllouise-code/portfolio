<template>
  <header>
    <div class="menu-btn" :class="{ close: showMenu, open: !showMenu }" @click="toggleMenu()">
      <div class="btn-line"></div>
      <div class="btn-line"></div>
      <div class="btn-line"></div>
    </div>

    <nav class="menu" :class="{ show: showMenu, close: !showMenu }">
      <div class="menu-branding" :class="{ show: showMenu, close: !showMenu }">
        <div class="portrait"></div>
      </div>

      <ul class="menu-nav" :class="{ show: showMenu, close: !showMenu }">
        <li class="nav-item current">
          <router-link to="/" class="nav-link">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/about" class="nav-link">About</router-link>
        </li>
        <!--  <li class="nav-item">
          <router-link to="/work" class="nav-link">Projects</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/contact" class="nav-link">Contact</router-link>
        </li> -->
      </ul>
    </nav>
  </header>
  <router-view />
</template>

<script>
export default {
  data() {
    return {
      showMenu: false,
    };
  },

  methods: {
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
