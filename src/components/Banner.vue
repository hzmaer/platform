<template>
  <div id="banner">
    <div class="page-swipe">
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="item in listItem" :key="item.id">
        <img :src="item.img" width="100%" height="100%"/>
      </mt-swipe-item>
    </mt-swipe>
    </div>
  </div>
</template>
<script>
  export default {
    props: ['listItem']
  }
</script>
<style lang="scss" scoped>
  .page-swipe{
    .mint-swipe{height: 400px;color: #fff;font-size: 30px;text-align: center;margin-bottom: 20px;}
    .mint-swipe-item{line-height: 200px;width:100%;}
    }
  .page-swipe-desc {text-align: center;color: #666;margin-bottom: 5px;}
  .mint-swipe-indicator{background: #000;opacity: 0.2;margin: 0 3px;}
  .mint-swipe-indicator.is-active {background: #46e196;}
</style>

