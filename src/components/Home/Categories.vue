<template>
  <div class="category-container">
    <div class="container">
      <div class="title-header">
        <div class="title">
          {{ data.title }}
        </div>
        <div class="see-all">See all</div>
      </div>
      <div class="movie-cards">
        <MovieCard :movie="data.data" />
      </div>
    </div>
  </div>
</template>

<script>
import MovieCard from "./MovieCard.vue";
export default {
  components: { MovieCard },
  name: "Category",
  props: {
    data: {
      type: Object || Array
    },
  },
};
</script>

<style lang="scss">
@import "../../scss/colors.scss";
@import url("https://fonts.googleapis.com/css2?family=Ubuntu:wght@700&display=swap");
.category-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  align-items: center;
  background-color: $background;
  .container {
    width: 1400px;
    height: auto;
    display: flex;
    flex-direction: column;
    margin-bottom: 5rem;

    .title-header {
      display: flex;
      align-items: center;
      margin-bottom: 2rem;
      justify-content: space-between;
      width: 100%;
      height: 3rem;
      border-bottom: 1px solid white;

      .title {
        text-transform: capitalize;
        color: white;
        font-family: "Ubuntu", sans-serif;
        font-size: 24px;
      }

      .see-all {
        color: white;
        cursor: pointer;
        transition: 0.3s ease;
        &:hover {
          color: $primary;
        }
      }
    }
  }
}
</style>
