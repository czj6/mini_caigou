// pages/menuitem/menuitem.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    recipeList: [{
      images: 'https://st-cn.meishij.net/r/136/15/2378886/s2378886_158054137745061.jpg',
      tag: '快手菜',
      id: 1,
      name: '番茄炒牛肉'
    },{
      images: 'https://st-cn.meishij.net/r/183/132/4658183/s4658183_158047604807174.jpg',
      tag: '快手菜',
      id: 2,
      name: '韭菜炒绿豆芽儿儿'
    },{
      images: 'https://st-cn.meishij.net/r/153/116/13029153/s13029153_157823449375249.jpg',
      tag: '快手菜',
      id: 3,
      name: '凉拌海带丝'
    },{
      images: 'https://st-cn.meishij.net/r/209/204/6801209/s6801209_158641292495525.jpg',
      tag: '快手菜',
      id: 4,
      name: '清蒸鲈鱼'
    },{
      images: 'https://st-cn.meishij.net/r/73/127/10031823/s10031823_158497239195350.jpg',
      tag: '快手菜',
      id: 5,
      name: '西芹炒虾仁'
    }]
  },
  goDetail(e) {
    let id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: `/pages/menudetail/menudetail?id=${id}`,
      success: function(res) {
        // 通过eventChannel向被打开页面传送数据
        res.eventChannel.emit('acceptDataFromOpenerPage', { data: 'test' })
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})