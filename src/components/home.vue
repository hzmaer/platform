<template>
 <div class="main">
   <bannerList></bannerList>
   <fastTab></fastTab>
   <h3>猜你喜欢</h3>
   <homeList></homeList>
   <homeFoot></homeFoot>
 </div>
</template>
<script>
import bannerList from './Banner.vue'
import fastTab from './Entrance.vue'
import homeList from './Homelist.vue'
import homeFoot from './Homefoot.vue'
export default {
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

