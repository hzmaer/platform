<template>
  <ul id="detail-page-head">
    <li class="detail-head-item"><i class="el-icon-arrow-left"></i></li>
    <li class="detail-head-item"><p>摊位详情</p></li>
    <li class="detail-head-item"><i class="el-icon-star-off"></i></li>
  </ul>
</template>
<style lang="scss" scoped>
#detail-page-head{display: flex;padding: 1.5rem;background: #f6f6f6;
li{flex: 3;-webkit-box-flex: 1;height: 4rem;line-height: 4rem;text-align: center;}
li:nth-child(1){flex: 1;text-align: left;
.el-icon-arrow-left{color: #bfcbd9; font-size: 2rem;margin-top: 1rem;}
}
li:nth-child(3){flex: 1;text-align: right;
.el-icon-star-off{color: #bfcbd9; font-size: 2rem;margin-top: 1rem;}
}
p{font-size: 2rem;color: #666666;}
}

</style>

