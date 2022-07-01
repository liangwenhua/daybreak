
<template >
  <component-nav />
  <router-view></router-view>
  <component-footer />
</template>

<script>
import componentNav from "./components/Nav.vue";
import componentFooter from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    componentNav,
    componentFooter,
  },
};
</script>

<style scoped lang="scss">
  // $primary: #40403E;
  

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
  // font-family: $Serif;
 
}
</style>
