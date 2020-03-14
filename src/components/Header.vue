<template>
  <div class="header-section">
    <div class="header-wrapper">
      <a href="#" class="header-item">
        <div class="brand">O</div>
      </a>
      <a href="#" class="header-item">
        <img src="@images/icon/about.svg" />
      </a>
      <a href="#" class="header-item ">
        <img src="@images/icon/code.svg" />
      </a>
      <a href="#" class="header-item">
        <img src="@images/icon/contact.svg" />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  mounted() {
    const scene = this.$scrollmagic
      .scene({
        triggerElement: ".header-section"
      })
      .setTween(".header-section", 0.5, {
        css: {
          right: "0px"
        }
      });

    this.$scrollmagic.addScene(scene);
  }
};
</script>

<style lang="scss" scoped>
@import "@scss/color";
.header-section {
  position: fixed;
  top: 0;
  right: -80px;

  .header-wrapper {
    position: relative;
    display: flex;
    flex-direction: column;
    .header-item {
      border: 1px solid $white3;
      transition: all 0.3s ease-in-out;
      min-width: 80px;
      display: flex;

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
      padding: 15px;
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
