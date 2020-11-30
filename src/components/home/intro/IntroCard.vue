<template>
  <div class="intro-card-component fade-in">
    <div class="intro-wrapper">
      <div class="intro-head">
        <span></span>
        <span>{{ options.head }}</span>
      </div>
      <div class="intro-card">
        <div class="card-title">
          {{ options.title }}
        </div>
        <div class="card-sub">
          {{ options.sub }}
        </div>
        <div class="card-text">
          {{ options.text }}
          <div><img :src="options.img" /></div>
        </div>
        <div class="card-text" v-if="options.skills">
          <div v-for="field in options.skills" :key="field.name">
            <div
              class="font-weight-bold pb-2"
              style="cursor: pointer"
              v-b-toggle="`collapse-${field.name}`"
            >
              {{ field.name }}
              <b-icon-chevron-down />
            </div>
            <b-collapse :id="`collapse-${field.name}`">
              <div class="row ml-0">
                <div
                  v-for="skill in field.skill"
                  :key="skill"
                  class="skill px-3 rounded"
                >
                  {{ skill }}
                </div>
              </div>
            </b-collapse>
            <hr />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "IntroCardComponent",
  props: ["options"]
};
</script>

<style lang="scss" scoped>
@import "@scss/color";
@import "@scss/media";

.skill {
  cursor: pointer;
  margin: 5px;
  color: $dark2;
  background: $white2;
  transition: 0.3s ease-out;

  // &:first-child {
  //   margin-left: 0;
  // }
}
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

  .card-text {
    font-weight: lighter;
    font-size: 20px;
    color: $white1;

    > div {
      width: 100%;
      img {
        width: 100%;
      }
    }

    @include lg {
      font-size: 20px;
    }
    @include md {
      font-size: 18px;

      > div {
        text-align: center;
        img {
          width: 100%;
        }
      }
    }
  }
}
</style>
