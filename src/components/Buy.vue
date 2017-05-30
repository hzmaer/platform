<template>
  <div class="main">
    <listpageHead></listpageHead>
    <filterInfo></filterInfo>
    <homeList></homeList>
    <homeFoot></homeFoot>
  </div>
</template>
<script>
  import listpageHead from './Listpagehead.vue'
  import filterInfo from './filterInfo.vue'
  import homeList from './Homelist.vue'
  import homeFoot from './Homefoot.vue'
  export default {
    components: {
      homeList: homeList,
      filterInfo: filterInfo,
      homeFoot: homeFoot,
      listpageHead: listpageHead
    }
  }
</script>

