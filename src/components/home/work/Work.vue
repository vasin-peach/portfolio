<template>
  <div class="work-component fade-in">
    <swiper
      ref="workSwiper"
      class="swiper"
      :options="swiperOption"
      @slide-next-transition-start="slideNext()"
      @slide-prev-transition-start="slidePrev()"
    >
      <swiper-slide v-for="work in works" :key="work.title">
        <WorkCard :options="work" />
      </swiper-slide>
      <div
        class="swiper-button-prev swiper-button-white"
        slot="button-prev"
      ></div>
      <div
        class="swiper-button-next swiper-button-white"
        slot="button-next"
      ></div>
    </swiper>
    <div class="row m-0 work-container">
      <div class="col-12 col-md-6  d-none d-md-block"></div>
      <div class="col-12 col-md-6 col-lg-3 work-menu ">
        <div class="menu-wrapper">
          <div class="w-100">
            <div>
              <transition name="slide-fade" mode="out-in">
                <div :key="menu.data.title" class="menu-title">
                  {{ menu.data.title }}
                </div>
              </transition>
            </div>
            <div class="menu-progress">
              <div class="progress" :style="{ width: menu.currentWidth + '%' }">
                <transition name="slide-fade2" mode="out-in">
                  <span :key="menu.current"
                    >{{ menu.current }}/{{ menu.size }}</span
                  >
                </transition>
              </div>
            </div>
          </div>
          <div class="menu-pagination">
            <div class="row m-0">
              <div
                class="col"
                @click="slidePrev(true)"
                :class="{ disable: menu.current == 1 }"
              >
                PREV
              </div>
              <a :href="menu.data.link" class="col">VIEW</a>

              <div
                class="col"
                @click="slideNext(true)"
                :class="{ disable: menu.current == menu.size }"
              >
                NEXT
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-3 d-none d-lg-block"></div>
    </div>
  </div>
</template>

<script>
import WorkCard from "./WorkCard";
export default {
  name: "WorkComponent",
  components: { WorkCard },
  data() {
    return {
      swiperOption: {
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      },
      works: [
        {
          title: "ITCAMP 14",
          link: "itcamp14",
          desc: "GETTING TO KNOW 'IT' CHOOSE THE PATH TO UNIVERSITY",
          tags: ["#Space", "#Camp", "#Parallax"],
          colors: ["#040413", "#0836e0", "#EF4647", "#ffffff"],
          bg: {
            base: require("@images/work/itcamp/bg1.png"),
            mask1: "#313095",
            mask2: "#3F3EA1",
            mask3: require("@images/work/itcamp/bg2.jpg")
          }
        },
        {
          title: "ITCAMP 15",
          link: "itcamp14",
          desc: "GETTING TO KNOW 'IT' CHOOSE THE PATH TO UNIVERSITY",
          tags: ["#Space", "#Camp", "#Parallax"],
          colors: ["#040413", "#0836e0", "#EF4647", "#ffffff"],
          bg: {
            base: require("@images/work/itcamp/bg1.png"),
            mask1: "#313095",
            mask2: "#3F3EA1",
            mask3: require("@images/work/itcamp/bg2.jpg")
          }
        },
        {
          title: "ITCAMP 16",
          link: "itcamp14",
          desc: "GETTING TO KNOW 'IT' CHOOSE THE PATH TO UNIVERSITY",
          tags: ["#Space", "#Camp", "#Parallax"],
          colors: ["#040413", "#0836e0", "#EF4647", "#ffffff"],
          bg: {
            base: require("@images/work/itcamp/bg1.png"),
            mask1: "#313095",
            mask2: "#3F3EA1",
            mask3: require("@images/work/itcamp/bg2.jpg")
          }
        }
      ],
      menu: {
        current: 1,
        currentWidth: "100%",
        data: "ITCAMP 14",
        size: 1,
        width: "100%"
      }
    };
  },
  mounted() {
    this.menu.size = this.works.length;
    this.menu.width = 100 / this.menu.size;
    this.updateCurrent();
  },
  computed: {
    swiper() {
      return this.$refs.workSwiper.$swiper;
    }
  },
  methods: {
    slideNext(update) {
      if (this.menu.current == this.menu.size) return;
      if (update) this.swiper.slideTo(this.menu.current, 1000, false);
      this.menu.current += 1;
      this.updateCurrent();
    },
    slidePrev(update) {
      if (this.menu.current == 1) return;
      if (update) this.swiper.slideTo(this.menu.current - 2, 1000, false);
      this.menu.current -= 1;
      this.updateCurrent();
    },
    updateCurrent() {
      this.menu.currentWidth = this.menu.current * this.menu.width;
      this.menu.data = this.works[this.menu.current - 1];
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@scss/color";
@import "@scss/media";

.slide-fade-enter-active {
  transition: all 0.7s ease-in;
}
.slide-fade-leave-active {
  transition: all 0.3s ease-out;
}
.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateX(10px);
  opacity: 0;
}

.slide-fade2-enter-active {
  transition: all 0.7s ease-in;
}
.slide-fade2-leave-active {
  transition: all 0.3s ease-in;
}
.slide-fade2-enter,
.slide-fade2-leave-to {
  transform: translateX(-10px);
  opacity: 0;
}

.work-component {
  margin-top: -100px;
  position: relative;

  @include sm {
    margin-top: 0;
  }
}
.work-container {
  position: absolute;
  left: 0;
  right: 0;
  bottom: -10%;
  height: 30%;
  z-index: 5;

  @include sm {
    position: initial;
    height: 30%;
  }

  .work-menu {
    background: $white1;
    color: $dark1;
  }

  .work-menu {
    .menu-wrapper {
      min-height: 200px;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: row;
      flex-wrap: wrap;
      .menu-title {
        font-weight: bold;
      }
      .menu-pagination {
        font-weight: bold;
        .col {
          cursor: pointer;
          transition: opacity 0.3s ease-out, transform 0.3s ease-out;
          &.disable {
            color: $gray1;
          }
          &:nth-child(2) {
            font-size: 20px;
            text-decoration: underline;
            color: $yellow1;
            transform: translateY(-2px);
          }
          &:hover {
            &:nth-child(1):not(.disable) {
              opacity: 0.8;
              transform: translateX(-5px);
            }
            &:nth-child(2) {
              opacity: 0.8;
              transform: translateY(-5px);
            }
            &:nth-child(3):not(.disable) {
              opacity: 0.8;
              transform: translateX(5px);
            }
          }
        }
      }
      .menu-progress {
        height: 20px;
        background: $dark2;
        width: 100%;
        border-radius: 30px;
      }

      .progress {
        transition: 1s ease-out;
        position: relative;
        background: $yellow1;
        height: 20px;
        border-radius: 30px;

        span {
          display: block;
          position: absolute;
          right: 0;
          font-weight: bold;
          color: $white1;
          height: 20px;
          line-height: 20px;
          padding-right: 10px;
          font-size: 15px;
        }
      }

      // span {
      //   width: 20%;
      //   position: absolute;

      //   &:first-child {
      //     top: 10px;
      //   }

      //   &:last-child {
      //     bottom: -10px;
      //   }
      // }
    }
  }
}
</style>
