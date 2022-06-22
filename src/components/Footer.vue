<template>
<!-- footer -->
<footer>
  <div class="container">
    <div class="row pb-5">
      <div class="col-12 text-start">
        <div>
          <img :src="image" alt="">
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-5 text-start">
        <div class="pb-4">
          <h5>曉宅山</h5>
          <a href="#">新北市瑞芳區豎崎路49號</a>
        </div>
        <div>
          <h5>曉宅山</h5>
          <a href="#">新北市瑞芳區豎崎路49號</a>
        </div>
      </div>
      <div class="col-5 text-start">
        <ul class="list-unstyled ">
          <li><a href="#">曉宅山</a></li>
          <li><a href="#">暮宅山</a></li>
          <li><a href="#">線上訂房</a></li>
          <li>櫃檯服務時間 07:00-22:00</li>
          <li>聯絡電話 +886(03)000-0000</li>
          <li><a href="#">service@daybreak.com</a></li>
        </ul>
      </div>
      <div class="col-2 text-start">
        <ul class="list-unstyled ">
          <li><a href="#">關於曉宅山</a></li>
          <li><a href="#">最新消息</a></li>
          <li><a href="#">聯繫我們</a></li>
          <li><a href="#">訂房須知</a></li>
          <li><a href="#">隱私權政策</a></li>
        </ul>
      </div>
    </div>
  </div>
</footer>

</template>

<script>

import image from "@/assets/images/2logo-large.png"

export default{
  data() {
    return {
      image: image
    }
  }
}
</script>


<style lang="scss">
//footer
footer{
  padding: 100px 0;
  
  background-color: #333;
  color:white;
  h5{
    letter-spacing: 10px;
    padding-bottom: 7px;
  }
  li{
    padding-bottom: 15px;
    letter-spacing: 5px;
  }
  a{
    // border: 1px solid rgb(255, 0, 0);
    padding: 7px 0;
    letter-spacing: 5px;
    color: white;
    text-decoration: none;
    transition: letter-spacing .2s;
   
    &:hover {
      
      color: rgb(195, 195, 195);
      border-bottom: 1px solid rgb(195, 195, 195);
    }
  }
}
</style>