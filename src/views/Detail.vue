<template>
  <div class="detail-container">
    <div class="opacitier"></div>
    <div class="container">
      <div class="movie-image">
        <div class="image-box">
          <img :src="detail.poster_path | setImagePath" alt="" />
          <span class="rate-ribbon"> {{ detail.vote_average }} </span>
        </div>
      </div>
      <div class="movie-information">
        <div class="info">
          <div class="title">
            <span> {{ detail.title }} - </span>
            <span> {{ detail.release_date | setDateYear }} </span>
          </div>
          <div class="movie-categories">
            <div class="ribbon" v-for="item in detail.genres" :key="item.id">
              {{ item.name }}
            </div>
          </div>
        </div>
        <div class="context">
          <div class="tagline">{{ detail.tagline }}</div>
          <div class="overview">{{ detail.overview }}</div>
        </div>
      </div>
    </div>
    <div class="container cast">
      <div class="section-title">CAST</div>
      <div class="cast-card-container">
        <div class="card" v-for="(item, index) in cast.cast" :key="index">
          <div class="image-box">
            <img
              :src="item.profile_path | setImagePath"
              :alt="item.name"
              class="player-picture"
              v-if="item.profile_path"
            />
            <span class="imageless" v-else>
              <img
                :src="require('@/assets/logo.png')"
                :alt="item.name"
                class="no-image"
              />
            </span>
          </div>
          <div class="player-info">{{ item.name }}</div>
          <div class="character-name">{{ item.character }}</div>
        </div>
      </div>
      <div class="section-title">PRODUCER TEAM</div>
      <div class="cast-card-container">
        <div class="card" v-for="(item, index) in cast.crew" :key="index">
          <div class="image-box">
            <img
              :src="item.profile_path | setImagePath"
              :alt="item.name"
              v-if="item.profile_path"
              class="player-picture"
            />
            <span class="imageless" v-else>
              <img
                :src="require('@/assets/logo.png')"
                :alt="item.name"
                class="no-image"
              />
            </span>
          </div>
          <div class="player-info">{{ item.name }}</div>
          <div class="character-name">{{ item.job }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { filters } from "@/mixins/global.js";
import { mapActions, mapGetters, mapState } from "vuex";
export default {
  name: "Detail",
  data() {
    return {
      id: "",
      detail: "",
      cast: "",
    };
  },
  mixins: [filters],
  mounted() {
    this.id = this.$route.params.movieid;
    this.getMovie();
  },
  computed: {
    ...mapState(["movieDetail", "movieCredits"]),
    ...mapGetters(["setMovieCredits"]),
  },
  methods: {
    ...mapActions(["getMovieDetails", "getMovieCredits"]),
    getMovie() {
      this.getMovieDetails(this.id).then(() => {
        this.detail = this.movieDetail;
        let bg = document.querySelector(".detail-container");
        if (this.detail.backdrop_path !== null) {
          bg.style.backgroundImage = `url(https://image.tmdb.org/t/p/original${this.detail.backdrop_path})`;
        } else {
          bg.style.backgroundColor = "#1a1b25";
        }
        console.log(this.detail)
      });
      this.getMovieCredits(this.id).then(() => {
        this.cast = this.setMovieCredits;
      });
    },
  },
};
</script>

<style lang="scss">
@import "../scss/colors.scss";
.detail-container {
  display: flex;
  width: 100%;
  height: auto;
  flex-direction: column;
  align-items: center;
  background-size: 100%;
  position: relative;

  .opacitier {
    z-index: 1;
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba($color: #1a1b25, $alpha: 0.7);
  }
  .container {
    z-index: 2;
    display: flex;
    width: 1400px;
    height: auto;
    margin-top: 4rem;
    background-color: rgba($color: $background, $alpha: 0.8);
    border-radius: 10px;
    padding-right: 2rem;

    .movie-image {
      width: 300px;
      height: 450px;
      display: flex;
      margin-right: 2rem;

      .image-box {
        position: relative;
        width: 300px;
        height: 450px;
        display: flex;
        overflow: hidden;

        .rate-ribbon {
          position: absolute;
          width: 100px;
          height: 35px;
          color: white;
          font-weight: 700;
          display: flex;
          align-items: flex-end;
          padding-bottom: 5px;
          justify-content: center;
          background-color: $primary;
          transform: rotate(-45deg);
          left: -35px;
          top: 0px;
        }
        img {
          max-height: 450px;
          border-radius: 10px;
        }
      }
    }
    .movie-information {
      height: 100%;
      padding: 2rem 0;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;

      .info {
        border-bottom: 2px solid rgba($color: #fff, $alpha: 0.2);
        padding-bottom: 2rem;
        .title {
          color: white;
          font-weight: 700;
          font-size: 30px;
        }
        .movie-categories {
          display: flex;
          margin-top: 1rem;
          .ribbon {
            padding: 5px 8px;
            border-radius: 5px;
            background-color: $primary;
            color: white;
            cursor: pointer;
            &:not(:last-child) {
              margin-right: 10px;
            }
          }
        }
      }
      .context {
        display: flex;
        flex-direction: column;
        margin-top: 2rem;

        .tagline {
          color: white;
          margin-bottom: 2rem;
        }
        .overview {
          color: white;
        }
      }
    }
  }
  .cast {
    height: auto;
    margin-bottom: 5rem;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    .section-title {
      color: white;
      font-weight: 700;
      display: flex;
      align-items: flex-start;
      height: 50px;
      width: 100%;
      font-size: 30px;
      border-bottom: 2px solid rgba($color: #fff, $alpha: 0.2);
      margin-bottom: 2rem;
    }
    .cast-card-container {
      height: auto;
      width: 100%;
      display: flex;
      flex-flow: row wrap;
      justify-content: space-between;
      margin-bottom: 2rem;

      .card {
        height: auto;
        width: 150px;
        display: flex;
        margin-bottom: 1rem;
        color: white;
        flex-direction: column;
        .image-box {
          width: 150px;
          height: 225px;
          margin-bottom: 0.7rem;
          .player-picture {
            width: 150px;
            border-radius: 10px;
          }
          .imageless {
            height: 225px;
            width: 150px;
            display: flex;
            background-color: $background;
            border-radius: 10px;
            align-items: center;
            justify-content: center;
            .no-image {
              height: 35px;
            }
          }
        }

        .character-name {
          color: #9e9e9e;
          font-size: 14px;
        }
      }
    }
  }
}
</style>
