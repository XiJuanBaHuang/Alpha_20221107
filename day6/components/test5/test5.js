// components/test5/test5.js

const myBehavior = require('../../behaviors/my-behavior')
// import myBehavior from '../../behaviors/my-behavior'


Component({

  behaviors: [myBehavior],

  /**
   * 组件的属性列表
   */
  properties: {
    count: {
      type: Number,
      value: 0
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    username: 'ls'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    addCount() {
      this.setData({
        count: this.properties.count + 1
      })
      // 触发自定义事件
      this.triggerEvent('sync', { value: this.properties.count })
    }
  }
})
