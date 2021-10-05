<template>
  <Header />
  <RouterView />
  <!--RouterView : 페이지가 바뀔 때 마다 바뀌는 부분-->
</template>

<script>
import Header from "~/components/Header.vue";

export default {
  components: {
    Header,
  },
};
</script>

<style lang="scss">
@import "~/scss/main.scss";
</style>