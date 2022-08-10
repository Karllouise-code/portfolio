export default {
  template: `
        <div class="menu-btn" @click="toggleMenu()">
            <div class="btn-line"></div>
            <div class="btn-line"></div>
            <div class="btn-line"></div>
        </div>

        <nav class="menu">
            <div class="menu-branding">
            <div class="portrait"></div>
            </div>

            <ul class="menu-nav">
            <li class="nav-item current"><a href="#" class="nav-link">Home</a></li>
            <li class="nav-item"><a href="about.html" class="nav-link">About</a></li>
            <li class="nav-item"><a href="work.html" class="nav-link">Projects</a></li>
            <li class="nav-item"><a href="contact.html" class="nav-link">Contact</a></li>
            </ul>
        </nav>
  `,

  data() {
    return {
      showMenu: false,
    };
  },

  methods: {
    toggleMenu() {
      this.showMenu = !this.showMenu;

      const menuBtn = document.querySelector('.menu-btn');
      const menu = document.querySelector('.menu');
      const menuNav = document.querySelector('.menu-nav');
      const menuBranding = document.querySelector('.menu-branding');
      const navItems = document.querySelectorAll('.nav-item');

      if (this.showMenu) {
        menuBtn.classList.add('close');
        menu.classList.add('show');
        menuNav.classList.add('show');
        menuBranding.classList.add('show');
        navItems.forEach((item) => item.classList.add('show'));
      } else {
        menuBtn.classList.remove('close');
        menu.classList.remove('show');
        menuNav.classList.remove('show');
        menuBranding.classList.remove('show');
        navItems.forEach((item) => item.classList.remove('show'));
      }
    },
  },
};
