<template>
  <div id="filter-drop-down">
    <div class="filter-column">
      <div class="block">
        <el-cascader
          placeholder="全国"
          :options="options01"
          filterable
          change-on-select
        ></el-cascader>
      </div>
    </div>
    <div class="filter-column">
      <div class="block">
        <el-cascader
          placeholder="年利润"
          :options="options02"
          filterable
          change-on-select
        ></el-cascader>
      </div>
      </div>
    <div class="filter-column">
    <div class="block">
        <el-cascader
          placeholder="人手"
          :options="options03"
          filterable
          change-on-select
        ></el-cascader>
      </div>
    </div>
  </div>
</template>
<style lang="scss" >
#filter-drop-down{
  display: flex;padding:1.5rem;
  .filter-column{flex:1;-webkit-box-flex:1;
  .el-input{font-size: 2rem;width:80%;color:#bfcbd9;}
  }
  .el-dropdown{font-size: 1.8rem;}
}
.el-input__inner{background: #ffffff;border: 1px solid #ffffff;color:#bfcbd9;}
.el-input__inner:focus{border-color:#ffffff;}
.el-dropdown-menu{width:98%;}
.el-cascader__label{font-size: 2rem;color:#bfcbd9;}
.el-cascader-menus {
   border: 1px solid #ffffff;
   box-shadow: 0 2px 4px rgba(255,255,255,0), 0 0 6px rgba(255,255,255,0);
}
.el-cascader-menu__item {
  font-size: 1.5rem;
  height: 4rem;
  line-height: 4rem;
  padding:0px 30px 0px 30px;
  text-align: center;
}

.el-cascader-menus{width:100%;}
.el-cascader-menu{width:100%;height:180px;}
.el-input{border: none;}
</style>
<script>
  export default {
    data () {
      return {
        options01: [{
          value: 'hangzhou',
          label: '杭州'
        }, {
          value: 'shanxi',
          label: '西安'
        }, {
          value: 'shanghai',
          label: '上海'
        }, {
          value: 'chengdu',
          label: '成都'
        }, {
          value: 'wuhan',
          label: '武汉'
        }],
        options02: [{
          value: '10万以内',
          label: '10万以内'
        }, {
          value: '11-15',
          label: '11-15万'
        }, {
          value: '16-20',
          label: '16-20万'
        }, {
          value: '21-25',
          label: '21-25万'
        }, {
          value: '26-30',
          label: '26-30万'
        }, {
          value: '31-35',
          label: '31-35万'
        }, {
          value: '36-40',
          label: '36-40万'
        }, {
          value: '41-50',
          label: '41-50万'
        }, {
          value: '50万以上',
          label: '50万以上'
        }],
        options03: [{
          value: '2人以内',
          label: '2人以内'
        }, {
          value: '3-4',
          label: '3-4人'
        }, {
          value: '5-10',
          label: '5-10人'
        }, {
          value: '10人以上',
          label: '10人以上'
        }],
        selectedOptions: [],
        selectedOptions2: []
      }
    },
    methods: {
      handleChange (value) {
        console.log(value)
      }
    }
  }
</script>

