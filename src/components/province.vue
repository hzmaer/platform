<template>
<nav class="location-bar">
  <ul class="location-tree" v-for="item in items">
    <li v-if="!item.children"><a href="#">{{item.text}}</a></li>
    <li v-if="item.children"><a href="#" v-on:click="toggleChildren(item)" v-bind:class="{active:item.isActive}">{{item.text}}<span></span></a>
      <ul v-show="item.isShow" class="childs">
        <li v-for="child in item.children"><a href="#">{{child.text}}</a></li>
      </ul>
    </li>
  </ul>
</nav>
</template>
<script>
export default{
  methods: {
    toggleChildren: function (item) {
      item.isShow = !item.isShow
      item.isActive = !item.isActive
    }
  },
  data () {
    return {
      items: [
        {
          text: '湖北',
          isShow: false,
          isActive: true,
          children: [{
            text: '武汉'
          }, {
            text: '荆门'
          }, {
            text: '荆州'
          }]
        }, {
          text: '浙江',
          isShow: false,
          isActive: true,
          children: [{
            text: '杭州'
          }, {
            text: '宁波'
          }, {
            text: '嘉兴'
          }]
        }, {
          text: '广东',
          isShow: false,
          isActive: true,
          children: [{
            text: '深圳'
          }, {
            text: '广州'
          }, {
            text: '惠州'
          }]
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
.location-bar{position:absolute;top:0rem;left:0rem;width:100%;}
.location-tree{
 li{height: 4rem;line-height: 4rem;font-size: 2rem;background: #f6f6f6;
 a{color:#666666;display: inline-block;width:100%;}
 .childs{position: fixed;left:5rem;top:7rem;width:100%;
 li{background: #ffffff;}
 }
}
}
</style>
