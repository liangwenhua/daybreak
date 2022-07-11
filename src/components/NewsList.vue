<template>
  <div class="row d-flex align-items-center px-3 pb-5">
    <img class="cover col-4" src="@/assets/images/Room3.jpg" alt="">
    <div class="text col-8 text-start px-5">
      <div class="fs-4 pb-2">
        {{obj.title}}
      </div>
      <div class="pb-2">
        {{obj.date}}
      </div>
      <p>{{obj.content}}</p>
      <button type="button" class="btn btn-outline-light my-2 rounded-0 ">
        <router-link class="text-reset text-decoration-none" :to="`/news/${obj.id}`">更多內容</router-link>
   
      </button>
    </div>
  </div>
</template>

<script>
// import { reactive } from '@vue/reactivity'

export default {
  props: {
    obj: {
      type: Object,
      required: true,
      default: function () {
        return { 
          title: '',
          content: '',
          template: ''  
        }
      }
    }
  },
  data() {
    return {
    }
  },
  methods: {
  }
}

</script>

<style scoped lang='scss'>
$SansTC: 'Noto Sans TC', sans-serif;
$Serif: serif,'Noto Serif TC';


</style>