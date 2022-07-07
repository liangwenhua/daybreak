<template>

    <section >
    <div class="top-content d-flex flex-column justify-content-center ">
      <div class="text-center animate__animated animate__fadeInDown animate__slower ">
        <span> 最新消息 News</span>
      </div>
    </div>
  </section>

  <section class="news text-center">
    <div class="container">
      <component-news-list />
      <component-news-list />
      <component-news-list />
    </div>
</section>
</template>



<script>
import componentNewsList from "@/components/NewsList.vue";

export default {
  name: "App",
  components: {
    componentNewsList
  },
};
</script>

<style scoped lang="scss">
$SansTC: 'Noto Sans TC', sans-serif;
$Serif: serif,'Noto Serif TC';
// *{border: 1px solid #000;}

.top-content {
  width: 100vw;
  height: 70vh;
  background: center center url("@/assets/images/bg-about.jpg");
  span {
    color:white;
    font-family: $Serif;
    font-size: 30px;
    letter-spacing: 15px;
    font-weight: 300;
    margin: 20px;
  }
}
.news{
  font-family: $Serif;
  padding: 200px 0;
  background-color: #40403E;
  color:white;
}
</style>


  