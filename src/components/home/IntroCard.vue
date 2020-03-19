<template>
  <div class="intro-card-component">
    <div class="intro-wrapper">
      <div class="intro-head">
        <span></span>
        <span>{{ options.head }}</span>
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
.intro-card-component {
  opacity: 0;
  // .intro-card > div {
  //   transform: translate(-50px, 0);
  //   opacity: 0;
  // }
}
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
  background: rgba($color: $yellow2, $alpha: 0.1);
  background-image: url("~@images/circle5.png");
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center center;
  background-size: cover;

  .card-title {
    font-size: 35px;
    font-weight: bold;
    white-space: pre-wrap;
    word-wrap: break-word;
    font-family: inherit;
    color: $yellow1;
    mix-blend-mode: multiply;
    -webkit-text-fill-color: transparent;
    text-shadow: 0 1px $yellow1;
    @include lg {
      font-size: 30px;
    }
    @include md {
      font-size: 25px;
    }
  }

  .card-sub {
    font-size: 27px;
    color: $dark1;
    padding-bottom: 20px;
    color: $white1;
    mix-blend-mode: hard-light;
    text-shadow: 0 1px $yellow1;

    @include lg {
      font-size: 25px;
    }
    @include md {
      font-size: 20px;
    }
  }

  .card-text {
    font-weight: lighter;
    font-size: 20px;
    color: $white1;

    @include lg {
      font-size: 20px;
    }
    @include md {
      font-size: 18px;
    }
  }
}
</style>
