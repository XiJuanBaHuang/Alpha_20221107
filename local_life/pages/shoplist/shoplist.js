// pages/shoplist/shoplist.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        query: {},
        shopList: [],
        page: 1,
        pageSize: 10,
        total: 0,
        isloading: false
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        this.setData({
            query: options
        })
        this.getShopList()
    },


    // 以分页的形式获取商铺列表数据的方法
    getShopList(cb) {
        // 暂时不允许再次loading
        this.setData({
            isloading: true
        })

        // 显示 loading 效果
        wx.showLoading({
            title: '数据加载中...',
        })

        wx.request({
            url: `https://www.escook.cn/categories/${this.data.query.id}/shops`,
            method: 'GET',
            data: {
                _page: this.data.page,
                _limit: this.data.pageSize
            },
            success: (res) => {
                //   console.log(res)
                this.setData({
                    shopList: [...this.data.shopList, ...res.data],
                    total: res.header['X-Total-Count'] - 0
                })
            },
            complete: () => {
                // wx.hideLoading({
                //   success: (res) => {},
                // })
                wx.hideLoading()
                this.setData({
                    isloading: false
                })
                //   wx.stopPullDownRefresh({
                //     success: (res) => {},
                //   })
                // 只有存在回调函数时 才会实现停止下拉刷新效果
                cb && cb()

            },
        })

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {
        wx.setNavigationBarTitle({
            title: this.data.query.title,
        })
    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {
        // 重置 关键数据
        this.setData({
            page: 1,
            shopList: [],
            total: 0
        })
        // 重新发起 数据请求
        // 回调函数 callback 
        this.getShopList(() => {
            wx.stopPullDownRefresh()
        })
    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {
        // console.log('ok')
        if (this.data.isloading) return

        if (this.data.page * this.data.pageSize >= this.data.total) {
            // 判断是否还有下一页数据 是否要节流 
            return wx.showToast({
                title: '数据加载完毕！',
                icon: 'none'
            })
        }
        this.setData({
            page: this.data.page + 1
        })
        this.getShopList()
    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    }
})