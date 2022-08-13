<template>
  <div v-if="is_loading" class="loader"></div>
  <div v-else>
    <main id="about">
      <h1 class="lg-heading">About <span class="text-secondary">Me</span></h1>

      <h2 class="sm-heading">Let me tell you a few things...</h2>

      <div class="about-info">
        <img class="bio-image" src="../../../public/dist/img/1x1.png" alt="Karl Louise Rito" />

        <div class="bio">
          <h3 class="text-secondary">BIO</h3>
          <p>
            Experienced Web Developer adept in bringing forth expertise in design, installation, testing and maintenance
            of software systems with proficiency in various platforms, languages, and embedded systems.
          </p>
        </div>

        <div class="job job-1">
          <h6>Outline</h6>
          <p>
            For a number of coding year experience, I am confident that that it is me who can bring an impact to your
            business needs. Design, implement, and develop is my forte.
          </p>
        </div>

        <div class="job job-2">
          <h6>Full-stack Developer</h6>
          <p>
            I am an experienced mid-level full stack web developer from an international company assuring you to deliver
            top-notch website just what your business or personal need.
          </p>
        </div>

        <div class="job job-3">
          <h6>Strength</h6>
          <p>
            I am a very fast learner which means I will get up and running in the role quickly that means you will see
            positive return by hiring me and I will demonstrate outstanding values in my work.
          </p>
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
