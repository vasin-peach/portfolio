<template>
  <div class="intro-component">
    <div class="row">
      <div
        class="col-12 col-md-6 intro-left intro-float pr-1 pr-sm-3 pr-md-4 pr-lg-5"
      >
        <IntroCard :options="introCards[0]" />
        <IntroCard :options="introCards[0]" />
      </div>
      <div
        class="col-12 col-md-6 intro-right intro-float pl-1 pl-sm-3 pl-md-4 pl-lg-5"
      >
        <IntroCard :options="introCards[0]" />
        <IntroCard :options="introCards[0]" />
      </div>
    </div>
  </div>
</template>

<script>
import IntroCard from "./IntroCard";
export default {
  name: "Intro",
  components: {
    IntroCard
  },
  data() {
    return {
      introCards: [
        {
          title: "FULL STACK DEVELOPER \r FREELANCE \nEXPERIENCE 3 Y+",
          sub: "building application and design website for leading companies.",
          text:
            "Also have experience in data science on university projects such as model articles classification data visualization with real-time frontend used D3.js, Tableau, PowerBI and data extraction from various sources (ex. LinkedIn, college board), looking for an opportunities to work in Full Stack and Data Science field as CO-OP and Internship"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scroped>
.intro-component {
  > div {
    margin-top: 100px;
  }

  .intro-right {
    margin-top: -100px;
  }

  .intro-float {
    .intro-card-component {
      margin-bottom: 100px;
    }
  }
}
</style>
