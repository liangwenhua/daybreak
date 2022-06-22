
<template >
<component-nav />
<!-- top-content -->
<section>
  <div class="top-content d-flex flex-column justify-content-center">
    <div>
      <img src="./assets/images/2logo-small.png" alt="">
    </div>
  </div>
</section>

<!-- intro -->
<section class="intro text-white">
  <div class="d-flex flex-row row align-items-end ">
    <p class="daybreak col-6 pb-5">DAYBREAK</p>
    <div class="col-6 text-start">
      <div class="h1 title">曉 宅 山</div>
        <p class="pt-4">
        山雨氤氳踏春泥 迎海初見曉宅山<br> <br> 
        Have a deep breath, find a day break
        <br><br>
        前有遼闊海面，後有高山屏障<br>
        旋繞在一年四季皆有不同風貌的山城九份<br>
        所有經過都成為與浮山水影的一期一會
        <br><br>
        凡是停留的旅客，緩步走進曉宅山 — 寂靜而溫柔的冷色調空間<br> 
        細緻地呼應日本侘寂美學 — 那靜謐平和又與無常共存的場域 <br> 
        曉宅山後方，佇立著另一番心情場景 — 二館暮宅山<br> 
        若說曉宅山遍佈靜謐，暮宅山則滿室舒心<br> 
        在曉暮兩處，能感受被陽光輕撫的暖意，綠意搖曳的朝夕變化<br> 
        空間與大自然攜手創造出的悠遠美好<br> 
        在此蹉跎的光陰，都成了永恆難忘
        </p>
      </div>
  </div>
  <div class="row d-flex justify-content-center">
    <div class="about col-6 ">
      <p>About DAYBREAK</p>
      <p class="nature pb-5">RECONNECT<br>WITH NATURE.</p>
      <p class="fs-6">
        致我們親愛的房客：<br><br>
      來到曉宅山，我們想將房間作為給您最好的款待
      有最適意的房間配置，最能展現山城之美的景緻之美，靜心而充滿樂趣
      讓每一位親愛的房客都能在這裡重新發現、與找回對生活的渴望與愜意<br><br>
      歡迎您來到   曉宅山
      </p>

    </div>

  </div>
  


</section>
<!-- NEWS -->
<section class="news">
  <div class="container">
    <div class="news-title">最新消息 News
    </div>

    <div class="news-group">
      <div class="news-list row d-flex align-items-center px-3 pb-5">
        <img class="cover col-4" src="./assets/images/Room3.jpg" alt="">
        <div class="text col-8 text-start ">
          <div class="fs-4 pb-2">
            四月訂房日期開放公告
          </div>
          <div class="pb-2">
            2021 / 3 / 20
          </div>
          <p>在開放第二階段至四月份的訂房後，不到兩週的時間內已全數客滿。為了服務向隅的朋友們，我們預計將於三月十二日中午12點起，開放五月到九月的線上訂房日期。</p>
        </div>
      </div>

      <div class="news-list row d-flex align-items-center px-3 pb-5">
        <img class="cover col-4" src="./assets/images/Room4.jpg" alt="">
        <div class="text col-8 text-start ">
          <div class="fs-4 pb-2">
            四月訂房日期開放公告
          </div>
          <div class="pb-2">
            2021 / 3 / 20
          </div>
          <p>在開放第二階段至四月份的訂房後，不到兩週的時間內已全數客滿。為了服務向隅的朋友們，我們預計將於三月十二日中午12點起，開放五月到九月的線上訂房日期。</p>
        </div>
      </div>

      <button type="button" class="btn btn-light m-5">查看更多</button>

    </div>
  </div>

</section>
<component-footer />
</template>


<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@300;400;500;700&family=Noto+Serif&family=Noto+Serif+TC:wght@200;400;600&display=swap');

$primary: #40403E;
$SansTC: 'Noto Sans TC', sans-serif;
// $SerifTC:'Noto Serif TC', serif;
$Serif: serif,'Noto Serif TC';
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}


*{
  margin: 0;
  padding: 0;
  // border: 0.5px solid #000;
  font-family: $Serif;
  
}



.top-content{
  width: 100vw;
  height: 100vh;
  background: center center url("./assets/images/bg-index.jpg");
}

// intro 
.intro{
  padding: 200px 0;
  background-color: $primary;
  .daybreak{
    font-size: 60px;
    letter-spacing: 15px;
    font-family: $Serif;
    font-weight: bold;
    color: #000000;
  }
  .title{
    font-family: $Serif;
    font-weight: bold;
  }
  p{
    font-size: 16px;
    letter-spacing: 3px;
    line-height: 2.5em;
    font-family: $SansTC;
    font-weight: 200;
  }
  .about { 
    padding-top: 200px;
    p{
      font-family: $Serif;

    }
  }
  .nature{
    font-size: 60px;
    line-height: 1;
    color: #000;
  }
}

//news
.news{
  // background: gray url("./assets/images/Room3.jpg") no-repeat right / 50vw 100%;
  
  background-image: url('./assets/images/Room3.jpg');
  Background-repeat: no-repeat;
  background-position: center center;
  background-size: 50%;
  background-size: contain;
  background:linear-gradient( 
    90deg,
    rgba(255, 0, 0, 0) 0%, 
    rgba(255, 0, 0, 0) 50%,
    rgb(55, 55, 55) 50%,
    rgba(55, 55, 55) 100%
    );
}
.news-title {
  position: relative;
  font-size: 50px;
  padding-bottom: 20px;
  margin-bottom: 100px;
  
  &::after{
  content: "";
  display: block;
  width: 140px;
  height: 2px;
  margin: 20px auto;
  background-color: #fff;
 
  }
  
  
  
}
.news{
  padding: 200px 0;
  background-color: $primary;
  color:white;
  
}






</style>

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
