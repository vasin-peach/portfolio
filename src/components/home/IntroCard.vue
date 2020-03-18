<template>
  <div class="intro-card-component">
    <div class="intro-wrapper ">
      <div class="intro-head">
        <span></span>
        <span>ABOUT</span>
      </div>
      <div class="intro-card">
        <div class="card-title">
          {{ options.title }}
        </div>
        <div class="card-sub">
          {{ options.sub }}
        </div>
        <div class="card-text">
          {{ options.text }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "IntroCard",
  props: ["options"]
};
</script>

<style lang="scss" scoped>
@import "@scss/color";
@import "@scss/media";
.intro-head {
  display: flex;
  align-items: center;
  span:first-child {
    display: inline-block;
    width: 10%;
    height: 3px;
    background: $yellow1;
    margin-right: 10px;
  }
}
.intro-card {
  padding: 20px 30px;
  padding-bottom: 70px;
  padding-top: 40px;
  box-shadow: 0 0 5px 1px $white3;

  .card-title {
    font-size: 30px;
    color: $dark1;

    @include md {
      font-size: 25px;
    }
  }

  .card-sub {
    font-size: 25px;
    color: $gray1;
    padding-bottom: 20px;

    @include md {
      font-size: 20px;
    }
  }

  .card-text {
    font-weight: lighter;
    color: $dark1;
    font-size: 20px;

    @include md {
      font-size: 18px;
    }
  }
}
</style>
