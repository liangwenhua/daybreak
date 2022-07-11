<template>

    <section >
    <div class="top-content d-flex flex-column justify-content-center ">
      <div class="text-center animate__animated animate__fadeInDown animate__slower ">
        <span> 最新消息 News</span>
      </div>
    </div>
  </section>

  <section class="news text-center">
    <div class="container wrap">
      
      <div class="news-content">
        <div class="fs-4 pb-2"></div>
        <div v-html="allArticle.template"></div>
        {{allArticle}}
        <div class="pb-2">2021 / 3 / 20</div>
        <p>在開放第二階段至四月份的訂房後，不到兩週的時間內已全數客滿。為了服務向隅的朋友們，我們預計將於三月十二日中午12點起，開放五月到九月的線上訂房日期。在開房日期。在開放第二階段至四月份的訂房後，不到兩週的時間內已全數客滿。為了服務向隅的朋友們，我們預計將於三月十二日中午12點起，開放五月到九月的線上訂房日期。</p>

        <p>在開放第二階段至四月份的訂房後，不到兩週的時間內已全數客滿。為了服務向隅的朋友們，我們預計將於三月十二日中午12點起，開放五月到九月的線上訂房日期。在開放第二階段至四月份的訂房後，不到兩週的時間內已全數客滿。為了服務向隅的朋友們，我們預計將於三月十二日中午12點起，開放五月到九月的線上訂房日期。</p>
        <img class="w-100 my-5" src="@/assets/images/Room5.jpg" alt="">
        <p>在開放第二階段至四月份的訂房後，不到兩週的時間內已全數客滿。為了服務向隅的朋友們，我們預計將於三月十二日中午12點起，開放五月到九月的線上訂房日期。在開放第二階段至四月份的訂房後，不到兩週的時間內已全數客滿。為了服務向隅的朋友們，我們預計將於三月十二日中午12點起，開放五月到九月的線上訂房日期。</p>


      </div>
    </div>
  </section>
</template>



<script>
import data from "@/data/blog.js"
export default {
  props: ['obj'],
  data() {
    return {
      inputData: data,
      allArticle: {}
    }
  },
  methods: {
    findArticle() {
      for (let i = 0; i < this.inputData.length; i++) {
        console.log(this.inputData[i].id,this.$route.params.id)
        if(this.inputData[i].id === parseInt(this.$route.params.id)){
          this.allArticle = this.inputData[i]
        }
      }
    }
    
  },
  mounted(){
    console.log(this.$route);
    this.findArticle()

  }
}




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
  .wrap {
    background-color: rgb(222, 222, 222);
    width: 100%;
    margin-top: -300px;
    padding: 100px 50px;
    letter-spacing: 0.5px;
    line-height: 2;
    .news-content {
      padding: 0 150px;
    }
  }
}
</style>


  