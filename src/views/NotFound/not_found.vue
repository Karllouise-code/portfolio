<template>
  <main id="not-found">
    <section>
      <h1 class="lg-heading expertise-lg-heading">404 PAGE <span class="text-secondary">NOT FOUND</span></h1>
      <div class="container">
        <div style="padding: 0 1rem">
          <h2 class="sm-heading expertise-sm-heading">The page you are looking for does not exist.</h2>
        </div>
      </div>
      <!-- router-link to home -->
      <div class="icons" style="text-align: center">
        <router-link :to="{ name: 'Home' }" style="text-align: center">
          <i class="fas fa-home fa-2x"></i>
        </router-link>
      </div>
    </section>
  </main>
</template>
