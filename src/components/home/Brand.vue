<template>
  <div class="brand-component">
    <div>
      <div class="title">VASIN SERMSAMPAN</div>
      <div class="sub">FULL STACK DEVELOPER</div>
    </div>
  </div>
</template>

<script>
import { TimelineMax } from "gsap";
export default {
  name: "Brand",
  mounted() {
    var tl = new TimelineMax({
      delay: 0
    });
    tl.from(
      ".brand-component > div",
      1,
      {
        height: "200"
      },
      {
        ease: "power4"
      }
    );
    tl.from(".brand-component > div .title", 1, {
      x: "-50px",
      opacity: 0
    });
    tl.from(".brand-component > div .sub", 1, {
      x: "-50",
      opacity: 0
    });

    tl.play();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@scss/color";
.brand-component {
  height: 300px;
  position: relative;
  > div {
    box-shadow: 0 0 1px 0px $white1;
    text-align: left;
    width: 400px;
    height: 300px;
    padding: 15px 30px;
    font-size: 50px;
    background: $yellow1;
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
        font-size: 25px;
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
