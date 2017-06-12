<template>
  <div id="foot">
    <ul id="foot-icon">
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
          name: '首页'
        }, {
          url: '/publish',
          iconClass: 'icon-fabu',
          name: '发布'
        }, {
          url: '/grzx',
          iconClass: 'icon-gerenzhongxin',
          name: '个人中心'
        }
      ]
    }
  }
}

</script>
<style lang="scss" scoped>
  #foot{width:100%;height:6rem;background: #f6f6f6;padding: 0.5rem 0rem;position: fixed;bottom:0rem;left:0rem;}
  #foot-icon{display: flex;
    li{flex: 3;-webkit-box-flex: 1;width:100%;text-align: center;
      p{width:100%;text-align: center;font-size: 1.6rem;color:#666666;margin-top: 0.3rem;}
    }
    li:nth-child(1){flex: 1;}
    li:nth-child(3){flex: 1;}
  }
  $iconcolor:#b5b5b5;
  .icon-gerenzhongxin:before{content:"\e606";color:$iconcolor;}
  .icon-fabu:before{content:"\e655";color:$iconcolor;}
  .icon-shouye-shouye:before{content:"\e501";color:$iconcolor;}
</style>
