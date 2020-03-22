<template>
  <div class="work-card-component">
    <div class="row m-0 base">
      <div class="col base-item d-none d-lg-block"><div></div></div>
      <div class="col base-item">
        <div class="base-detail">
          <div class="base-title">
            <div></div>
            <p>GETTING TO KNOW "IT" CHOOSE THE PATH TO UNIVERSITY</p>
            <div></div>
          </div>
          <div class="base-tag row">
            <div class="col"># Space</div>
            <div class="col"># Camp</div>
            <div class="col"># Parallax</div>
          </div>
          <div class="base-color row">
            <div class="">
              <div class="color-item bg-dark2"></div>
            </div>
            <div class="">
              <div class="color-item bg-blue1"></div>
            </div>
            <div class="">
              <div class="color-item bg-red1"></div>
            </div>
            <div class="">
              <div class="color-item bg-white1"></div>
            </div>
          </div>
          <div class="base-button">
            <a href="#" class="button-ghost">VIEW</a>
          </div>
        </div>
      </div>
      <div class="col base-item d-none d-lg-block"><div></div></div>
      <div class="col base-item d-none d-md-block"><div></div></div>
    </div>
    <div class="row title">
      <div class="col">
        <div class="title-text">ITCAMP 14</div>
      </div>
      <div class="col d-none d-md-block"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "WorkCardComponent",
  props: ["options"]
};
</script>

<style lang="scss" scoped>
@import "@scss/color";
@import "@scss/media";
@import "@scss/button";
.work-card-component {
  position: relative;
  // background: $dark2;
  color: $white1;

  .base {
    .base-item {
      min-height: 60vh;
      &:nth-child(even) {
        background: rgba($color: $white1, $alpha: 0.1);
      }
      &:nth-child(odd) {
        background: rgba($color: $dark1, $alpha: 0.1);
      }
    }

    .base-title {
      padding-top: 2rem;
      > p {
        margin-top: 1rem;
        font-weight: bold;
      }
      > div {
        display: block;
        width: 100%;
        height: 2px;
        background: $yellow1;
      }
    }

    .base-tag {
      margin-top: 1rem;
      margin-bottom: 2rem;
    }

    .base-color {
      margin-bottom: 2rem;
      > div {
        margin: 0 10px;
      }
      .color-item {
        width: 20px;
        height: 20px;
        border-radius: 50%;
      }
    }
  }

  .title {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;

    @include md {
      bottom: 10%;
    }

    .title-text {
      font-size: 70px;
      text-align: center;
      font-weight: bold;

      @include md {
        font-size: 50px;
      }
    }
  }
}
</style>
