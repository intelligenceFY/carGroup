// pages/myPage/myPage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

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

  },
  sucpath:function(){
    wx.navigateTo({
      url: '../success/success',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  toPath: function () {
    wx.navigateTo({
      url: '../Verification/Verification',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  tobePath: function () {
    wx.navigateTo({
      url: '../To_be_verified/To_be_verified',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  failPath: function () {
    wx.navigateTo({
      url: '../fail/fail',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  hisPath: function () {
    wx.navigateTo({
      url: '../history/history',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  infoPath:function(){
    wx.navigateTo({
      url: '../info/info',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  }
})