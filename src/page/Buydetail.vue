<template>
  <div class="main">
    <detailpageHead></detailpageHead>
    <bannerList></bannerList>
    <detailpageTitle></detailpageTitle>
    <detailpageTextarea></detailpageTextarea>
    <div class="buy-detail-recommend">
    <h2>精选推荐</h2>
    <homeList></homeList>
    </div>
    <detailpageFoot></detailpageFoot>
  </div>
</template>
<script>
  import detailpageHead from '../components/Detailpagehead.vue'
  import bannerList from '../components/Banner.vue'
  import detailpageTitle from '../components/Detailpagetitle.vue'
  import detailpageTextarea from '../components/Detailpagetextarea.vue'
  import homeList from '../components/Homelist.vue'
  import detailpageFoot from '../components/Detailpagefoot.vue'
  export default {
    components: {
      detailpageHead: detailpageHead,
      bannerList: bannerList,
      detailpageTitle: detailpageTitle,
      detailpageTextarea: detailpageTextarea,
      homeList: homeList,
      detailpageFoot: detailpageFoot
    }
  }
</script>
<style lang="scss" scoped>
.main{background: #f6f6f6;}
.buy-detail-recommend{background: #ffffff;margin-top: 1.5rem;
  h2{font-size: 2rem;color:#000000;padding: 1.5rem;}
}
</style>

