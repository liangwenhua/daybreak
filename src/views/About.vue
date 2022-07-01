<template>

    <section >
    <div class="top-content d-flex flex-column justify-content-center ">
      <div class="text-center animate__animated animate__fadeInDown animate__slower ">
        
        <span>探索</span>
        <img src="@/assets/images/small-logo.svg" alt="">
      </div>
    </div>
  </section>

  <section class="about d-flex justify-content-center flex-wrap">
    <div class="row">
      <div class="col-6 p-5">
        <img src="@/assets/images/Room5.jpg" alt="">
      </div>
      <div class="col-6 p-5">
        <div class="text">
          <h3>BOUTIQUE STAY IN <br>JUI FAN, TAIWAN</h3>
          <p>來到有黃金山城美譽的九份，四季風貌都迷人。 春天上山喝茶，藝術家工藝創作之美令人流連忘返 ; 夏季遠眺北海岸，舊街老城故事走訪不完 ; 秋天漫步在迷宮般的山城萬巷，悲情城市滋養出活靈感 ; 冬天捧著熱茶眺望山雨朦朧，詩意讓旅程更難忘。</p>
          <p>
            曉宅山提供給旅人一塊，專屬九份四季的休憩場域，
            凝聚了旅途中的驚喜，沉澱了在都市躁動的心，
            一日光景，亦或空間一隅的溫柔，
            都讓停留在此刻的心，全然呼吸，全然感受，
          </p>
          <p>
          「最喜歡的生活樣貌」 —— 原來在這裡，被我找到。
          </p>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-6 p-5">
          <h3>RECONNECT <br>WITH NATURE</h3>
      </div>
      <div class="col-6 p-5 ">
        <img class="reconnect-img" src="@/assets/images/Room5.jpg" alt="">
      </div>
    </div>

    
    
    


  </section>

  


</template>

<script>

</script>

<style scoped lang="scss">
$SansTC: 'Noto Sans TC', sans-serif;
$Serif: serif,'Noto Serif TC';
*{border: 1px solid #000;}

.top-content {
  width: 100vw;
  height: 100vh;
  background: center center url("@/assets/images/bg-index.jpg");
  span {
    color:white;
    font-family: $Serif;
    font-size: 30px;
    margin: 70px;
  }

}
.about {
  background-color: #757575;
  img {
    width: 550px;
    height: 335px;
  }
  .text {
    width: 420px;
  }
  .reconnect-img{
    width: 410px;
    height: 550px;

  }
}
</style>


  