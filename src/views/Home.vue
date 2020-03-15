<template>
  <div class="home-container container">
    <Brand />
    <div class="container-wrapper">
      <div class="row m-0 mt-5">
        <div class="col-6 pr-5">
          <Intro class="trigger1" />
        </div>
        <div class="col-6 pl-5">
          <Intro class="trigger2" />
        </div>
        <div class="col-5">
          <Intro class="trigger3" />
        </div>
      </div>
      <div class="h">few</div>
    </div>
  </div>
</template>

<script>
import { TimelineMax } from "gsap";
import Brand from "@components/home/Brand";
import Intro from "@components/home/Intro";
export default {
  name: "Home",
  components: {
    Brand,
    Intro
  },
  mounted() {
    var t1 = new TimelineMax({
      delay: 0
    });
    t1.from(`.trigger1.intro-component`, 1, {
      "margin-top": "200px"
    });
    t1.from(".trigger1 .intro-card .card-title", 1, {
      transform: "translateX(-20px)",
      opacity: 0
    });
    t1.from(".trigger1 .intro-card > div:not(.card-title)", 1, {
      transform: "translateX(-20px)",
      opacity: 0
    });

    var t2 = new TimelineMax({
      delay: 0
    });
    t2.to(`.trigger2.intro-component`, 1.5, {
      "margin-top": "-100px"
    });
    t2.from(".trigger2 .intro-card .card-title", 1, {
      transform: "translateX(-30px)",
      opacity: 0
    });
    t2.from(".trigger2 .intro-card > div:not(.card-title)", 1, {
      transform: "translateX(-20px)",
      opacity: 0
    });

    const intro1 = this.$scrollmagic
      .scene({
        triggerElement: `.trigger1`
      })
      .setTween(t1);
    const intro2 = this.$scrollmagic
      .scene({
        triggerElement: `.trigger2`
      })
      .setTween(t1);
    this.$scrollmagic.addScene(intro1);

    this.$scrollmagic.addScene(intro2);
  }
};
</script>

<style scoped lang="scss">
@import "@scss/color";
.h {
  height: 70vh;
}

.container-wrapper {
  padding-right: 72px;
  padding-left: 72px;
  border-left: 10px solid $dark1;
}
</style>
