<template>
<section class="contact text-white">
  <div class="container">
      <div class="contact-title text-center">
        <p>聯繫我們</p> <span class="fs-2">Contact Us</span>
        <ul class="my-5 fs-5 list-unstyled">
          <li>櫃檯服務時間 07:00-22:00</li>
          <li>聯絡電話 +886(03)000-0000</li>
          <li>service@daybreak.com</li>
        </ul>
      </div>

      <img class="w-100" src="@/assets/images/map.png" alt="">

      <div class="row d-flex transportation">
        <div class="col-5">
          <div class="h1 mb-5">位置 Location</div>
          <div class="h4 py-2">
            曉宅山 DAYBREAK
          </div>
          <p>新北市瑞芳區汽車路93號 <br> No. 93, Qiche Rd, Ruifang District</p>

          <div class="h4 py-2">
            山宅山 LATEREAK
          </div>
          <p>新北市瑞芳區汽車路93號 <br> No. 93, Qiche Rd, Ruifang District</p>
        </div>
        <div class="col-7">
          <div class="h1 mb-5">交通 Transportation</div>
          
          <div class="row">
            <div class="col-2">
              火車
            </div>
            <div class="col-10">
              <p>
                台北車站出發<br>
                搭乘區間車/莒光號/自強號等火車，搭至瑞芳火車站<br>
                瑞芳火車站搭乘788，827或825公車（僅有假日行駛）或計程車，直達九份派出所
              </p>
            </div>
          </div>
          <div class="row">
            <div class="col-2">
              公車
            </div>
            <div class="col-10">
              <p>
                捷運忠孝復興站2號出口<br>
                搭乘1062號公車， 直達九份派出所<br>
                板橋府中捷運站 | 捷運西門站 | 台北車站<br>
                搭乘965號公車， 直達九份派出所
              </p>
            </div>
          </div>
          <div class="row">
            <div class="col-2">
              開車
            </div>
            <div class="col-10">
              國道1號 - 大華系統交流道 - 省道臺62線 - 瑞芳交流道下 - 市道102線
            </div>
          </div>
        </div>
      </div>
      
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


.contact{
  background: url('@/assets/images/bg-contact.jpg');
  background-size: cover;
  background-position: center;
  padding: 100px 0;
  .contact-title{
    font-family: $Serif;
    font-size: 30px;
    letter-spacing: 5px;
    font-weight: 500;
    padding: 120px;
  }
  .contact-content {
    letter-spacing: 2px;
    line-height: 2;
  }
  .transportation {
    font-family: $Serif;
    letter-spacing: 2px;
    line-height: 2;
    padding: 100px 0;


  }
  
}


</style>


  