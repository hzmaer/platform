<template>
 <div class="main">
   <bannerList :list-item="urls"></bannerList>
   <fastTab></fastTab>
   <h3>猜你喜欢</h3>
   <homeList></homeList>
   <homeFoot></homeFoot>
 </div>
</template>
<script>
import bannerList from '../components/Banner.vue'
import fastTab from '../components/Entrance.vue'
import homeList from '../components/Homelist.vue'
import homeFoot from '../components/Homefoot.vue'
export default {
  data () {
    return {
      urls: [
        {
          img: '/static/images/banner01.jpg'
        },
        {
          img: '/static/images/banner02.jpg'
        },
        {
          img: '/static/images/banner03.jpg'
        }
      ]
    }
  },
  components: {
    bannerList: bannerList,
    fastTab: fastTab,
    homeList: homeList,
    homeFoot: homeFoot
  }
}
</script>
<style>
  .main h3{padding:1.5rem 1.5rem;}
</style>

