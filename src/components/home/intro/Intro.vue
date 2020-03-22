<template>
  <div class="intro-component">
    <div class="row">
      <div
        class="col-12 col-md-6 intro-left intro-float p-2 pr-sm-3 pr-md-4 pr-lg-5"
      >
        <IntroCard :options="introCards[2]" />
        <IntroCard :options="introCards[0]" />
      </div>
      <div
        class="col-12 col-md-6 intro-right intro-float p-2 pl-sm-3 pl-md-4 pl-lg-5"
      >
        <IntroCard :options="introCards[1]" />
        <IntroCard :options="introCards[3]" class="card-highlight" />
      </div>
    </div>
  </div>
</template>

<script>
import IntroCard from "./IntroCard";
export default {
  name: "IntroComponent",
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
            "Now, have experience in web Full-Stack area for 3 year, Working freelance in Thailand, accepting work from both domestic and foreign countries, my main skills include Coding / Creative / Art / UX & UI Design and Data Science."
        },
        {
          head: "WELCOME",
          title: "PEACH(ES)\nVASIN SERMSAMPAN",
          sub:
            "King Mongkut's Institute Of Technology Ladkrabang  \nData Science And Business Analytics",
          img: require("@images/profile.jpg")
        }
      ]
    };
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

    @include sm {
      margin-top: 80px;
    }
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

      @include sm {
        margin-bottom: 50px;
      }
    }
  }

  .card-highlight {
    .intro-card {
      background-color: rgba($color: $yellow1, $alpha: 0.9);
      .card-title {
        color: $dark1 !important;
        text-shadow: 0 1px $dark1 !important;
        -webkit-text-fill-color: none !important;
        mix-blend-mode: initial;
      }
      .card-sub {
        margin-bottom: 30px;
      }
    }
  }
}
</style>
