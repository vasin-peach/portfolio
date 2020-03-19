<template>
  <div class="intro-component">
    <div class="row">
      <div
        class="col-12 col-md-6 intro-left intro-float p-2 pr-sm-3 pr-md-4 pr-lg-5"
      >
        <IntroCard :options="introCards[2]" />
        <IntroCard :options="introCards[3]" class="card-highlight" />
      </div>
      <div
        class="col-12 col-md-6 intro-right intro-float p-2 pl-sm-3 pl-md-4 pl-lg-5"
      >
        <IntroCard :options="introCards[1]" />
        <IntroCard :options="introCards[0]" />
      </div>
    </div>
  </div>
</template>

<script>
import IntroCard from "./IntroCard";
import $ from "jquery";
// import { TweenMax } from "gsap";
export default {
  name: "Intro",
  components: {
    IntroCard
  },
  data() {
    return {
      introCards: [
        {
          head: "VISION",
          title: "TAKE \rEVERY PROJECT \rAS A CHALLENGE",
          sub:
            "Create unique and custom made experience for client through design, creativity"
        },
        {
          head: "ABOUT",
          title: "FULL STACK DEVELOPER \r FREELANCE \nEXPERIENCE 3 Y+",
          sub: "building application and design website for leading companies.",
          text:
            "Also have experience in data science on university projects such as model articles classification data visualization with real-time frontend used D3.js, Tableau, PowerBI and data extraction from various sources (ex. LinkedIn, college board), looking for an opportunities to work in Full Stack and Data Science field as CO-OP and Internship"
        },
        {
          head: "BIO",
          title: "21 YEAR OLD WITH \rFULL OF PASSION TO \rDOING NEW THING ",
          sub:
            "My name is vasin sermsampan  or you can call me `Peach`,  I am 21 years old, studying data science and business analytic at kingmongkutt's Institute of Technology ladkrabang, ",
          text:
            "Now, I have experience in web Full-Stack area for 3 year, Working freelance in Thailand, accepting work from both domestic and foreign countries, my main skills include Coding / Creative / Art / UX & UI Design and Data Science."
        },
        {
          head: "WELCOME",
          title: "PEACH(ES)\nVASIN SERMSAMPAN",
          sub: "king mongkut's institute of technology ladkrabang"
        }
      ]
    };
  },
  mounted() {
    var _this = this;
    $(".intro-card-component").each(function() {
      const load1 = _this.$scrollmagic
        .scene({
          triggerElement: this,
          triggerHook: 0.8,
          reverse: false
        })
        .setClassToggle(this, "fade-in")
        .setTween(
          this,
          1,
          {
            css: {
              y: -50,
              opacity: 1
            }
          },
          {
            ease: "power4.easeOut"
          }
        );

      _this.$scrollmagic.addScene(load1);
    });

    const scene1 = this.$scrollmagic
      .scene({
        triggerElement: "body",
        triggerHook: 0,
        duration: "100%"
      })
      .setTween(".intro-left", {
        y: "-10vh"
      });

    const scene2 = this.$scrollmagic
      .scene({
        triggerElement: "body",

        // {0,0.5,1} - animations starts from {top,center,end} of window
        triggerHook: 0,

        // Duration of animation
        duration: "100%"
      })
      .setTween(".intro-right", {
        y: "-30vh"
      });

    this.$scrollmagic.addScene(scene1);
    this.$scrollmagic.addScene(scene2);
  }
};
</script>

<style lang="scss" scroped>
@import "@scss/media";
@import "@scss/color";
.intro-component {
  > div {
    margin-top: 150px;
    position: relative;
  }

  .mask {
    position: absolute;
    z-index: 4;
    img {
      width: 100%;
    }
  }

  .intro-right {
    margin-top: -25vh;

    @include sm {
      margin-top: 150px;
      &:last-child {
        margin-top: 0;
      }
    }
  }

  .intro-float {
    transform: matrix(1, 0, 0, 1, 0, 0);
    .intro-card-component {
      margin-bottom: 100px;
      @include md {
        margin-bottom: 70px;
      }
    }
  }

  .card-highlight {
    .intro-card {
      background-color: $yellow1;
      .card-title {
        color: $dark1 !important;
        text-shadow: 0 1px $dark1 !important;
        -webkit-text-fill-color: none !important;
        mix-blend-mode: initial;
      }
    }
  }
}
</style>
