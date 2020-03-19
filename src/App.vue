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
  components: { Menu },
  created() {
    this.$nextTick(function() {
      console.log("hi");
      // Scrollbar.init(document.querySelector("html"), {
      //   damping: 0.05,
      //   alwaysShowTracks: true
      // });
      window.onbeforeunload = function() {
        window.scrollTo(0, 0);
      };
    });
  },
  mounted() {
    // const scene1 = this.$scrollmagic
    //   .scene({
    //     triggerElement: "body",
    //     // {0,0.5,1} - animations starts from {top,center,end} of window
    //     triggerHook: 0,
    //     // Duration of animation
    //     duration: "100%"
    //   })
    //   .setTween("body", {
    //     backgroundPosition: "0 30%"
    //   });
    // this.$scrollmagic.addScene(scene1);
  }
};
</script>

<style lang="scss">
// bootstrap
@import "~bootstrap";
@import "~bootstrap-vue";

@import url("https://fonts.googleapis.com/css?family=Baloo+2:400,700&display=swap");
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
