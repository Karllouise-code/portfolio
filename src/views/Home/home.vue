<template>
  <div class="home" id="bg-img">
    <div class="overlay">
      <main class="home-heading">
        <h1 class="lg-heading">Karl Louise <span class="text-secondary">Rito</span></h1>
        <h2 class="sm-heading">Web Developer, Programmer, Designer & Entrepreneur</h2>
        <div class="icons">
          <a v-for="icon in icons" :key="icon.id" :href="icon.target_url" target="_blank">
            <i :class="icon.code"></i>
          </a>
        </div>
      </main>
    </div>
  </div>
  <section id="divider">
    <h1 class="lg-heading expertise-lg-heading">Exper<span class="text-secondary">tise</span></h1>
    <div class="container">
      <div style="padding: 0 1rem">
        <h2 class="sm-heading expertise-sm-heading">My Artillery</h2>
      </div>
      <div class="row">
        <div class="col" v-for="a in expertise" :key="a.name">
          <div class="card">
            <img :src="a.img_source" :alt="a.name" class="card-img" />
            <div class="card-layer">
              <h3>{{ a.name }}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <div v-if="is_loading" class="loader"></div>
</template>

<script>
let logo_path = "../../../dist/img/logo";
export default {
  created() {
    this.loadContent();
  },
  methods: {
    loadContent() {
      this.is_loading = true;
      setTimeout(() => {
        this.is_loading = false;
      }, 1000);
    },
  },
  data() {
    return {
      is_loading: true,
      icons: [
        {
          id: 1,
          code: "fab fa-facebook fa-2x",
          target_url: "https://www.facebook.com/karllouise08",
        },
        {
          id: 2,
          code: "fab fa-twitter fa-2x",
          target_url: "https://twitter.com/karl_rito",
        },
        {
          id: 3,
          code: "fab fa-linkedin fa-2x",
          target_url: "https://www.linkedin.com/in/karllouise08",
        },
        {
          id: 4,
          code: "fab fa-github fa-2x",
          target_url: "https://github.com/Karllouise-code",
        },
        {
          id: 5,
          code: "fab fa-instagram fa-2x",
          target_url: "https://www.instagram.com/kalowies_",
        },
        {
          id: 6,
          code: "fas fa-cloud fa-2x",
          target_url: "https://trailblazer.me/id/karllouise08",
        },
        {
          id: 7,
          code: "fas fa-pen-nib fa-2x",
          target_url: "https://karllouiserito.hashnode.dev/",
        },
        {
          id: 8,
          code: "fab fa-goodreads fa-2x",
          target_url: "https://www.goodreads.com/user/show/128431182-karl-louise-rito",
        },
        {
          id: 9,
          code: "fab fa-dev fa-2x",
          target_url: "https://dev.to/kalowies_",
        },
      ],

      expertise: [
        {
          name: "Laravel",
          img_source: logo_path + "/laravel.png",
        },
        {
          name: "Vuejs",
          img_source: logo_path + "/vuejs-icon.svg",
        },
        {
          name: "GraphQL",
          img_source: logo_path + "/graphql.png",
        },
        {
          name: "VS Code",
          img_source: logo_path + "/vscode.svg",
        },
        {
          name: "Postman",
          img_source: logo_path + "/postman.svg",
        },
        {
          name: "MySQL",
          img_source: logo_path + "/mysql-icon.svg",
        },
        {
          name: "NodeJS",
          img_source: logo_path + "/nodejs-icon.svg",
        },
        {
          name: "Git",
          img_source: logo_path + "/git-scm-icon.svg",
        },
        {
          name: "Bootstrap",
          img_source: logo_path + "/getbootstrap-icon.svg",
        },
        {
          name: "Sass",
          img_source: logo_path + "/sass-lang-icon.svg",
        },
        {
          name: "jQuery",
          img_source: logo_path + "/jquery-icon.svg",
        },
        {
          name: "JavaScript",
          img_source: logo_path + "/javascript-icon.svg",
        },
        {
          name: "PHP",
          img_source: logo_path + "/php-icon.svg",
        },
        {
          name: "HTML",
          img_source: logo_path + "/w3_html5-icon.svg",
        },
        {
          name: "CSS",
          img_source: logo_path + "/w3_css-icon.svg",
        },
        {
          name: "Canva",
          img_source: logo_path + "/canva-icon.svg",
        },
      ],
    };
  },
};
</script>
