<template>
  <div class="rooms text-center py-5">
    <img src="@/assets/images/daybreak-black.svg" alt="">
    <p class="introduce ">最貼近九份山城的湛藍大海，以混凝土牆與冷色調特殊塗料，架構出 日式侘寂樣態的建築風貌<br>
    低飽和度的色彩減輕視覺壓力，凝造溫暖 紓壓的空間氛圍 ; 方正與規律的空間配置，適合崇尚減法哲學的旅人<br>
    一望無際的落日景緻，也為此趟旅行迎來獨有的魔幻時刻</p>

    <div class="row">
      <div class="col-6">
        <div class="room-type">
          <div class="d-flex justify-content-center">
          <router-link  to="/room-daybreak/1301" class="room-photo"></router-link>
          <router-link  to="/room-daybreak/1301" class="room-photo"></router-link>
        </div>
        <div class="title">雲湧</div>
          <p>視野漫無邊際的雙人房，欣賞山城最美的視角</p>
      </div>
        </div>
        
      <div class="col-6">
        <div class="room-type">
          <div class="d-flex justify-content-center">
          <div class="room-photo"></div>
          <div class="room-photo"></div>
        </div>
        <div class="title">苑裡</div>
          <p>開啟宅中私密的一扇門，擁有寧靜又放鬆的私人庭院</p>
      </div>

        </div>
        
    </div>

    <div class="row py-4">
      <div class="col-12 room-type">
        <div class="d-flex justify-content-center">
          <div class="room-photo"></div>
          <div class="room-photo"></div>
          <div class="room-photo"></div>
          <div class="room-photo"></div>
        </div>
        <div class="title">山澗</div>
          <p>放眼望去的綠色山巒，連呼吸都佈滿山間綠意</p>
      </div>
    </div>

    <div class="row">
      <div class="col-8">
        <div class="room-type">
          <div class="d-flex justify-content-center ">
          <div class="room-photo"></div>
          <div class="room-photo"></div>
          <div class="room-photo"></div>
        </div>
        <div class="title">霧起</div>
          <p>落地窗邊的煙雨朦朧，溫潤木質調的日系和室</p>
        </div>
      </div>
        
      <div class="col-4">
        <div class="room-type">
          <div class="d-flex justify-content-center">
          <div class="room-photo"></div>
        </div>
        <div class="title">穹蒼</div>
          <p>夜空星塵四人房</p>
        </div>
      </div>
    </div>
  </div>
  <router-link to="/room-latebreak" class="explore d-flex justify-content-center">
    <img src="@/assets/images/latebreak-white.svg" alt="">
  </router-link>

</template>

<script>
</script>

<style scoped lang="scss">
$SansTC: 'Noto Sans TC', sans-serif;
$Serif: serif,'Noto Serif TC';
// *{
//   border: 1px solid #000;
// }

  .rooms{
    width: 100%;
    height: auto;
    background-color: rgb(136, 136, 136);
    background-image: url('@/assets/images/daybreak-rooms-bg.jpg');
    background-size: cover;

    img{
      margin-top: 270px;
    }
    p.introduce{
      line-height: 3;
      font-size: 16px;
      letter-spacing: 0.2em;
      color: #262626;
      padding: 35px;
    }
    .room-type{
      background-color: rgba(0, 0, 0, 0.048);
      padding: 15px;
      // border: 1px solid rgb(255, 0, 0);
    }
    .title{
      font-size: 36px;
      font-family: $Serif;
      font-weight: bold;
    }
   
    .room-photo{
      background-image: url('@/assets/images/Room4.jpg');
      background-size: cover;
      background-position: center;
      width: 250px;
      height: 430px;
      margin: 15px;
      &:hover{
        opacity: 0.9;
      }
    }
  }
  .explore{
    width: 100%;
    height: 350px;
    background-color: rgb(35, 35, 35);
    background-size: cover;
    background-image: url('@/assets/images/to-latebreak.jpg');
    background-position: center;
    background-position: bottom bottom;
    img{
      width: 400px;
    }
  }
</style>
  

