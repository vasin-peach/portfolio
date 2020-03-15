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
export default {
  name: "Menu",
  mounted() {
    const scene = this.$scrollmagic
      .scene({
        triggerElement: ".menu-section"
      })
      .setTween(".menu-section", 1, {
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
.menu-section {
  position: fixed;
  top: 0;
  right: -80px;

  .menu-wrapper {
    position: relative;
    display: flex;
    flex-direction: column;
    .menu-item {
      border: 1px solid $white3;
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
