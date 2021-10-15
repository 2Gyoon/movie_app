<template>
  <Header />
  <RouterView />
  <!--RouterView : 페이지가 바뀔 때 마다 바뀌는 부분-->
  <Footer />
</template>

<script>
import Header from "~/components/Header.vue";
import Footer from "~/components/Footer.vue";

export default {
  components: {
    Header,
    Footer
  },
};
</script>