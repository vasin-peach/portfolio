<template>
  <div id="app">
    <!-- <Menu /> -->
    <router-view />
  </div>
</template>

<script>
import animate from "@/animate/animate.js";
import "swiper/css/swiper.css";

export default {
  name: "App",
  mounted() {
    this.$nextTick(function() {
      animate(this);
    });
  }
  // components: { Menu }
};
</script>

<style lang="scss">
// bootstrap
@import "~bootstrap";
@import "~bootstrap-vue";

// @import url("https://fonts.googleapis.com/css?family=Baloo+2:400,700&display=swap");
// @import url("https://fonts.googleapis.com/css?family=Sen:400,700&display=swapp");
@import "@scss/media";
@import "@scss/font";
@import "@scss/color";
@import "@scss/bootstrap";
@import "@scss/swiper";
@import "@scss/smooth_scroll";

html,
body {
  height: 100vh;
  padding: 0;
  margin: 0;
  background: rgb(4, 4, 19);
  background-image: url("~@images/bg.png");
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;
}

#app {
  width: 100%;
  height: 100vh;
  overflow: auto;
}
</style>
