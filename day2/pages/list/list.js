// pages/list/list.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        info: 'Hello World!',
        imgsrc: 'https://www.cgwallpapers.com/img_script/wallpaper_dir/img.php?src=wallpaper_wlop__18_2560x1440.jpg&height=450&width=800&fill-to-fit&sharpen',
        randomNum1: Math.random() * 10,
        randomNum2: Math.random().toFixed(2),
        count: 0,
        msg: '你好, '
    },

    // +1 按钮的事件处理函数
    ChangeCount() {
        // console.log('ok')
        this.setData({
            count: this.data.count + 1
        })
    },

    // +2 按钮的事件处理函数
    btnTap2(e) {
        // console.log(e)
        this.setData({
            count: this.data.count + e.target.dataset.info
        })
    }, 

    // input  输入框 事件处理函数
    inputHandler(e) {
        // console.log(e.detail.value)
        this.setData({
            msg: e.detail.value
        })
    },

    // 定义按钮的事件处理函数
    btnTapHandler(e) {
        console.log(e)
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {

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

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    }
})