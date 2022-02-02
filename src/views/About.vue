<template>
  <div class="about-container">
    <h1>This is an about page</h1>
  </div>
</template>
<script>
export default {
  name: "About"
}
</script>
<style lang="scss">
.about-container{
  width: 100%;
  min-height: calc(100vh - (5rem + 250px));
  height: auto;
  color: white;
  display: flex;
  justify-content: center;
  padding-top: 3rem;
}
</style>
