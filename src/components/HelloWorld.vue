<template>
  <div>
    <div class="section">
      Section1
    </div>
    <div class="section">
      Section2
    </div>
    <div class="section section2">
      <div>Section3</div>
    </div>
    <div class="section section2">
      <div>Section4</div>
    </div>
  </div>
</template>

<script>
// import { TweenMax } from "gsap";
export default {
  name: "HelloWorld",
  mounted() {
    const controller = this.$scrollmagic.controller;
    const scene = this.$scrollmagic
      .scene({
        triggerElement: ".section2",
        triggerHook: 0.5,
        duration: 500
      })
      .setTween(".section2 div", 0.5, {
        scale: "2.5", // the tween durtion can be omitted and defaults to 1
        background: "#ccc",
        padding: "30px",
        top: "0%"
      })
      .addIndicators({ name: "1 (duration: 0)" }) // add indicators (requires plugin)
      .addTo(controller);
    this.$scrollmagic.addScene(scene);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.section {
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  position: relative;
  &:nth-child(odd) {
    background: #f2f2f2;
  }

  > div {
    position: relative;
    top: 50%;
  }
}
</style>
