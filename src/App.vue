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

@import "@scss/font";
@import "@scss/color";
@import "@scss/bootstrap";

html,
body {
  padding: 0;
  margin: 0;
}
</style>
