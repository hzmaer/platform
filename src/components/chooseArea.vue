<template>
  <div class="chooseArea">
  <province v-on:showProvince="showProvince"></province>
    <mt-button type="default" @click.prevent="save">确定</mt-button>
  </div>
</template>
<script>
  import province from '../components/province.vue'
  export default {
    data () {
      return {
        province: ''
      }
    },
    components: {
      province: province
    },
    methods: {
      showProvince (value, value1) {
        this.province = value + ' ' + (value1 === value ? '' : value1)
      },
      save () {
        localStorage.setItem('area', this.province)
        setTimeout(() => {
          this.$router.push('publishForm')
        }, 500)
      }
    }
  }
</script>
<style lang="scss" scoped>

</style>

