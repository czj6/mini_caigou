// pages/menudetail/menudetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    detail:[
      {
        id: 1, 
        name: '番茄炒牛肉',
        tag:'快手菜',
      images: 'https://st-cn.meishij.net/r/136/15/2378886/s2378886_158054137745061.jpg',

        ingredient: [
          {
            title: '牛肉',
            weight: '300g'
          },
          {
            title: '番茄',
            weight: '400g'
          },
          {
            title: '大蒜',
            weight: '10g'
          },
          {
            title: '生抽',
            weight: '10ml'
          },
          {
            title: '料酒',
            weight: '5ml'
          },
          {
            title: '小葱',
            weight: '3g'
          }
        ],
        step:[{
          title:'1',
          content:'牛肉切成片后加入适量姜丝'
        },{
          title:'2',
          content:'加入适量料酒,加入适量生抽,加入适量食用油和一勺淀粉'
        },{
          title:'3',
          content:'然后用手抓匀腌制五分钟,番茄洗净切大块,锅中热油后把牛肉倒入翻炒'
        },{
          title:'4',
          content:'牛肉炒熟后盛出,锅中热油爆香蒜米，把番茄倒入翻炒'
        },{
          title:'5',
          content:'最后加适量葱花即可'
        }]
      },
            {
        id: 2, 
        name: '韭菜炒绿豆芽儿儿',
      images: 'https://st-cn.meishij.net/r/183/132/4658183/s4658183_158047604807174.jpg',

        tag:'快手菜',
        ingredient: [
          {
            title: '韭菜',
            weight: '300g'
          },
          {
            title: '绿豆芽',
            weight: '500g'
          },
          {
            title: '盐',
            weight: '适量'
          },
          {
            title: '胡椒',
            weight: '适量'
          },
          {
            title: '味精',
            weight: '适量'
          },
          {
            title: '小葱',
            weight: '3g'
          }
        ],
        step:[{
          title:'1',
          content:'把韭菜洗净切段，绿豆芽清洗干净'
        },{
          title:'2',
          content:'锅烧热，倒入适量的色拉油'
        },{
          title:'3',
          content:'倒入韭菜，翻炒均匀'
        },{
          title:'4',
          content:'倒入绿豆芽，继续翻炒均匀'
        },{
          title:'5',
          content:'加入盐，味精，胡椒翻炒均匀即可出锅'
        }]
      },
            {
        id: 3, 
        name: '凉拌海带丝',
        tag:'快手菜',
      images: 'https://st-cn.meishij.net/r/153/116/13029153/s13029153_157823449375249.jpg',

        ingredient: [
          {
            title: '海带丝',
            weight: '300g'
          },
          {
            title: '葱花',
            weight: '适量'
          },
          {
            title: '盐',
            weight: '适量'
          },
          {
            title: '蚝油',
            weight: '适量'
          },
          {
            title: '味精',
            weight: '适量'
          },
          {
            title: '陈醋',
            weight: '适量'
          }
        ],
        step:[{
          title:'1',
          content:'海带丝洗净热水下锅'
        },{
          title:'2',
          content:'捞出过凉水，切段'
        },{
          title:'3',
          content:'准备配料'
        },{
          title:'4',
          content:'一起放盆中，加盐、味精、蚝油、陈醋'
        },{
          title:'5',
          content:'拌匀即可'
        }]
      },
            {
        id: 4, 
        name: '清蒸鲈鱼',
        tag:'快手菜',
      images: 'https://st-cn.meishij.net/r/209/204/6801209/s6801209_158641292495525.jpg',
        ingredient: [
          {
            title: '鲈鱼',
            weight: '一条'
          },
          {
            title: '料酒',
            weight: '500g'
          },
          {
            title: '盐',
            weight: '适量'
          },
          {
            title: '红椒',
            weight: '适量'
          },
          {
            title: '味精',
            weight: '适量'
          },
          {
            title: '葱',
            weight: '适量'
          },
          {
            title: '姜',
            weight: '适量'
          },
          {
            title: '洋葱',
            weight: '适量'
          }

        ],
        step:[{
          title:'1',
          content:'鲈鱼杀好洗净去腮，鲈鱼沿着脊背两侧各划一刀，鱼身摸上适量盐和料酒，摆入盘中腌制片刻'
        },{
          title:'2',
          content:'备姜，洋葱；葱和红椒切丝，用清水浸泡，会卷得更漂亮'
        },{
          title:'3',
          content:'锅中放适量水，大火烧开，把鱼放入锅中大火蒸8分钟'
        },{
          title:'4',
          content:'蒸好取出鲈鱼，倒掉蒸鱼的水，放上葱丝红椒丝，淋上热油'
        },{
          title:'5',
          content:'锅中留底油，姜洋葱煸出香味，加适量水和蒸鱼豉油，少许白糖，大火烧开，捞去姜洋葱（水和蒸鱼豉油的比例1.5:1），汤汁趁热淋在鱼身上即可'
        }]
      },
            {
        id: 5, 
        images: 'https://st-cn.meishij.net/r/73/127/10031823/s10031823_158497239195350.jpg',
        name: '西芹炒虾仁',
        tag:'快手菜',
        ingredient: [
          {
            title: '西芹',
            weight: '2根'
          },
          {
            title: '虾仁',
            weight: '100g'
          },
          {
            title: '姜丝',
            weight: '少许'
          },
          {
            title: '胡椒粉',
            weight: '适量'
          },
          {
            title: '味精',
            weight: '适量'
          },
          {
            title: '酱油',
            weight: '适量'
          }
        ],
        step:[{
          title:'1',
          content:'首先准备好西芹跟虾仁，西芹斜着切成小段，虾仁是买的大虾剥壳后，去掉虾头和虾尾，挑出虾线，冲洗干净后沥水备用。'
        },{
          title:'2',
          content:'准备一锅清水，加少许盐煮至沸腾，下西芹焯水。焯水不用太久，1分钟左右捞出过下冷水沥水备用。'
        },{
          title:'3',
          content:'再次把水煮沸，虾仁放在筛网里过2下热水即可。'
        },{
          title:'4',
          content:'起锅热油，下姜丝爆香，倒入西芹。'
        },{
          title:'5',
          content:'淋上少许原汁酱油，再撒上少许盐、现磨胡椒粉，大火翻炒均匀。'
        },{
          title:'6',
          content:'倒入虾仁，点几滴香油，炒匀。'
        },{
          title:'7',
          content:'最后倒入少许水淀粉收汁，就可以起锅装盘了。'
        }]
      }

    ],
    currentDetail: ''

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let index = options.id
    let {detail} = this.data
    this.setData({
      currentDetail: detail[index]
    })
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