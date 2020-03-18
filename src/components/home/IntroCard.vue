<template>
  <div class="intro-card-component">
    <div class="intro-wrapper">
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
  margin-bottom: 10px;
  color: $white1;

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
  box-shadow: 0 0 2px 0px $white1;
  // background: $white1;
  background-image: url("~@images/circle2.png");
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-position: center;
  .card-title {
    font-size: 40px;
    font-weight: bold;
    white-space: pre-wrap;
    word-wrap: break-word;
    font-family: inherit;
    // background-image: url("~@images/circle2.png");
    background-clip: text;
    color: $yellow1;
    mix-blend-mode: exclusion;
    -webkit-text-fill-color: transparent;
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-position: center;
    text-shadow: 0 1px;
    @include lg {
      font-size: 30px;
    }
    @include md {
      font-size: 25px;
    }
  }

  .card-sub {
    font-size: 30px;
    color: $dark1;
    padding-bottom: 20px;

    background-image: url("~@images/circle4.png");
    background-clip: text;
    color: $white1;
    mix-blend-mode: exclusion;
    -webkit-text-fill-color: transparent;
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-position: center;
    text-shadow: 0 1px;

    @include lg {
      font-size: 25;
    }
    @include md {
      font-size: 20px;
    }
  }

  .card-text {
    // font-weight: lighter;
    font-size: 25px;

    background-image: url("~@images/circle4.png");
    background-clip: text;
    color: $white1;
    mix-blend-mode: difference;
    -webkit-text-fill-color: transparent;
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-position: center;
    text-shadow: 0 1px $yellow1;

    @include lg {
      font-size: 20px;
    }
    @include md {
      font-size: 18px;
    }
  }
}
</style>
