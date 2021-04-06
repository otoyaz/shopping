export const request = (params) => {
    return new Promise((resolve, reject) => {
        wx.request({
            ...params,
            success: (result) => {
                resolve(result);
            },
            fail: (err) => {
                reject(err);
            }
        })
    })
}

// const baseUrl = "https://api-hmugo-web.itheima.net/api/public/v1"