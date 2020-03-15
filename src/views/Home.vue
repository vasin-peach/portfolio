<template>
  <div class="home-container container">
    <Brand />
    <Introduct />
  </div>
</template>

<script>
import Brand from "@components/home/Brand";
import Introduct from "@components/home/Introduct";
export default {
  name: "Home",
  components: {
    Brand,
    Introduct
  }
};
</script>

<style scoped lang="scss">
.home-container {
}
</style>
