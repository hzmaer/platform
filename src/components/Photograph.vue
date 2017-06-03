<template>
<div id="preference" class="cen">
  <ul id="p-list" class="p-list">
    <li v-for="item in items">
      <router-link :to="item.url">
        <div id="p-left"></div>
        <dl id="p-right">
          <dt>{{item.title}}</dt>
          <dd>所在区域:{{item.location}}</dd>
          <dd>年利润:{{item.benift}}万</dd>
        </dl>
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
          url: '/buydetail',
          title: '我要买摊位',
          location: '杭州',
          benift: '15'
        }, {
          url: '/selldetail',
          title: '我要卖摊位',
          location: '杭州',
          benift: '20'
        }, {
          url: '/employdetail',
          title: '我要找工人',
          location: '杭州',
          benift: '12'
        }, {
          url: '/jobdetail',
          title: '我要找工作',
          location: '杭州',
          benift: '15'
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
  .cen{padding: 1.5rem;}
  ul.p-list{
    li{list-style: none;padding:0.75rem 0rem;
      a{display: flex;}
    }
  }
  #p-left{width:11rem;height: 8.5rem;background: #46e196;margin-right: 2rem;}
  #p-right{flex:1;-webkit-box-flex:1;
    dt{margin:0;padding:0;color:#000000;text-decoration: none;font-size: 2rem;},
    dd{margin:0;padding:0;color:#000000;text-decoration: none;font-size: 1.7rem;color:#b9b9b9;margin-top: 0.5rem;}
  }
</style>
