<template>
  <div v-if="is_loading" class="loader"></div>
  <div v-else>
    <main id="work">
      <h1 class="lg-heading">My <span class="text-secondary">Projects</span></h1>

      <h2 class="sm-heading">Check out some of my works...</h2>

      <div class="projects">
        <div class="item">
          <a href="#!"><img src="../../../public/dist/img/projects/project2_fyloPage.jpg" alt="project1" /></a>
          <a target="_blank" href="https://karllouise-code.github.io/fylo-dark-theme-page/" class="btn-light"
            ><i class="fas fa-eye"></i> Project</a
          >
          <a target="_blank" href="https://github.com/Karllouise-code/fylo-dark-theme-page" class="btn-dark"
            ><i class="fab fa-github"></i> GitHub</a
          >
        </div>

        <div class="item">
          <a href="#!"><img src="../../../public/dist/img/projects/project3_trimexPage.png" alt="project1" /></a>
          <a target="_blank" href="https://trimexlanding.ga/" class="btn-light"><i class="fas fa-eye"></i> Project</a>
          <a target="_blank" href="https://github.com/Karllouise-code/trimexlanding" class="btn-dark"
            ><i class="fab fa-github"></i> GitHub</a
          >
        </div>

        <div class="item">
          <a href="#!"><img src="../../../public/dist/img/projects/project4_tributePage.png" alt="project1" /></a>
          <a target="_blank" href="https://mambatribute.ml/" class="btn-light"><i class="fas fa-eye"></i> Project</a>
          <a target="_blank" href="https://github.com/Karllouise-code/mambatribute" class="btn-dark"
            ><i class="fab fa-github"></i> GitHub</a
          >
        </div>

        <div class="item">
          <a href="#!"><img src="../../../public/dist/img/projects/project5_dataStructMenu.png" alt="project1" /></a>
          <a target="_blank" href="https://github.com/Karllouise-code/dataStructures" class="btn-light"
            ><i class="fas fa-eye"></i> Project</a
          >
          <a target="_blank" href="https://github.com/Karllouise-code/dataStructures" class="btn-dark"
            ><i class="fab fa-github"></i> GitHub</a
          >
        </div>

        <div class="item">
          <a href="#!"><img src="../../../public/dist/img/projects/project1_orderingSystem.png" alt="project1" /></a>
          <a target="_blank" href="https://github.com/Karllouise-code/ordering-system" class="btn-light"
            ><i class="fas fa-eye"></i> Project</a
          >
          <a target="_blank" href="https://github.com/Karllouise-code/ordering-system" class="btn-dark"
            ><i class="fab fa-github"></i> GitHub</a
          >
        </div>
      </div>
    </main>
  </div>
</template>
<script>
export default {
  data() {
    return {
      is_loading: true,
    };
  },
  created() {
    this.loadContent();
  },
  methods: {
    loadContent() {
      setTimeout(() => {
        this.is_loading = false;
      }, 1000);
    },
  },
};
</script>
