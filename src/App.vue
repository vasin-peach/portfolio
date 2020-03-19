<template>
  <div id="app">
    <Menu />
    <router-view />
  </div>
</template>

<script>
import Menu from "@components/Menu";
// import Scrollbar from "smooth-scrollbar";

export default {
  name: "App",
  components: { Menu }
};
</script>

<style lang="scss">
// bootstrap
@import "~bootstrap";
@import "~bootstrap-vue";

@import url("https://fonts.googleapis.com/css?family=Baloo+2:400,700&display=swap");
@import url("https://fonts.googleapis.com/css?family=Sen:400,700&display=swapp");
@import "@scss/font";
@import "@scss/color";
@import "@scss/bootstrap";

html,
body {
  min-height: 100vh;
  padding: 0;
  margin: 0;
  background: rgb(4, 4, 19);
  background-image: url("~@images/bg.png");
  background-repeat: no-repeat;
  background-size: cover;
}

#app {
  width: 100%;
  height: 100vh;
  overflow: auto;
}
</style>
