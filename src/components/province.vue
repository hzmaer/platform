<template>
  <!--<mt-picker :slots="slots" @change="onCityChange"  :visible-item-count="3"></mt-picker>-->
  <mt-picker :slots="slots" @change="onCityChange"></mt-picker>
</template>
<script>

//  data () {
//    return {
//      slots: [
//        {
//          flex: 1,
//          values: Object.keys(),
//          className: 'slot1',
//          textAlign: 'center'
//        }, {
//          divider: true,
//          content: '-',
//          className: 'slot2'
//        }, {
//          flex: 1,
//          values: Object.values()[0],
//          className: 'slot3',
//          textAlign: 'center'
//        }
//      ]
//    }
//  },
//  methods: {
//    onCityChange: function () {
//    }
//  }

export default {
  methods: {
    onCityChange (picker, values) {
    }
  },
  data () {
    return {
      slots: [
        {
          flex: 1,
          values: ['1', '2'],
          className: 'slot1',
          textAlign: 'center'
        }, {
          divider: true,
          content: '-',
          className: 'slot2'
        }, {
          flex: 1,
          values: ['3', '4'],
          className: 'slot3',
          textAlign: 'center'
        }
      ],
      areaList: [
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
