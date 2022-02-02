<template>
  <div class="home-container">
    <!-- Jumbotron -->
    <Jumbotron :bground="jumbotronBgPath" />
    <!-- Categories -->
    <Categories
      v-for="(item, index) in movieCategories"
      :key="index"
      :data="item"
    />
  </div>
</template>

<script>
import Categories from "@/components/Home/Categories.vue";
import { mapActions, mapGetters } from "vuex";
import Jumbotron from "../components/Home/Jumbotron.vue";
export default {
  name: "Home",
  data() {
    return {
      movieCategories: [
        { data: [], title: "Popular Movies" },
        { data: [], title: "Trend Movies" },
      ],
      jumbotronBgPath: "",
    };
  },
  created() {
    this.getMovies();
  },
  components: { Categories, Jumbotron },
  computed: {
    ...mapGetters(["setPopularMovieResults", "setTrendMovieResults"]),
  },
  methods: {
    ...mapActions(["getPopularMovies", "getTrendMovies"]),
    getMovies() {
      this.getTrendMovies().then(() => {
        this.movieCategories[1].data = this.setTrendMovieResults;
      });

      this.getPopularMovies().then(() => {
        this.movieCategories[0].data = this.setPopularMovieResults;
        let rnd = Math.floor(Math.random() * 6);
        this.jumbotronBgPath = this.setPopularMovieResults[rnd].backdrop_path;
      });
    },
  },
};
</script>
<style lang="scss"></style>
