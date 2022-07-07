<template>
<footer>
  <div class="container">
    <div class="row pb-5">
      <div class="col-12 text-start">
        <router-link to="/">
          <img :src="image" alt="">
        </router-link> 
      </div>
    </div>
    <div class="row">
      <div class="col-5 text-start">
        <div class="pb-4">
          <h5>曉宅山</h5>
          <a href="https://www.google.com/maps/place/No.+49,+Shuqi+Rd,+Ruifang+District,+New+Taipei+City,+224/data=!4m2!3m1!1s0x345d4517c3fc4c0d:0xe86927fee414b4be?sa=X&ved=2ahUKEwjd343lqc_4AhUrmlYBHYq9Bh4Q8gF6BAgNEAE" target="blank">新北市瑞芳區豎崎路49號</a>
        </div>
        <div>
          <h5>曉宅山</h5>
          <a href="https://www.google.com/maps/place/No.+93,+Qiche+Rd,+Ruifang+District,+New+Taipei+City,+224/data=!4m2!3m1!1s0x345d4517c43e0851:0x10273a43aaf75f21?sa=X&ved=2ahUKEwiH9sD6qc_4AhVhp1YBHe5JCsIQ8gF6BAgLEAE" target="blank">新北市瑞芳區汽車路93號</a>
        </div>
      </div>
      <div class="col-5 text-start">
        <ul class="list-unstyled ">
          <li>
            <router-link to="/room-daybreak">曉宅山</router-link>
          </li>
          <li>
            <router-link to="/room-latebreak">暮宅山</router-link>
          </li>
          <li>
            <router-link to="/booking-rule">線上訂房</router-link>
          </li>
          <li>
            櫃檯服務時間 07:00-22:00</li>
          <li>
            聯絡電話 +886(03)000-0000</li>
          <li>
            <a href="#">service@daybreak.com</a>
          </li>
        </ul>
      </div>
      <div class="col-2 text-start">
        <ul class="list-unstyled ">
          <li>
            <router-link to="/about">關於曉宅山</router-link>
          </li>
          <li>
            <router-link to="/news">最新消息</router-link>
          </li>
          <li>
            <router-link to="/contact">聯繫我們</router-link>
          </li>
          <li>
            <router-link to="/booking-rule">訂房須知</router-link>
          </li>
          <li>
            <router-link to="/privacy">隱私權政策</router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</footer>

</template>

<script>

import image from "@/assets/images/small-logo.svg"

export default{
  data() {
    return {
      image: image
    }
  }
}
</script>


<style scoped lang="scss">
$SansTC: 'Noto Sans TC', sans-serif;
$Serif: serif,'Noto Serif TC';

footer{
  font-family: $Serif;
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