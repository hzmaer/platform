<template>
  <div class="publish">
    <mt-header title="发布">
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
   <publishPhoto></publishPhoto>
  </div>
</template>
<script>
import publishPhoto from '../components/Publishphoto.vue'
export default {
  components: {
    publishPhoto: publishPhoto
  }
}
</script>
<style lang="scss" scoped>
.mint-header{height: 7rem;line-height: 7rem;background: #f6f6f6;color:#666666;font-size: 2rem;}
.mintui{font-size: 2rem;}
</style>
