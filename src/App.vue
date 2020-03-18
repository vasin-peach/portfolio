<template>
  <div id="app">
    <Menu />
    <router-view />
  </div>
</template>

<script>
import Menu from "@components/Menu";

export default {
  name: "App",
  components: { Menu }
};
</script>

<style lang="scss">
// bootstrap
@import "~bootstrap";
@import "~bootstrap-vue";

@import url("https://fonts.googleapis.com/css?family=Baloo+2&display=swap");
@import "@scss/font";
@import "@scss/color";
@import "@scss/bootstrap";

html,
body {
  padding: 0;
  margin: 0;
  background: rgb(0, 0, 0);
  background-image: url("~@images/bg.png");
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
