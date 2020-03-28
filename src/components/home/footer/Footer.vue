<template>
  <div class="footer-component fade-in">
    <div class="row">
      <div class="col-12">
        <div class="intro-wrapper">
          <div class="intro-head">
            <span></span>
            <span>CONTACT</span>
          </div>
          <div class="intro-card">
            <div class="card-title">
              dev.vasin@gmail.com
            </div>
            <div class="card-sub">
              Name: Vasin Sermsampan <br />
              Nickname: Peach <br />
              Tel: 092-464-4891
            </div>
          </div>
        </div>
        <div class="card-text ">
          <a href="https://github.com/vasin-peach" target="_blank"
            ><img src="@images/icon/github.svg"
          /></a>
          <a
            href="https://www.linkedin.com/in/vasin-sermsampan/"
            target="_blank"
            ><img src="@images/icon/linkedin.svg"
          /></a>
          <a href="https://www.facebook.com/PeachesTH" target="_blank"
            ><img src="@images/icon/fb.svg"
          /></a>
          <a href="https://line.me/ti/p/~shinasaki" target="_blank">
            <img src="@images/icon/line.svg"
          /></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import IntroCard from "../intro/IntroCard";
export default {
  name: "FooterComponent",
  components: {
    // IntroCard
  },
  data() {
    return {
      introCards: [
        {
          head: "CONTACT",
          title: "dev.vasin@gmail.com",
          sub:
            "Create unique and custom made experience for client through design, creativity"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.footer-component {
  margin-top: 200px;
}
@import "@scss/color";
@import "@scss/media";
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
}

.card-text {
  padding: 20px 30px;
  font-weight: lighter;
  font-size: 20px;
  color: $white1;
  background: $white1;
  // display: inline-block;
  border-bottom: 3px solid $yellow1;
  img {
    width: 50px;
    margin-right: 30px;
    transition: opacity 0.3s ease-out;
    &:hover {
      opacity: 0.8;
    }
  }
  @include md {
    font-size: 18px;
    img {
      width: 30px;
      margin-right: 20px;
    }

    > div {
      text-align: center;
    }
  }
}
</style>
