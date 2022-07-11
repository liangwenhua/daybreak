<template>
  <!-- top-content -->
  <section>
    <div class="top-content d-flex flex-column justify-content-center ">
      <div class="text-center animate__animated animate__fadeInDown animate__slower ">
        <img src="@/assets/images/large-logo.svg" alt="">
      </div>
    </div>
  </section>

  <!-- intro -->
  <section class="intro text-white">
    <div class="d-flex flex-row row align-items-end ">
      <p class="daybreak col-6 pb-5 text-center">DAYBREAK</p>
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
    <div class="row d-flex justify-content-center text-center">
      <div class="about col-6 ">
        <p>About DAYBREAK</p>
        <p class="nature pb-5">RECONNECT<br>WITH NATURE.</p>
        <p>致我們親愛的房客：</p>
        <p>
          來到曉宅山，我們想將房間作為給您最好的款待
          有最適意的房間配置，最能展現山城之美的景緻之美，靜心而充滿樂趣
          讓每一位親愛的房客都能在這裡重新發現、與找回對生活的渴望與愜意
        </p>
        <p>歡迎您來到 曉宅山</p>
        
      
      </div>
    </div>
  </section>

  <section class="room-carousel  text-center ">
    <div class="container">
      <img class="daybreak-logo" src="@/assets/images/daybreak-black.svg" alt="">
      <p>
        最貼近九份山城的湛藍大海，以混凝土牆與冷色調特殊塗料，架構出日式侘寂樣態的建築風貌<br>
      低飽和度的色彩減輕視覺壓力，凝造溫暖紓壓的空間氛圍 ; 方正與規律的空間配置，適合崇尚減法哲學的旅人<br>
      一望無際的落日景緻，也為此趟旅行迎來獨有的魔幻時刻
      </p>

      <div id="carouselExampleCaptions" class="carousel slide mx-auto pt-5" data-bs-ride="carousel">
        <div class="carousel-indicators d-none">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="@/assets/images/Room3.jpg" class="d-block w-100" alt="...">
            <div class="carousel-caption d-none d-md-block">
              <h5>穹

  蒼</h5>
              <p>Some representative placeholder content for the first slide.</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src="@/assets/images/Room3.jpg" class="d-block w-100" alt="...">
            <div class="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
              <p>位於一樓，適合閨中摯友與家庭旅客</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src="@/assets/images/Room3.jpg" class="d-block w-100" alt="...">
            <div class="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>位於一樓，適合閨中摯友與家庭旅客</p>
            </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>

      <div class="latebreak-slide">
        <img src="@/assets/images/latebreak-white.svg" alt="">
          <p class="text-white">
            最貼近九份山城的湛藍大海，以混凝土牆與冷色調特殊塗料，架構出日式侘寂樣態的建築風貌<br>
          低飽和度的色彩減輕視覺壓力，凝造溫暖紓壓的空間氛圍 ; 方正與規律的空間配置，適合崇尚減法哲學的旅人<br>
          一望無際的落日景緻，也為此趟旅行迎來獨有的魔幻時刻
          </p>
      </div>

      <div id="carouselExampleCaptions" class="carousel slide mx-auto pt-5" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="@/assets/images/Room3.jpg" class="d-block w-100" alt="...">
            <div class="carousel-caption d-none d-md-block">
              <h5>穹蒼</h5>
              <p>位於一樓，適合閨中摯友與家庭旅客<br>
              兩張諾大雙人床的上方，擁有即使不出門也能看見星星的夜空</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src="@/assets/images/Room3.jpg" class="d-block w-100" alt="...">
            <div class="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
              <p>位於一樓，適合閨中摯友與家庭旅客<br>
              兩張諾大雙人床的上方，擁有即使不出門也能看見星星的夜空</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src="@/assets/images/Room3.jpg" class="d-block w-100" alt="...">
            <div class="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>位於一樓，適合閨中摯友與家庭旅客<br>
              兩張諾大雙人床的上方，擁有即使不出門也能看見星星的夜空</p>
            </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  </section>


  <!-- NEWS -->
  <section class="news text-center">
    <div class="container">
      <div class="news-title">最新消息 News</div>
      <div class="news-group">
        <component-news-list 
          v-for="(item,index) in inputData" 
          :key="index" 
          :obj ="item" />
        <button type="button" class="btn btn-light m-5">查看更多</button>
      </div>
    </div>
  </section>
</template>

<script>
import componentNewsList from "@/components/NewsList.vue";
import data from "@/data/blog.js"

export default {
  name: "News",
  components: {
    componentNewsList
  },
  data() {
    return {
      inputData: data
    }
  },
};
</script>

<style scoped lang="scss">
// *{
//   border: 1px solid #000;
// }
  
$SansTC: 'Noto Sans TC', sans-serif;
$Serif: serif,'Noto Serif TC';
.top-content{
  width: 100vw;
  height: 100vh;
  background: center center url("@/assets/images/bg-index.jpg");
}
// intro 
.intro{
  padding: 200px 0;
  background-color: #40403E;
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
.room-carousel {
  width: 100%;
  height: auto;
  background-image: url('@/assets/images/mountain.png');
  background-size: cover;
  background-position: center;
  padding: 140px 0;
  
  p {
    letter-spacing: 2px;
    line-height: 2;
    
  }
  .carousel {
    width: 760px;
    
  }

  .latebreak-slide {
    padding-top: 500px;
  }


}

//news
.news{
  font-family: $Serif;
  // background: gray url("@/assets/images/Room3.jpg") no-repeat right / 50vw 100%;
  padding: 200px 0;
  background-color: #40403E;
  color:white;
  
  // background-image: url('@/assets/images/Room3.jpg');
  // Background-repeat: no-repeat;
  // background-position: center center;
  // background-size: 50%;
  // background-size: contain;
  // background:linear-gradient( 
  //   90deg,
  //   rgba(255, 0, 0, 0) 0%, 
  //   rgba(255, 0, 0, 0) 50%,
  //   rgb(55, 55, 55) 50%,
  //   rgba(55, 55, 55) 100%
  //   );
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

</style>
