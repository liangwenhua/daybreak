<template>
  <div class="rooms text-center py-5">
    <img src="@/assets/images/latebreak-white.svg" alt="">
    <p class="introduce ">最貼近九份山城的湛藍大海，以混凝土牆與冷色調特殊塗料，架構出 日式侘寂樣態的建築風貌<br>
    低飽和度的色彩減輕視覺壓力，凝造溫暖 紓壓的空間氛圍 ; 方正與規律的空間配置，適合崇尚減法哲學的旅人<br>
    一望無際的落日景緻，也為此趟旅行迎來獨有的魔幻時刻</p>

    <div class="row">
      <div class="col-12">
        <div class="d-flex flex-row  justify-content-center">
          <router-link  to="/room-daybreak/1301"      class="text-decoration-none" style="background-image: url('@/assets/images/Room4.jpg')">
            <div class="latebreak-img">
              <div class="img-overlay">
                <p>暮色</p>
              </div>
            </div>
          </router-link>
          <router-link  to="/room-daybreak/1301"      class="text-decoration-none">
            <div class="latebreak-img">
              <div class="img-overlay">
                <p>暮色</p>
              </div>
            </div>
          </router-link>
          <router-link  to="/room-daybreak/1301"      class="text-decoration-none">
            <div class="latebreak-img">
              <div class="img-overlay">
                <p>暮色</p>
              </div>
            </div>
          </router-link>
        </div>
      </div>

      <div class="col-12">
        <div class="d-flex flex-row  justify-content-center">
          <router-link  to="/room-daybreak/1301"      class="text-decoration-none">
            <div class="latebreak-img">
              <div class="img-overlay">
                <p>暮色</p>
              </div>
            </div>
          </router-link>
          <router-link  to="/room-daybreak/1301"      class="text-decoration-none">
            <div class="latebreak-img">
              <div class="img-overlay">
                <p>暮色</p>
              </div>
            </div>
          </router-link>
          <router-link  to="/room-daybreak/1301"      class="text-decoration-none">
            <div class="latebreak-img">
              <div class="img-overlay">
                <p>暮色</p>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </div>


   
  </div>
  <router-link to="/room-latebreak" class="explore d-flex justify-content-center">
    <!-- <span>探索</span> -->
    <img src="@/assets/images/latebreak-black.svg" alt="">
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
    background-image: url('@/assets/images/bg-latebreak.jpg');
    background-size: cover;
    background-position: center center;
    color: white;
    letter-spacing: 2px;

    img{
      margin-top: 270px;
    }
    p.introduce{
      line-height: 3;
      font-size: 16px;
      padding: 35px;
    }
  
    .title{
      font-size: 36px;
      font-family: $Serif;
      font-weight: bold;
    }
   
    .latebreak-img{
      // background-image: url('@/assets/images/Room4.jpg');
      // border: 1px solid #000;
      background-size: cover;
      background-position: center;
      width: 250px;
      height: 430px;
      margin: 15px;
      .img-overlay{
        background-color: rgb(0,0,0,.4);
      }
      p {
        color: white;
        font-size: 30px;
        font-family: $Serif;
        line-height: 430px;
        margin:auto
      }
      
    }
  }
  .explore{
    width: 100%;
    height: 350px;
    background-color: rgb(35, 35, 35);
    background-size: cover;
    background-image: url('@/assets/images/to-daybreak.jpg');
    background-position: center;
    background-position: bottom bottom;
    span {
      letter-spacing: 2px;
      color: white;
      text-decoration: none;

    }
    img{
      width: 400px;
    }
  }
</style>
  

