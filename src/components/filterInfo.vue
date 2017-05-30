<template>
  <div id="filter-drop-down">
    <div class="filter-column" v-for="items in item">
    <el-dropdown>
  <span class="el-dropdown-link">
    下拉菜单<i class="el-icon-caret-bottom el-icon--right"></i>
  </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>黄金糕</el-dropdown-item>
        <el-dropdown-item>狮子头</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
    </div>
  </div>
</template>
<style lang="scss" scoped>
</style>

