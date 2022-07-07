<template>
<div class="booking">
  <div class="container">
    <div class="welcome text-white">
      <div class="h2 pb-3">
        訂房須知<p>Welcome to Daybreak</p>
    </div>
      <p>
        親愛的房客，
        歡迎您來到曉宅山，在這裏，我們有多種不同的房型，來滿足您對
        於休憩的需求，無論是一張床、一面窗、一盞燈、還是一段靜謐的
        泡澡時光，都將在這趟旅程中，為您所擁有。
        為求更好的入住品質，請詳讀以下的訂房須知，也歡迎提供您寶貴
        的意見與回饋，我們曉宅山見。
      </p>
      <button type="button" class="btn btn-outline-light rounded-0 fs-5 ">線上訂房系統 Booking 
      </button>
    </div>
    

    <div class="accordion accordion-flush " id="booking">
      <div class="accordion-item bg-transparent text-white pt-5">
        <h2 class="accordion-header" id="flush-headingOne">
          <button class="accordion-button collapsed bg-transparent text-white shadow-none " type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
            <div class="h3">訂房須知 </div>
          </button>
        </h2>
        <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#booking">
          <div class="accordion-body">
            <ol>
              <li>預約訂房:為保障權益,請於訂房後三日內匯入訂金,訂金為房價三成(春節為房價全額)。</li>
              <li>匯款後請致電民宿,並告知帳號後五碼及匯款金額,以利查帳。</li>
            </ol>
            <ul>
              <li>電話訂房後，若未能在指定時間內匯出款項者，本民宿自動取消訂房，並不另行通知，不便之處敬請見諒。</li>
              <li>不接受包棟 (為維護左右鄰居住家安寧，若有包棟，民宿有權要求退房)</li>
              <li>進房時間：下午03:00後。</li>
              <li>退房時間：上午11:00前。</li>
              <li>入住時，請出示身份證件辦理登記，並繳清餘款。</li>
              <li>如為春節期間、國定連續假日或當日訂房住宿者，請付100%訂金才算完成訂房手續。</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="accordion-item bg-transparent text-white pt-5">
        <h2 class="accordion-header" id="flush-headingTwo">
          <button class="accordion-button collapsed bg-transparent text-white shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
            <div class="h3">入住須知</div>
          
          </button>
        </h2>
        <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#booking">
          <div class="accordion-body">
            <ul>
              <li>住宿皆含每人一份早餐。</li>
              <li>本民宿依住宿人數提供盥洗用品。</li>
              <li>為維持全館住宿品質，請依訂房人數前來住宿。</li>
              <li>加人價格：500元 / 人，加棉被：100元 / 件。</li>
              <li>外出時，請配合鎖好門窗及關閉電器用品。</li>
              <li>個人貴重物品，請自行妥善保管，如有遺失，恕不負責，敬請見諒。</li>
              <li>退房時，請記得繳回房間鑰匙。</li>
              <li>為了維護其他房客權益，禁帶貓,狗,雞,鴨,山羊,浣熊,果子狸,綠鬣蜥,銀背大猩猩,殺人鯨等所有活體寵物入住。</li>
              <li>門禁時間：10:30pm。</li>
              <li>為維護住宿品質，本館全面禁止吸煙、酗酒、賭博、喧譁、炊煮，及從事不正當行為，若有違反，民宿有權進行要求退房，謝謝您的</li>
              <li>若不慎造成本民宿設施、家具損壞，請照價賠償。</li>
              <li>為確保住宿房客品質及安寧，請大家用心配合，造成不便請見諒！</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="accordion-item bg-transparent text-white pt-5">
        <h2 class="accordion-header" id="flush-headingThree">
          <button class="accordion-button collapsed bg-transparent text-white border-bottom shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
            <div class="h3">取消訂房政策</div>
            
          </button>
        </h2>
        <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
          <div class="accordion-body">
            <ul>
              <li>※若因天災導致交通中斷無法前往，可全額退費，滯留期間房價以 5 折 計算。</li>
              <li>PS：以上訂金意指為當日總房價之50%。</li>
              <li>旅客於住宿日前14天取消訂房，不另扣取消費。</li>
              <li>旅客於住宿日前10~13天取消訂房扣訂金總金額 30 %。</li>
              <li>旅客於住宿日前7~9天取消訂房扣訂金總金額 50 %。</li>
              <li>旅客於住宿日前4~6天取消訂房扣訂金總金額 60 %。</li>
              <li>旅客於住宿日前2～3天取消訂房扣訂金總金額 70 %。</li>
              <li>旅客於住宿日前1天取消訂房扣訂金總金額 80 %。</li>
              <li>旅客於住宿日當天取消或怠於通知者沒收訂金總金額 100 %。</li>
              ※ 住宿日前3日內不得延期(除人力不可抗拒因素外),延期訂金保留3個月(僅限<li>延期一次)， 並請重新訂房，恕不另行通知。</li>
              <li>訂金為首日總房價之50%，於當日再付清剩餘房租即可。</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  
  

          

          
</template>

<script>

</script>

<style scoped lang="scss">
$SansTC: 'Noto Sans TC', sans-serif;
$Serif: serif,'Noto Serif TC';


.booking {
  width: 100%;
  height: auto;
  background-color: rgb(136, 136, 136);
  background: url('@/assets/images/bg-booking-rule.jpg');
  background-position: center;
  padding: 200px 0;
}
.welcome {
  font-family: $Serif;
  text-align: center;
  padding: 100px 250px;
  letter-spacing: 2px;
  line-height: 2;
  p {
    margin: 20px;
  }
  button {
    letter-spacing: 2px;
    padding: 10px 50px;
    margin-top: 30px;
  }
} 
.accordion {
  font-family: $Serif;
}


</style>

  