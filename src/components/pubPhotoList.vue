<template>
  <div class="list">
    <li class="li" v-for="item in lists" :key="item.key">
      <img :src="item" alt="">
    </li>
    <section class="addPhoto" @click="choose"></section>
  </div>
</template>
<script>
  export default {
    data () {
      return {
      }
    },
    props: ['lists'],
    methods: {
      choose () {
        this.$emit('choos')
      }
    }
  }
</script>
<style lang="scss" scoped>
  .list{
    display: flex;
    width: 100%;
    justify-content: flex-start;
    flex-wrap: wrap;
    .li{
      list-style: none;
      width: 150px;
      height: 150px;
      margin-right: 5px;
      overflow-y: hidden;
      margin-top: 20px;
      img{
        width: 100%;
        height: 150px;
      }
    }
    .addPhoto{
      width: 150px;
      height: 150px;
      margin-top: 20px;
      background: url('../assets/plus.svg') no-repeat center top;
      background-size: contain;
    }
  }
</style>
