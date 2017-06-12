<template>
<div class="publishformBox">
  <div class="publishForm">
    <a class="mint-cell">
      <div class="mint-cell-wrapper">
        <div class="mint-cell-title"><span class="mint-cell-text">省份</span></div>
        <div class="mint-cell-value"><input type="text" placeholder="全国" id="province-value" class="mint-cell-val" v-model="province"></div>
        <a class="mint-cell-more">></a>
      </div>
    </a>
    <a class="mint-cell">
      <div class="mint-cell-wrapper">
        <div class="mint-cell-title"><span class="mint-cell-text">人手</span></div>
        <div class="mint-cell-value"><input type="text" placeholder="2" id="num" class="mint-cell-val"><p>人</p></div>
        <a class="mint-cell-more">></a>
      </div>
    </a>
    <a class="mint-cell">
      <div class="mint-cell-wrapper">
        <div class="mint-cell-title"><span class="mint-cell-text">年利润</span></div>
        <div class="mint-cell-value"><input type="text" placeholder="20-25" id="profit" class="mint-cell-val"><p>万/年</p></div>
        <a class="mint-cell-more">></a>
      </div>
    </a>
    <a class="mint-cell">
      <div class="mint-cell-wrapper">
        <div class="mint-cell-title"><span class="mint-cell-text">卖价</span></div>
        <div class="mint-cell-value"><input type="text" placeholder="15" id="sell-price" class="mint-cell-val"><p>万</p></div>
        <a class="mint-cell-more">></a>
      </div>
    </a>
  </div>
  <province v-on:showProvince="showProvince"></province>
</div>
</template>
<script>
import province from '../components/province.vue'
export default {
  data () {
    return {
      province: '全国'
    }
  },
  components: {
    province: province
  },
  methods: {
    showProvince (value, value1) {
      this.province = value + ' ' + (value1 === value ? '' : value1)
    }
  }
}
</script>
<style lang="scss" scoped>
.publishformBox{position: relative;}
.publishForm{padding: 1.5rem 1.5rem;
.mint-cell{border-bottom: 1px solid #d4d4d4;margin:1rem 0rem;}
.mint-cell-text{font-size: 2rem;color:#666666;}
.mint-cell-more{-webkit-box-flex:1;-ms-flex:1;flex:1;text-align: right;color:#666666;}
.mint-cell-title{-webkit-box-flex:2;-ms-flex:2;flex:2;}
.mint-cell-value{-webkit-box-flex:5;-ms-flex:5;flex:5;font-size: 2rem;color:#666666;}
.mint-cell-val{border: none;width:20%;}
}

</style>
