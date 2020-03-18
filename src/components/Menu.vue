<template>
  <div class="menu-section">
    <div class="menu-wrapper">
      <a href="#" class="menu-item">
        <div class="brand">O</div>
      </a>
      <a href="#" class="menu-item">
        <img src="@images/icon/about.svg" />
      </a>
      <a href="#" class="menu-item ">
        <img src="@images/icon/code.svg" />
      </a>
      <a href="#" class="menu-item">
        <img src="@images/icon/contact.svg" />
      </a>
    </div>
  </div>
</template>

<script>
// import { TimelineMax } from "gsap";
export default {
  name: "Menu",
  mounted() {
    const GSAP = require("gsap");
    const { TimelineMax } = GSAP;
    var tl = new TimelineMax({
      delay: 0
    });
    tl.to(".menu-section", 1.5, {
      right: "0px"
    });

    tl.play();
  }
};
</script>

<style lang="scss" scoped>
@import "@scss/color";
@import "@scss/media";
.menu-section {
  position: fixed;
  top: 0;
  right: -80px;
  z-index: 5;
  .menu-wrapper {
    position: relative;
    display: flex;
    flex-direction: column;
    box-shadow: 0 0 2px 0px $white1;

    @include md {
      flex-direction: row;
    }
    .menu-item {
      transition: all 0.3s ease-in-out;
      // min-width: 80px;
      display: flex;
      padding: 10px;

      &:first-child {
        background: $yellow1;
        border: 1px solid $yellow1;
      }

      &:hover {
        opacity: 0.5;
      }

      &.active {
        background: $yellow1;
        border-color: $yellow1;
      }
    }

    img {
      width: 50px;
      height: 50px;
      padding: 10px;
    }

    a {
      text-decoration: none;
    }

    .brand {
      width: 50px;
      height: 50px;
      padding: 15px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-weight: bold;
      font-size: 50px;
      color: $white1;
    }
  }
}
</style>
