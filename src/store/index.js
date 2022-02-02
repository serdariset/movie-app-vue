import axios from "axios";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    baseURL: process.env.VUE_APP_BASE_URL,
    apiKEY: process.env.VUE_APP_API_KEY,
    headers: {
      Authorization: "Bearer " + process.env.VUE_APP_API_KEY,
      "Content-Type": "application/json;charset=utf-8",
    },

    popularMovies: [],
    trendMovies: [],
    movieDetail: [],
    movieCredits: [],
  },
  mutations: {
    GET_POPULAR_MOVIES_LIST(state, payload) {
      state.popularMovies = payload;
    },
    GET_TREND_MOVIES_LIST(state, payload) {
      state.trendMovies = payload;
    },
    GET_MOVIE_DETAIL(state, payload) {
      state.movieDetail = payload;
    },
    GET_MOVIE_CREDITS(state, payload) {
      state.movieCredits = payload;
    },

  },
  actions: {
    getPopularMovies({ state, commit }) {
      return axios
        .get(
          `${state.baseURL}/movie/popular?api_key=${state.apiKEY}&language=en-US&page=1`,
          { ...state.headers }
        )
        .then((res) => {
          commit("GET_POPULAR_MOVIES_LIST", res.data.results);
        })
        .catch((e) => console.log(e));
    },
    getTrendMovies({ state, commit }) {
      return axios
        .get(`${state.baseURL}/trending/all/day?api_key=${state.apiKEY}`, {
          ...state.headers,
        })

        .then((res) => {
          commit("GET_TREND_MOVIES_LIST", res.data.results);
        })
        .catch((e) => console.log(e));
    },
    getMovieDetails({ state, commit }, payload) {
      return axios
        .get(
          `${state.baseURL}/movie/${payload}?api_key=${state.apiKEY}&language=en-US`,
          { ...state.headers }
        )
        .then((res) => {
          commit("GET_MOVIE_DETAIL", res.data);
        })
        .catch((e) => console.log(e));
    },
    getMovieCredits({ state, commit }, payload) {
      return axios
        .get(
          `${state.baseURL}/movie/${payload}/credits?api_key=${state.apiKEY}&language=en-US`,
          { ...state.headers }
        )
        .then((res) => {
          commit("GET_MOVIE_CREDITS", res.data);
        })
        .catch((e) => console.log(e));
    },
 
  },
  getters: {
    setPopularMovieResults(state) {
      let arr = [];
      for (let i = 0; i < state.popularMovies.length; i++) {
        if (state.popularMovies[i].title) {
          arr.push(state.popularMovies[i]);
        } else {
          false;
        }
      }
      return arr.slice(0, 6);
    },
    setTrendMovieResults(state) {
      let arr = [];
      for (let i = 0; i < state.trendMovies.length; i++) {
        if (state.trendMovies[i].title) {
          arr.push(state.trendMovies[i]);
        } else {
          false;
        }
      }
      return arr.slice(0, 6);
    },
    setMovieCredits(state) {
      let arr = [];
      arr = {
        cast: state.movieCredits.cast.slice(0, 16),
        crew: state.movieCredits.crew.slice(0, 16),
      };
      return arr;
    },
  },
  modules: {},
});
