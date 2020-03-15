<template>
  <div class="intro-component">
    <div class="row m-0">
      <div class="intro-wrapper col-6 pr-5">
        <div class="intro-head">
          <span></span>
          <span>ABOUT</span>
        </div>
        <div class="intro-card">
          <div class="card-title">
            FULL STACK DEVELOPER<br />
            FREELANCE <br />EXPERIENCE 3 Y+
          </div>
          <div class="card-sub">
            building application and design website for leading companies.
          </div>
          <div class="card-text">
            Also have experience in data science on university projects such as
            model articles classification data visualization with real-time
            frontend used D3.js, Tableau, PowerBI and data extraction from
            various sources (ex. LinkedIn, college board), looking for an
            opportunities to work in Full Stack and Data Science field as CO-OP
            and Internship
          </div>
        </div>
      </div>
      <div class="intro-wrapper col-6 pl-5">
        <div class="intro-head">
          <span></span>
          <span>ABOUT</span>
        </div>
        <div class="intro-card">
          <div class="card-title">
            FULL STACK DEVELOPER<br />
            FREELANCE <br />EXPERIENCE 3 Y+
          </div>
          <div class="card-sub">
            building application and design website for leading companies.
          </div>
          <div class="card-text">
            Also have experience in data science on university projects such as
            model articles classification data visualization with real-time
            frontend used D3.js, Tableau, PowerBI and data extraction from
            various sources (ex. LinkedIn, college board), looking for an
            opportunities to work in Full Stack and Data Science field as CO-OP
            and Internship
          </div>
        </div>
      </div>
      <div class="intro-wrapper col-6 pr-5">
        <div class="intro-head">
          <span></span>
          <span>ABOUT</span>
        </div>
        <div class="intro-card">
          <div class="card-title">
            FULL STACK DEVELOPER<br />
            FREELANCE <br />EXPERIENCE 3 Y+
          </div>
          <div class="card-sub">
            building application and design website for leading companies.
          </div>
          <div class="card-text">
            Also have experience in data science on university projects such as
            model articles classification data visualization with real-time
            frontend used D3.js, Tableau, PowerBI and data extraction from
            various sources (ex. LinkedIn, college board), looking for an
            opportunities to work in Full Stack and Data Science field as CO-OP
            and Internship
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Intro",
  mounted() {},
  props: [
    {
      title: String,
      default: String
    },
    {
      sub: String,
      default: String
    },
    {
      text: String,
      default: String
    }
  ]
};
</script>

<style lang="scss" scroped>
@import "@scss/color";
.intro-component {
  .intro-head {
    display: flex;
    align-items: center;
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
    box-shadow: 0 0 5px 1px $white3;

    .card-title {
      font-size: 30px;
      color: $dark1;
    }

    .card-sub {
      font-size: 25px;
      color: $gray1;
      padding-bottom: 20px;
    }

    .card-text {
      font-weight: lighter;
      color: $dark1;
      font-size: 20px;
    }
  }
}
</style>
