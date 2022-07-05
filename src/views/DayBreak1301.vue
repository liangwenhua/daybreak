<template>
  <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="@/assets/images/Room3.jpg" class="d-block w-100" alt="">
      </div>
      <div class="carousel-item">
        <img src="@/assets/images/Room2.jpg" class="d-block w-100" alt="">
      </div>
      <div class="carousel-item">
        <img src="@/assets/images/Room2.jpg" class="d-block w-100" alt="">
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
</div>

<section class="container">
  <div class="d-flex justify-content-between">
    <img class="" src="@/assets/images/latebreak-black.svg" alt="">
    <div class="room-type ">
      1301
      <span class="room-name">雲湧</span>
    </div>
  </div>
  <div class="row">
    <div class="col-6">
      <div class="room-photo">
        <img class="w-100" src="@/assets/images/Room4.jpg" alt="">
      </div>
    </div>
    <div class="col-6 p-5">
      <div class="room-detal mb-3 pb-3">
        四人房 ｜ 16坪 ｜ 雙人床
      </div>
      <p>
        空間最寬闊、視野最漫無邊際的雙人房，<br>
        無條件擁有欣賞山城最美的視角，<br>
        能夠一整天什麼也不做，<br>
        就在房間裡，將時光美好地消耗。<br>
        沏茶、閱讀、觀海、對話、放空，<br>
        做什麼都好，怎樣都盡興。
      </p>
    </div>
  </div>

  <div class="row room-equipment">
    <div class="col-6">
      <div class="h2">客房設備</div>
      <span class="mx-5"> Room Equipment</span>
      <div class="equipment-list">
        <ul>
        <li>xxxx</li>
        <li>xxxx</li>
        <li>xxxx</li>
        <li>xxxx</li>
        <li>xxxx</li>
      </ul>
      <ul>
        <li>xxxx</li>
        <li>xxxx</li>
        <li>xxxx</li>
        <li>xxxx</li>
        <li>xxxx</li>
      </ul>
      <ul>
        <li>xxxx</li>
        <li>xxxx</li>
        <li>xxxx</li>
        <li>xxxx</li>
        <li>xxxx</li>
      </ul>

      </div>
      
    </div>
    <div class="col-6">
      <img class="w-100" src="@/assets/images/Room2.jpg" alt="">
    </div>
  </div>
  <div class="h2">加購服務</div>
  <div class="row">
    <div class="col-6">
      <div class="card mb-3" style="max-width: 540px;">
        <div class="row g-0">
          <div class="col-md-4">
            <img src="@/assets/images/Room2.jpg" class="img-fluid rounded-start" alt="...">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">餐飲推薦</h5>
              <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <p class="card-text"><small class="text-muted">詳細內容 > ></small></p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-6">
      <div class="card mb-3" style="max-width: 540px;">
        <div class="row g-0">
          <div class="col-md-4">
            <img src="@/assets/images/Room3.jpg" class="img-fluid rounded-start" alt="...">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">九份導覽</h5>
              <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <p class="card-text"><small class="text-muted">詳細內容 > ></small></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="mx-auto my-5 py-5" style="width: 95px;">
     <button type="button" class="btn btn-dark ">立即訂房</button>
  </div>
 


  

  
</section>
 
</template>

<script>

</script>

<style scoped lang="scss">
// *{
//   border: 1px solid #000;
// }
$SansTC: 'Noto Sans TC', sans-serif;
$Serif: serif,'Noto Serif TC';

.room-type {
  font-family: $Serif;
  font-size: 30px;
  margin-right: 30px;
  .room-name {
    font-size: 125px;
    
    font-weight: bold;
  }
}

.photo-group{
  img {
    width: 200px;
    height: 325px;
  }
}
.room-detal {
  border-bottom: 1px solid #000
}
.room-equipment {
  margin: 100px 50px;
}
.equipment-list {
  margin-right: 0;
  ul{
    display: inline-block;
    margin: 20px;
  }
}

  


</style>


  