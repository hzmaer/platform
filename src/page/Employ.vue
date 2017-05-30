<template>
  <div id="banner">
    <div class="page-swipe">
    <mt-swipe :auto="4000">
      <mt-swipe-item class="slide1">1</mt-swipe-item>
      <mt-swipe-item class="slide2">2</mt-swipe-item>
      <mt-swipe-item class="slide3">3</mt-swipe-item>
    </mt-swipe>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  .page-swipe{
    .mint-swipe{height: 400px;color: #fff;font-size: 30px;text-align: center;margin-bottom: 20px;}
    .mint-swipe-item{line-height: 200px;background: #46e196;}
    .slide1{background-color: #0089dc;color: #fff;}
    .slide2 {background-color: #ffd705;color: #000;}
    .slide3 {background-color: #ff2d4b;color: #fff;}
  }
  .page-swipe-desc {text-align: center;color: #666;margin-bottom: 5px;}
  .mint-swipe-indicator{background: #000;opacity: 0.2;margin: 0 3px;}
  .mint-swipe-indicator.is-active {background: #46e196;}
</style>

