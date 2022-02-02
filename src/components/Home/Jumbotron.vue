<template>
  <div class="jumbotron-container">
    <div class="opacitier"></div>
    <div class="container">
      <div class="slogan">
        “Remember, Red, hope is a good thing, maybe the best of things, and no
        good thing ever dies. I will be hoping that this letter finds you, and
        finds you well.”
      </div>
      <div class="slogan-owner">"Shawshank Redemption"</div>
    </div>
  </div>
</template>

<script>
/* import { filters } from "@/mixins.global.js"; */
export default {
  name: "Jumbotron",
  props: {
    bground: String,
  },
  computed: {
    /*  setBgImg() {
      let background = `background-image:url('https://image.tmdb.org/t/p/original${this.bground}')`;
      return background;
    }, */
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Dancing+Script:wght@600&display=swap");
.jumbotron-container {
  width: 100%;
  height: 350px;
  background-size: cover;
  background-position-y: 25%;
  margin-bottom: 2rem;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  .opacitier {
    width: 100%;
    height: 350px;
    position: absolute;
    z-index: 1;
    background-color: rgba($color: #000000, $alpha: 0.9);
    filter: blur(50px);
  }
  .container {
    width: 1400px;
    color: white;
    z-index: 2;
    .slogan {
      font-family: "Dancing Script", cursive;
      font-size: 35px;
      text-align: center;
    }
    .slogan-owner {
      width: 100%;
      justify-content: flex-end;
      display: flex;
      font-size: 25px;
      margin-top: 2rem;
      color: #9e9e9e;
    }
  }
}
</style>
