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
              <a :href="menu.data.link" target="_blank" class="col">VIEW</a>

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
        },
        keyboard: true,
        speed: 1000
      },
      works: [
        {
          title: "SKILL MAPPING",
          link: "http://skill.kmitl.ac.th/",
          desc:
            "SKILL MAPPING PROVIDES A VIEW OF THE ENTIRE STUDY PLAN HOW EACH PART IS INVOLVED AND WHICH SKILLS ARE OPTIMAL BY VIRTUALIZE AND ANALYZE THOUGHT LINKEDIN DATA AND TEACHER IN EACH FACULTY",
          // tags: ["#Vue", "#Vuex", "#Scss", "#webpack", "#video"],
          textColor: "#5F5B57",
          titleColor: "#372A1E",
          button: "dark",
          colors: ["#DBDCE3", "#F47B3E", "#E35205"],
          bg: {
            base: require("@images/work/skill-mapping/bg.jpg"),
            mask1: "#E35205",
            mask2: "#fff",
            mask3: require("@images/work/skill-mapping/cover.jpg")
          }
        },
        {
          title: "JOB MATCHING",
          link: "#",
          desc:
            "JOB RECOMMENDATION SYSTEM (IT FIELD) USING THE TECHNIQUE OF DIVIDING CANDIDATE INTO SUB-DIVISIONS AND SUGGEST THE MOST SUITABLE JOB BY MATCHING PROFILE AND JOB-CONTENT",
          textColor: "#5F5B57",
          titleColor: "#FF7262",
          tags: [
            "#Content-based Filtering",
            "#NLP",
            "#Apache Airflow",
            "#Puppeteer",
            "#Scikit Lean"
          ],
          colors: ["#1A0C29", "#11BC7A", "#1ABCFE", "#AE75F7", "#F24E1E"],
          bg: {
            base: require("@images/work/job-recomm/bg.jpg"),
            mask1: "#1A0C29",
            mask2: "#fff"
          }
        },
        {
          title: "DEVCURATE",
          link: "https://www.devcurate.co/",
          desc:
            "LEADING PLATFORM THAT CURATES CAREER ADVANCEMENT OPPORTUNITIES FOR IMPACT-DRIVEN PEOPLE",
          // tags: ["#Vue", "#Vuex", "#Scss", "#webpack", "#video"],
          textColor: "fff",
          titleColor: "#f2f2f2",
          button: "white",
          colors: ["#5cc7d2", "#13293d", "#ffffff"],
          bg: {
            base: require("@images/work/devcurate/bg.jpg"),
            mask1: "#13293d",
            mask2: "#041423",
            mask3: ""
          }
        },
        {
          title: "VANDA",
          link: "https://www.vanda.video/",
          desc: "INTERVIEW ANYONE ANYTIME ANYWHERE",
          // tags: ["#Vue", "#Vuex", "#Scss", "#webpack", "#video"],
          textColor: "#3f115b",
          titleColor: "#041423",
          button: "dark",
          colors: ["#9a258f", "#3f115b", "#041423", "#ffffff", "#eea70b"],
          bg: {
            base: require("@images/work/vanda/bg.jpg"),
            mask1: "#9a258f",
            mask2: "#f2f2f2",
            mask3: ""
          }
        },
        {
          title: "TCAS ITKMITL",
          link: "https://tcas.it.kmitl.ac.th/",
          desc: "TCAS PORTFOLIO SUBMISSION AND EVALUATING SERVICE",
          // tags: ["#Vue", "#Vuex", "#Scss", "#webpack", "#video"],
          textColor: "#023145",
          titleColor: "#0889ff",
          button: "dark",
          colors: ["#023145", "#0889ff", "#ffffff"],
          bg: {
            base: require("@images/work/tcas/bg.jpg"),
            mask1: "#023145",
            mask2: "#f2f2f2",
            mask3: require("@images/work/tcas/bg2.jpg")
          }
        },
        {
          title: "ITCAMP 14",
          link: "https://itcamp14.netlify.com/",
          desc: "GETTING TO KNOW 'IT' CHOOSE THE PATH TO UNIVERSITY",
          tags: ["#Vue", "#Vuex", "#Scss", "#Webpack", "#Parallax"],
          textColor: "#fff",
          titleColor: "#fff",
          button: "white",
          colors: ["#040413", "#0836e0", "#EF4647", "#ffffff"],
          bg: {
            base: require("@images/work/itcamp/bg1.webp"),
            mask1: "#313095",
            mask2: "#3F3EA1",
            mask3: require("@images/work/itcamp/bg2.webp")
          }
        },
        {
          title: "CARS&COFFEE",
          link: "https://www.carsandcoffee.sg/certified-pre-owned-cars",
          desc:
            "WORKING ON DESIGN AND DEVELOPMENT 'PRE-OWNED CARS' WITH NUXT.JS AND USER REQUIREMENT TO NEED WEBSITE SUPPORT DYNAMIC SEO",
          tags: [
            "#Vue",
            "Nuxt",
            "#Scss",
            "#Webpack",
            "#Srollmagic",
            "#GSAP",
            "#Mobile"
          ],
          textColor: "#fff",
          titleColor: "#fff",
          button: "white",
          colors: ["#1e1e1e", "#f1d5b4", "#ffffff"],
          bg: {
            base: require("@images/work/cac/bg.jpg"),
            mask1: "#1e1e1e",
            mask2: "#9f8f7c",
            mask3: require("@images/work/cac/bg2.jpg")
          }
        },
        {
          title: "REVEALING",
          link: "https://rwc1995.netlify.app/",
          desc:
            "REVEALING CLINIC IS A CLINIC FOR AESTHETICS AND COSMETIC SURGERY, WORKING ON DESIGN AND DEVELOPMENT WEBSITE WITH VUE FRAMEWORK",
          tags: ["#Vue.js", "#Scss", "Webpack", "Slider"],
          textColor: "#1e1e1e",
          titleColor: "#cc214f",
          button: "dark",
          colors: ["#fedaa9", "#db8a86", "#faa8af"],
          bg: {
            base: require("@images/work/rwc/bg.jpg"),
            mask1: "#ff929d",
            mask2: "#fff",
            mask3: ""
          }
        },
        {
          title: "PROFILE SCRAPE",
          link: "https://github.com/vasin-peach/linkedin-profile-scraper",
          desc:
            "LINKEDIN PROFILE SCRAPER USE SELENIUM TO EXTRACT USER DATA INCLUDE [SKILL, EDUCATION, WORK POSITION, COMMON DATA]",
          tags: ["#Python", "#Selenium", "#BeautifulSoup"],
          textColor: "#fff",
          titleColor: "#fff",
          button: "white",
          colors: ["#0077B5", "#283E4A", "#f2f2f2"],
          bg: {
            base: require("@images/work/scraper/bg1.webp"),
            mask1: "#0077B5",
            mask2: "#283E4A",
            mask3: ""
          }
        },
        {
          title: "FUJIMAKI",
          link: "http://www.fujimaki.co.th/",
          desc:
            "'FUJIAMI STEEL THAILAND' A MANUFACTURER OF CUSTOM PLATES FOR ALL TYPES OF SPECIAL STEEL AND NON-FERROUS METAL",
          tags: ["#Vue", "#Scss", "#Webpack"],
          textColor: "#000",
          titleColor: "#EB2227",
          button: "dark",
          colors: ["#272727", "#EB2227", "#f2f2f2"],
          bg: {
            base: require("@images/work/fujimaki/bg1.webp"),
            mask1: "#272727",
            mask2: "#fff",
            mask3: require("@images/work/fujimaki/bg2.webp")
          }
        },
        {
          title: "HUAHEDKROB",
          link: "http://mayanakarn.com/",
          desc:
            "'MAYANAKARN' INTRODUCED THE NEW CHOICE FOR HEALTHY SNACKS TO THE MARKET.",
          tags: ["#Vue", "#Scss", "#Webpack"],
          textColor: "#000",
          titleColor: "#FE9B3C",
          button: "dark",
          colors: ["#0F0F0F", "#FE9B3C", "#486A48", "#f2f2f2"],
          bg: {
            base: require("@images/work/huahedkrob/bg1.webp"),
            mask1: "#0F0F0F",
            mask2: "#fff",
            mask3: require("@images/work/huahedkrob/bg2.webp")
          }
        },
        {
          title: "S&N CURTAIN",
          link: "https://sn-curtain.netlify.com/",
          desc:
            "ONLINE CURTAIN SALES SITE. SUPPORT PRODUCT MANAGEMENT, CARD PAYMENT, CONTENT MANAGEMENT.",
          tags: [
            "#Vue",
            "#Vuex",
            "#Scss",
            "#Webpack",
            "#Omise",
            "#Express",
            "#Socket.io",
            "#JWT",
            "#GCP",
            "#CI/CD (Gitlab)",
            "#Docker",
            "#MongoDB"
          ],
          textColor: "#000",
          titleColor: "#FFB42A",
          button: "dark",
          colors: ["#F4EB9C", "#25AAE1", "#E2556F", "#D9D9D9"],
          bg: {
            base: require("@images/work/sn-curtain/bg1.webp"),
            mask1: "#36334A",
            mask2: "#FFFFFF",
            mask3: require("@images/work/sn-curtain/bg2.webp")
          }
        },
        {
          title: "<LONGCODE>",
          link: "http://longcode.netlify.com/",
          desc:
            "SITE FOR PRACTICE PYTHON LANGUAGE IT CONSISTS OF EXERCISES THAT THE TEACHER CAN ADD BY HIMSELF.",
          tags: [
            "#Flask",
            "#Python",
            "#Vue",
            "#Vuex",
            "#Scss",
            "#Webpack",
            "#JWT"
          ],
          textColor: "#fff",
          titleColor: "#EB481B",
          button: "white",
          colors: ["#263237", "#EB481B", "#4C579E", "#f2f2f2"],
          bg: {
            base: require("@images/work/longcode/bg1.webp"),
            mask1: "#17121E",
            mask2: "#312931",
            mask3: require("@images/work/longcode/bg2.webp")
          }
        },

        {
          title: "NBR CLUB",
          link: "https://studentclub.netlify.com/",
          desc:
            "ONLINE CLUB REGISTRATION WEBSITE FOR NAWAMINTHRACHINUTHIT BENJAMARACHALAI SCHOOL",
          tags: [
            "#Vue",
            "#Vuex",
            "#Scss",
            "#Webpack",
            "#Express",
            "JWT",
            "Docker"
          ],
          textColor: "#000",
          titleColor: "#FFB42A",
          button: "dark",
          colors: ["#FFB42A", "#842B2D", "#3E486B", "#f2f2f2"],
          bg: {
            base: require("@images/work/studentclub/bg1.jpg"),
            mask1: "#842B2D",
            mask2: "#fff",
            mask3: require("@images/work/studentclub/bg2.jpg")
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
      if (this.menu.current == 1) {
        this.menu.currentWidth = 20;
      } else {
        this.menu.currentWidth = this.menu.current * this.menu.width;
      }
      this.menu.data = this.works[this.menu.current - 1];
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@scss/color";
@import "@scss/media";

.slide-fade-enter-active {
  transition: all 0.3s ease-in;
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
  transition: all 0.3s ease-in;
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
  margin-top: -30vh;
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
        transition: 1s ease-in-out;
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
          font-size: 13px;
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
