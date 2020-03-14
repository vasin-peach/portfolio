<template>
  <div id="app">
    <Header />
    <router-view />
  </div>
</template>

<script>
import Header from "@components/Header";
export default {
  name: "App",
  components: { Header }
};
</script>

<style lang="scss">
@import "@scss/font";
@import "@scss/color";

html,
body {
  padding: 0;
  margin: 0;
}
</style>
