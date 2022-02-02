<template>
  <div class="footer-container">
    <div class="container">
      <div class="categories">
        <span class="category">Trends</span>
        <span class="category">Latest</span>
        <span class="category">Popular</span>
        <span class="category">Up Coming</span>
        <span class="category">Top Rated</span>
      </div>
      <div class="copyrigth">Copyrigth © All Rigths Reserved | 2022</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style lang="scss">
@import "../scss/colors.scss";

.footer-container {
  width: 100%;
  height: 250px;
  display: flex;
  justify-content: center;
  background-color: #101118;
  .container {
    width: 1400px;
    height: 100%;
    color: white;
    flex-direction: column;
    align-items: center;
    display: flex;
    justify-content: center;
    .categories {
      margin-bottom: 3rem;
      display: flex;
      justify-content: center;
      width: 100%;
      .category {
        cursor: pointer;
        transition: 0.3s ease;
        &:hover {
          color: $primary;
        }
        &:not(:last-child) {
          margin-right: 2rem;
        }
      }
    }
  }
}
</style>
