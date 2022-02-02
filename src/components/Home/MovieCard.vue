<template>
  <div class="movie-card-container">
    <div
      class="card-container"
      v-for="item in movie"
      :key="item.id"
      @click="movieDetail(item.id)"
    >
      <div class="image">
        <img
          :src="item.poster_path | setImagePath"
          :alt="item.title"
          class="poster-image"
        />
        <div class="average-ribbon">
          <span>{{ item.vote_average }}</span>
        </div>
        <span class="detail-effect">
          <img :src="require('@/assets/logo.png')" alt="" />
        </span>
      </div>
      <div class="title">{{ item.title }}</div>
      <div class="date">{{ item.release_date }}</div>
    </div>
  </div>
</template>

<script>
import { filters } from "@/mixins/global.js";
export default {
  name: "MovieCard",
  props: {
    movie: {
      type: Array,
    },
  },
  data() {
    return {
      effect: false,
    };
  },
  methods: {
    movieDetail(val) {
      this.$router.push({ path: `/movie/${val}` });
    },
  },
  mixins: [filters],
};
</script>

<style lang="scss">
@import "../../scss/colors.scss";

.movie-card-container {
  display: flex;
  width: 1400px;
  justify-content: space-between;
  overflow: hidden;

  .card-container {
    display: flex;
    cursor: pointer;
    flex-direction: column;
    width: 200px;

    .image {
      width: 200px;
      height: 300px;
      border-radius: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      margin-bottom: 1rem;
      position: relative;
      &:hover {
        .poster-image {
          transform: scale(1.3);
          opacity: 0.2;
        }
        .detail-effect {
          display: flex;
        }
      }
      .average-ribbon {
        position: absolute;
        color: white;
        display: flex;
        align-items: flex-end;
        justify-content: center;
        top: -8px;
        left: -28px;
        transform: rotate(-45deg);
        width: 75px;
        height: 35px;
        background-color: $primary;
        padding-bottom: 2px;
      }
      .poster-image {
        width: 200px;
        height: 300px;
        transform: scale(1);
        transition: 0.3s ease;
        opacity: 1;
      }
      .detail-effect {
        display: none;
        position: absolute;
        width: 60px;
        height: 60px;
        align-items: center;
        justify-content: center;
        transition: 0.3s ease;

        img {
          max-width: 45px;
          max-height: 45px;
        }
      }
    }
    .title {
      color: white;
      font-size: 16px;
      width: 100%;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }
    .date {
      margin-top: 5px;
      font-size: 14px;
      color: #9e9e9e;
    }
  }
}
</style>
