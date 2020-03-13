<template>
  <div>
    <div class="head">
      <div>
        <div class="title">VASIN SERMSAMPAN</div>
        <div class="sub">FULL STACK DEVELOPER</div>
      </div>
    </div>
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
import { TimelineMax } from "gsap";
export default {
  name: "HelloWorld",
  mounted() {
    var tl = new TimelineMax({
      delay: 0,
      repeat: 3,
      repeatDelay: 2
    });

    tl.from(".head >div", 1, {
      height: "0"
    });
    tl.from(".head >div .title", 1, {
      transform: "translateX(-50px)",
      opacity: 0
    });
    tl.from(".head >div .sub", 1, {
      transform: "translateX(-100px)",
      opacity: 0
    });

    const controller = this.$scrollmagic.controller;
    const scene = this.$scrollmagic
      .scene({
        triggerElement: ".head"
      })
      .setTween(tl)
      .addIndicators({ name: "1 (duration: 0)" }) // add indicators (requires plugin)
      .addTo(controller);
    this.$scrollmagic.addScene(scene);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.head {
  position: relative;
  > div {
    text-align: left;
    width: 300px;
    height: 300px;
    padding: 15px;
    font-size: 40px;
    background: orange;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    flex-direction: column;
    color: #fff;
    > div {
      transform: translateX(0);
      opacity: 1;
      &:last-child {
        margin-top: 30px;
        font-size: 15px;
        color: #000;
      }
    }
  }
}
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
    top: 100%;
  }
}
</style>
