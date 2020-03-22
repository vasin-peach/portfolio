<template>
  <div class="work-component">
    <WorkCard :options="works[0]" />
    <div class="row m-0 work-container">
      <div class="col-12 col-md-6  d-none d-md-block"></div>
      <div class="col-12 col-md-6 col-lg-3 work-menu ">
        MENU
      </div>
      <div class="col-3 d-none d-lg-block">1</div>
    </div>
  </div>
</template>

<script>
import WorkCard from "./WorkCard";
export default {
  name: "WorkComponent",
  components: { WorkCard },
  data() {
    return {
      works: [
        {
          title: "ITCAMP 14",
          link: "itcamp14",
          desc: "GETTING TO KNOW 'IT' CHOOSE THE PATH TO UNIVERSITY",
          tags: [
            "#Space",
            "#Camp",
            "#Parallax",
            "#Space",
            "#Camp",
            "#Parallax"
          ],
          colors: ["#040413", "#0836e0", "#EF4647", "#ffffff"],
          bg: {
            base: require("@images/work/itcamp/bg1.png"),
            mask1: "#313095",
            mask2: "#3F3EA1",
            mask3: require("@images/work/itcamp/bg2.jpg")
          }
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
@import "@scss/color";
@import "@scss/media";
.work-component {
  position: relative;
}
.work-container {
  position: absolute;
  left: 0;
  right: 0;
  bottom: -10%;
  height: 30%;

  @include sm {
    position: initial;
    height: 30%;
  }

  .work-menu {
    background: $white1;
    color: $dark1;
    box-shadow: 0 0 5px 1px rgb(73, 73, 73);
  }
}
</style>
