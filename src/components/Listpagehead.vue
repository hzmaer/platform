<template>
  <ul id="list-page-head">
    <li class="go-back list-head-item"><i class="el-icon-arrow-left"></i></li>
    <li class="search list-head-item"><i class="el-icon-search"></i><input type="text" placeholder="搜索摊位" class="search-text"></li>
    <li class="publish list-head-item"><p>发布信息</p></li>
  </ul>
</template>
<script>

</script>
<style lang="scss" scoped>
#list-page-head{display: flex;padding: 1.5rem;background: #f6f6f6;
li{flex:3;-webkit-box-flex:1;height: 4rem;line-height: 4rem;}
li:nth-child(1){flex: 1;}
li:nth-child(3){flex: 1;}
.search{background: #ffffff;border-radius:15px;
.search-text{height: 3rem;line-height: 3rem;margin-top:-0.5rem;border: none;width:75%;font-size: 1.5rem;}
}
.el-icon-arrow-left{color: #bfcbd9; font-size: 2rem;margin-top: 1rem;}
.el-icon-search{margin:1rem 2rem 0rem 1rem;color: #bfcbd9; font-size: 25px;}
.publish{text-align: right;}
p{font-size: 1.5rem;color: #666666;}
}
</style>

