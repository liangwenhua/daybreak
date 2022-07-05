<template>

    <section >
    <div class="top-content d-flex flex-column justify-content-center ">
      <div class="text-center animate__animated animate__fadeInDown animate__slower ">
        
        <span>探索</span>
        <img src="@/assets/images/about-daybreak.svg" alt="">
      </div>
    </div>
  </section>

  <section class="about d-flex justify-content-center flex-wrap">
    <div class="container">
      <div class="row boutique-stay">
        <div class="col-6 p-5">
          <img src="@/assets/images/Room5.jpg" alt="">
        </div>
        <div class="col-6">
          <h3>BOUTIQUE STAY IN <p>JUI FAN, TAIWAN</p></h3>
          <div class="text">
            <p>
              來到有黃金山城美譽的九份，四季風貌都迷人。<br>
              春天上山喝茶，藝術家工藝創作之美令人流連忘返 ; <br>
              夏季遠眺北海岸，舊街老城故事走訪不完 ; <br>
              秋天漫步在迷宮般的山城萬巷，悲情城市滋養出活靈感 ; <br>
              冬天捧著熱茶眺望山雨朦朧，詩意讓旅程更難忘。
            </p>
            <p>
              曉宅山提供給旅人一塊，專屬九份四季的休憩場域，<br>
              凝聚了旅途中的驚喜，沉澱了在都市躁動的心，<br>
              一日光景，亦或空間一隅的溫柔，<br>
              都讓停留在此刻的心，全然呼吸，全然感受，
            </p>
            <p>
            「最喜歡的生活樣貌」 —— 原來在這裡，被我找到。
            </p>
          </div>
        </div>
      </div>

      <div class="row reconnect ">
        <div class="col-6 pt-5">
            <h3>RECONNECT <br>WITH NATURE</h3>
        </div>
        <div class="col-6 ">
          <img src="@/assets/images/Room5.jpg" alt="">
        </div>
      </div>
    
      <div class="row brand mx-5">
        <div class="col-6">
          <img src="@/assets/images/daybreak-white.svg" alt="">
          <p class="py-5" >
            最貼近九份山城的湛藍大海，<br>以混凝土牆與冷色調特殊塗料，架構出日式侘寂樣態的建築風貌。<br>低飽和度的色彩減輕視覺壓力，凝造溫暖紓壓的空間氛圍;<br>方正與規律的空間配置，適合崇尚減 法哲學的旅人。<br>一望無際的落日景緻，也為此趟旅行迎來獨有的 魔幻時刻。
          </p>
          <img src="@/assets/images/latebreak-white.svg" alt="">
          <p class="py-5" > 
            具有山城的天生地理優勢，俯瞰藍海、依偎高山。<br>具有諾大空間 的簡約日式建築，<br>每一處角落都能捕捉 360 度零死角的溫暖日光。<br>登高望遠的海景令人瞬間忘記塵囂熙攘 ; 蟄伏而來的海風，<br>如溫柔的絮語安撫了都市靈魂。<br>適合想走進自然、渴望共享愜意 時分的成群旅客。
          </p>
        </div>
        
    </div>
  </div>
    

  </section>

  


</template>

<script>

</script>

<style scoped lang="scss">
$SansTC: 'Noto Sans TC', sans-serif;
$Serif: serif,'Noto Serif TC';
// *{border: 1px solid #000;}

.top-content {
  width: 100vw;
  height: 100vh;
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
.about {
  background-color: #6A6A6A;
  position: relative;
  
  
  .text {
    position: absolute;
    margin-top: 230px;
    letter-spacing: 1px;
    color: rgb(173, 173, 173);
  }
  .boutique-stay{
    margin-top: -200px;
    img {
      width: 550px;
      height: 335px;
    }
    h3 {
      position: absolute;
      font-size: 45px;
      line-height: 1;
      font-family: $Serif;
      font-weight: bold;
      letter-spacing: 1px;
      text-align: right;
      margin: 70px -180px 0;
      p {
        font-size: 32px;
      }
    }
  }
  
  .reconnect {
    margin-top: 150px;
    h3 {
      font-size: 45px;
      line-height: 1;
      font-family: $Serif;
      font-weight: bold;
      letter-spacing: 1px;
      text-align: right;
    }
    img{
      width: 410px;
      height: 550px;
    }
  }

  .brand {
    margin-top: -150px;
    margin-bottom: 200px;
    img {
      height: 66px;
    }
    p {
      letter-spacing: 1px;
      color: rgb(173, 173, 173);
    }
  }
}
</style>


  