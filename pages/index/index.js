import { request } from "../../request/index"
Page({
    data: {
        // 写死
        swiperList: [{
            goods_id: 1,
            photo: "../../style/photo/photo1.jpg"
        }, {
            goods_id: 2,
            photo: "../../style/photo/photo2.jpg"
        }, {
            goods_id: 3,
            photo: "../../style/photo/photo3.jpg"
        }],
        catesList: [{
                name: "鞋子",
                photo: "../../icons/all-o.png"
            }, {
                name: "衣服",
                photo: "../../icons/bussiness-man-o.png"
            }, {
                name: "饰品",
                photo: "../../icons/cart-o.png"
            }

        ],
        floorList: []
    },

    onload: function(options) {
        // 直接请求
        // wx.request({
        //     url: 'https://api-hmugo-web.itheima.net',
        //     sussess: (result) => {
        //         this.setData({
        //             swiperList: result.data.message
        //         })
        //         wx.request({

        //         })
        //     }
        // })

        // 请求优化
        // request({ url: "https://api-hmugo-web.itheima.net" })
        //     .then(result => {
        //         this.setData({
        //             swiperList: result.data.message
        //         })
        //     })

        // 函数调用
        this.getSwiperList();
        this.catesList();
        this.getFloorList();
    },
    // 获取录播图
    getSwiperList() {
        request({ url: "https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata" })
            .then(result => {
                this.setData({
                    swiperList: result.data.message
                })
            })
    },
    // 获取分类导航
    getCateList() {
        // request({ url: "https://api-hmugo-web.itheima.net" })
        //     .then(result => {
        this.setData({
                catesList: result.data.message
            })
            // })
    },
    getFloorList() {
        request({ url: "https://api-hmugo-web.itheima.net/api/public/v1/home/floordata" })
            .then(result => {
                this.setData({
                    floorList: result.data.message
                })
            })
    }

});