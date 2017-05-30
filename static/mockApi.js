var Mock = require('mockjs')
Mock.mock('mjf.com/api', 'post', {
    // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
  'list|1-10': [{
        // 属性 id 是一个自增数，起始值为 1，每次增 1
    'id|+1': 1,
    'title': '@csentence( 5, 7 )',
    'location': '@province',
    'benift': '@float(1,1000,0,2)'
  }]
})
Mock.mock('mjf.com/getLogin', 'post', {
    // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
  'isLogin': '@boolean(1,1,true)'
})

