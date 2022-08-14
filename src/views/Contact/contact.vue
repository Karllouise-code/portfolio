<template>
  <main id="contact">
    <h1 class="lg-heading">Contact <span class="text-secondary">Me</span></h1>

    <h2 class="sm-heading">If you want to reach me...</h2>

    <div class="boxes">
      <div><span class="text-secondary">Email: </span>karllouiserito.1@gmail.com</div>

      <div><span class="text-secondary">Phone: </span>09756824235</div>

      <div><span class="text-secondary">Email: </span>Bi&#241;an Laguna 4024</div>
    </div>
  </main>
  <div v-if="is_loading" class="loader"></div>
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
