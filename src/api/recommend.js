
import jsonp from 'common/js/jsonp'
import { commonParams, options } from './config'
 /* eslint-disable */
export function getRecommend () {
    const url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg'
    const data = Object.assign({}, commonParams,{
        uin: 0,
        needNewCode: 1,
        platform: 'h5'
    })
    return jsonp(url, data ,options)
}