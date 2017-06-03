<template>
  <div id="foot">
    <ul id="foot-icon">
      <li>
        <p>周女士
          <br>
          18888888888
        </p>
      </li>
      <li v-for="item in items">
        <router-link :to="item.url">
        <i class="icon iconfont" v-bind:class="item.iconClass"></i>
        <p class="name">{{item.name}}</p>
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script>

export default {
  data () {
    return {
      items: [
        {
          url: '/home',
          iconClass: 'icon-shouye-shouye',
          name: '电话'
        }, {
          url: '/fb',
          iconClass: 'icon-fabu',
          name: '聊天'
        }, {
          url: '/grzx',
          iconClass: 'icon-gerenzhongxin',
          name: '分享'
        }
      ]
    }
  }
}

</script>
<style lang="scss" scoped>
  #foot{width:100%;height:6rem;background: #46e196;position: fixed;bottom:0rem;left:0rem;}
  #foot-icon{display: flex;height:6rem;line-height: 6rem;
    li{flex: 1;-webkit-box-flex: 1;width:100%;text-align: center;border: 1px solid #ffffff;
      p{width:100%;text-align: center;font-size: 1.6rem;color:#ffffff;margin-top: 0.3rem;}
    }
  }
  $iconcolor:#b5b5b5;
  .icon-gerenzhongxin:before{content:"\e606";color:$iconcolor;}
  .icon-fabu:before{content:"\e655";color:$iconcolor;}
  .icon-shouye-shouye:before{content:"\e501";color:$iconcolor;}
</style>
