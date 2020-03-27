<template>
  <div class="home-container container">
    <Brand />
    <div class="container-wrapper">
      <div class="intro-container">
        <Intro />
      </div>
      <div class="work-container">
        <Work />
      </div>
      <div class="h"></div>
    </div>
  </div>
</template>

<script>
import Brand from "@components/home/Brand";
import Intro from "@components/home/intro/Intro";
import Work from "@components/home/work/Work";

export default {
  name: "Home",
  components: {
    Brand,
    Intro,
    Work
  }
};
</script>

<style scoped lang="scss">
@import "@scss/color";
@import "@scss/media";
.h {
  height: 70vh;
}

.container-wrapper {
  padding-right: 72px;
  padding-left: 72px;
  border-left: 10px solid $dark1;

  @include md {
    padding: 30px;
    border: none;
  }

  @include sm {
    padding: 7px;
  }
}
</style>
