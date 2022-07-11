<template>
  <div class="row room-equipment">
    <div class="col-6">
      <div class="h2">客房設備</div>
      <span> Room Equipment</span>
      <div class="equipment-icon d-flex flex-row justify-content-around px-3 mt-5">
        <div>
          <img src="@/assets/images/icon/Wifi.svg" alt="">
          <p>WIFI</p>
        </div>
        <div>
          <img src="@/assets/images/icon/Breakfast.svg" alt="">
          <p>免費早餐</p>
        </div>
        <div>
          <img src="@/assets/images/icon/Tea.svg" alt="">
          <p>茶具組</p>
        </div>
        <div>
          <img src="@/assets/images/icon/Coffee.svg" alt="">
          <p>手磨咖啡</p>
        </div>
        <div>
          <img src="@/assets/images/icon/Bathtub.svg" alt="">
          <p>獨立浴缸</p>
        </div>
      </div>
      <div class="equipment-list">
        <ul>
          <li>50"電視 </li>
          <li>拖鞋</li>
          <li>記憶枕</li>
          <li>洗髮精</li>
          <li>手沖熱水壺</li>
        </ul>
        <ul>
          <li>冷暖氣系統</li>
          <li>浴袍</li>
          <li>羽絨枕</li>
          <li>沐浴精</li>
          <li>全天候除濕系統</li>
        </ul>
        <ul>
          <li>TOTO免治馬桶</li>
          <li>牙刷組</li>
          <li>小冰箱</li>
          <li>MINI BAR</li>
        </ul>

      </div>
      
    </div>
    <div class="col-6">
      <img class="w-100" src="@/assets/images/Room2.jpg" alt="">
    </div>
  </div>
</template>

<script>
// export default {
//   props: {
//     obj: {
//       type: Object,
//       required: false,
//       default: function () {
//         return { 
//           title: '',
//           content: '',
//           template: ''  
//         }
//       }
//     }
//   },
//   data() {
//     return {
//     }
//   },
//   methods: {
//   }
// }

</script>

<style scoped lang='scss'>
$SansTC: 'Noto Sans TC', sans-serif;
$Serif: serif,'Noto Serif TC';

.room-equipment {
  margin: 100px 50px;
}

.equipment-icon {
  img {
    height: 25px;
  }
}
.equipment-list {
  margin-right: 0;
  ul{
    display: inline-block;
    margin: 20px;
  }
}


</style>