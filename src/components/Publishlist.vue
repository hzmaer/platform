<template>
  <div id="entrance">
    <div class="e-list" v-for="item in items">
      <router-link :to="item.url">
        <img :src="item.imgUrl" alt="">
        <p>{{item.title}}</p>
      </router-link>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        items: [
          {
            url: '/Publishbuy',
            imgUrl: 'static/images/icon1.png',
            title: '买摊位'
          }, {
            url: '/sell',
            imgUrl: 'static/images/icon2.png',
            title: '卖摊位'
          }, {
            url: '/employ',
            imgUrl: 'static/images/icon3.png',
            title: '找工人'
          }, {
            url: '/job',
            imgUrl: 'static/images/icon4.png',
            title: '找工作'
          }
        ]
      }
    }
  }
</script>
<style lang="scss" scoped>
  #entrance{display: flex;}
  .e-list{flex:1;-webkit-box-flex:1;
    img{margin:0 auto;display: inherit;}
    p{color:#5c5c5c;font-size: 1.8rem;margin-top:1rem;width:100%;text-align: center;}
    a{display:inline-block;text-align: center;width:100%;}
  }
</style>
