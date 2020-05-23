<template>
  <div class="work-card-component">
    <div class="row m-0 dummy-bg">
      <div
        class="col base-item d-none d-lg-block"
        :style="{ background: options.bg.mask1 }"
      >
        <div></div>
      </div>
      <div class="col base-item">
        <div :style="{ background: options.bg.mask2 }"></div>
      </div>
      <div class="col base-item d-none d-lg-block"><div></div></div>
      <div class="col base-item d-none d-md-block">
        <div v-webp:bg="options.bg.mask3"></div>
      </div>
    </div>
    <div class="row m-0 base" v-webp:bg="options.bg.base">
      <div class="col base-item d-none d-lg-block"></div>
      <div class="col base-item">
        <div
          class="base-detail"
          :style="{
            color: width > 767 ? options.textColor : '#fff'
          }"
        >
          <div class="base-title">
            <div></div>
            <p>{{ options.desc }}</p>
            <div></div>
          </div>
          <div class="base-tag row">
            <div class="col d-flex flex-row flex-wrap">
              <div v-for="tag in options.tags" :key="tag">
                {{ tag }}
              </div>
            </div>
          </div>
          <div class="base-color row">
            <div class="col d-flex flex-row flex-wrap">
              <div v-for="color in options.colors" :key="color">
                <div class="color-item" :style="{ background: color }"></div>
              </div>
            </div>
          </div>
          <div class="base-button">
            <a
              :href="options.link"
              target="_blank"
              class="button-ghost"
              :class="{ dark: options.button == 'dark' && width > 767 }"
              >VIEW</a
            >
          </div>
        </div>
      </div>
      <div class="col base-item d-none d-lg-block"></div>
      <div class="col base-item d-none d-md-block"></div>
    </div>
    <div class="row title">
      <div class="col">
        <div class="title-text" :style="{ color: options.titleColor }">
          {{ options.title }}
        </div>
      </div>
      <div class="col d-none d-md-block"></div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
export default {
  name: "WorkCardComponent",
  props: ["options"],
  data() {
    return {
      width: $(window).width()
    };
  }
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
  .dummy-bg {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    .base-item {
      padding-left: 0;
      padding-right: 0;
      &:nth-child(1) {
        > div {
          min-height: 650px;
          @include sm {
            min-height: 400px;
          }
        }
      }
      &:nth-child(2) {
        > div {
          min-height: 520px;
          bottom: 20%;
          @include sm {
            display: none;
          }
        }
      }
      &:nth-child(4) {
        > div {
          min-height: 520px;
          bottom: 20%;
          background-size: cover;
          background-repeat: no-repeat;
        }
      }

      // min-height: calc(650px - 130px);
    }
  }
  .base {
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 0 0;
    .base-item {
      min-height: 650px;
      @include sm {
        min-height: 500px;
        background-color: rgba($color: $dark1, $alpha: 0.5);
      }
    }

    .base-title {
      padding-top: 2rem;
      > p {
        margin-top: 1rem;
        font-weight: bold;

        @include lg {
          font-size: 13px;
        }
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
      > div > div {
        margin: 0 5px;
      }
    }

    .base-color {
      margin-bottom: 2rem;
      .color-item {
        width: 20px;
        height: 20px;
        border-radius: 50%;
        margin: 0 5px;
        margin-bottom: 10px;
      }
    }
  }

  .title {
    position: absolute;
    bottom: 5%;
    left: 0;
    right: 0;

    @include md {
      bottom: 10%;
    }

    .title-text {
      font-size: 60px;
      text-align: center;
      font-weight: bold;

      @include lg {
        font-size: 40px;
      }

      @include md {
        font-size: 40px;
      }
      @include sm {
        font-size: 35px;
      }
    }
  }
}
</style>
