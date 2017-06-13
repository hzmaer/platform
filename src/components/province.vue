<template>
  <div class="province">
  <mt-picker value-key="item_name" :slots="slots" @change="onCityChange"></mt-picker>
  </div>
</template>
<script>
import cityJson from '../js/areaList'
export default {
  data () {
    return {
      slots: [
        {
          flex: 1,
          defaultIndex: 0,
          values: [],
          className: 'slot1',
          textAlign: 'center'
        }, {
          divider: true,
          content: '-',
          className: 'slot2'
        }, {
          flex: 1,
          defaultIndex: 0,
          values: [],
          className: 'slot3',
          textAlign: 'center'
        }
      ],
      slotValues: []
    }
  },
  created () {
    this.setProvince()
  },
  methods: {
    onCityChange (picker, values) {
      let currentCode = values[0].item_code
      let aCode = currentCode.substr(0, 2)
      let arr = []
      for (let i = 0; i < cityJson.length; i++) {
        let reg = new RegExp('^' + aCode)
        if (reg.test(cityJson[i].item_code)) {
          arr.push(cityJson[i])
        }
      }
      arr.splice(0, 1)
      this.slots[2].values = arr
//      console.log(values[1].item_name)
      if (values[0] && values[1]) {
        this.$emit('showProvince', values[0].item_name, values[1].item_name)
      }
    },
    setProvince () {
      for (let i = 0; i < cityJson.length; i++) {
        if (cityJson[i].item_code.substr(2, 4) === '0000') {
          this.slots[0].values.push(cityJson[i])
        }
      }
    }
  }

}

</script>
<style lang="scss" scoped>
</style>
