<template>
  <div class="main">
    <listpageHead></listpageHead>
    <filterInfo></filterInfo>
    <homeList></homeList>
    <homeFoot></homeFoot>
  </div>
</template>
<script>
  import listpageHead from '../components/Listpagehead.vue'
  import filterInfo from '../components/filterInfo.vue'
  import homeList from '../components/Homelist.vue'
  import homeFoot from '../components/Homefoot.vue'
  export default {
    components: {
      homeList: homeList,
      filterInfo: filterInfo,
      homeFoot: homeFoot,
      listpageHead: listpageHead
    }
  }
</script>

