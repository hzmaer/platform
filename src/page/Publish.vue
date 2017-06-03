<template>
  <div class="publish">
  <div class="publish-head"><em></em><p>选择发布类别</p><a href="">我的发布</a></div>
  <fastTab></fastTab>
  <homeFoot></homeFoot>
  </div>
</template>
<script>
import fastTab from '../components/Publishlist.vue'
import homeFoot from '../components/Homefoot.vue'
export default {
  components: {
    fastTab: fastTab,
    homeFoot: homeFoot
  }
}
</script>
<style lang="scss" scoped>
#entrance{display: flex;margin: 1.5rem 0rem;}
.e-list{flex:1;-webkit-box-flex:1;}
.publish-head{display: flex;height: 4rem;line-height: 4rem;background: #f6f6f6;padding: 1.5rem;
 p{font-size: 2rem;color:#000000;flex:2;-webkit-box-flex:2;text-align: center;width:100%;}
 em{flex:1;-webkit-box-flex:1;}
 a{flex:1;-webkit-box-flex:1;display: inline-block;font-size: 1.5rem;color:#666666;text-align: right;}
}
</style>
