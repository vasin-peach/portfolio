<template>
  <div class="intro-component">
    <div class="row">
      <div
        class="col-12 col-md-6 intro-left intro-float  pr-sm-3 pr-md-4 pr-lg-5 "
      >
        <IntroCard :options="introCards[2]" />
        <!-- <IntroCard :options="introCards[0]" class="d-none d-md-block" /> -->
      </div>
      <div
        class="col-12 col-md-6 intro-right intro-float  pl-sm-3 pl-md-4 pl-lg-5"
      >
        <IntroCard :options="introCards[1]" class="d-none d-md-block" />
        <IntroCard
          :options="introCards[3]"
          class="card-highlight d-none d-md-block"
        />
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
          title: "FULL STACK DEVELOPER",
          sub:
            "Working as web fullstack for 3y+ experience in building application, design UX/UI for many leading companies",
          text:
            "- Strong expereince in all process of develop web application both frontend, backend. <br/>" +
            "- Familiar with design, created, test, maintain overall data management and process system. <br/>" +
            "- Interest in bigdata framework like hadoop, spark, scala <br/>" +
            "- Expereince in develop recommendation system with content based filtering to recommend career path based on user profile"
        },
        {
          head: "BIO",
          title: "",
          sub: "",
          text:
            "I am 21 years old, studying in data science and business analytic at KingMongkutt's institute of technology ladkrabang. Now working as a freelance fullstack developer, accepting work from both domestic and foreign countries,",
          skills: [
            {
              name: "Data skill:",
              skill: [
                "hadoop",
                "spark",
                "scala",
                "airflow",
                "dbms",
                "nosql",
                "firebase",
                "sklearn",
                "machine learning",
                "puppeteer",
                "selenium",
                "keras"
              ]
            },
            {
              name: "Infrastructure skill:",
              skill: [
                "git",
                "github actions",
                "gitlab ci",
                "ci/cd",
                "linux",
                "nginx",
                "aws",
                "gcp",
                "docker",
                "docker-compose",
                "semantic release",
                "reverse-proxy"
              ]
            },
            {
              name: "Developer skill:",
              skill: [
                "node",
                "vue",
                "next",
                "react",
                "typescript",
                "eslint",
                "express",
                "go",
                "python",
                "sass",
                "jest",
                "laravel"
              ]
            }
          ]
        },
        {
          head: "WELCOME",
          title: "PEACH(ES)\nVASIN SERMSAMPAN",
          sub:
            "King Mongkut's Institute Of Technology Ladkrabang  \nData Science And Business Analytics",
          img: require("@images/profile2.jpg")
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
