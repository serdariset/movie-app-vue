<template>
  <header class="header-container">
    <div class="container">
      <div class="logo-section" @click="homePage()">
        <img :src="require(`@/assets/logo.png`)" alt="Logo" class="logo-img" />
        <span class="app-name">Vuemie</span>
      </div>
      <nav class="navbar">
        <router-link class="link" to="/">Home</router-link>
        <router-link class="link" to="/about">About</router-link>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  methods: {
    homePage() {
      this.$router.push({ path: "/" }, () => {});
    },
  },
};
</script>

<style lang="scss">
@import "../scss/colors.scss";
@import url("https://fonts.googleapis.com/css2?family=Mochiy+Pop+P+One&display=swap");
.header-container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 5rem;
  background-color: $background;
  width: 100%;
  .container {
    width: 1200px;
    height: 5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 0;
    .link {
      color: white;
      text-decoration: none;
      height: 3rem;
      transition: 0.3s ease;
      border-bottom: 2px solid transparent;

      &:hover {
        color: $primary;
      }
      &:not(:last-child) {
        margin-right: 1rem;
      }
    }
    .logo-section {
      display: flex;
      align-items: center;
      height: 100%;

      .app-name {
        color: $primary;
        font-family: "Mochiy Pop P One", sans-serif;
        font-size: 26px;
        height: 3rem;
        display: flex;
        align-items: center;
        padding-bottom: 5px;
      }
      .logo-img {
        max-height: 100%;
        margin-right: 1rem;
      }
    }
  }
}
</style>
