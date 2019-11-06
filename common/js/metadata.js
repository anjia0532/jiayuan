/**
 * 分享给好友
 * @param {Object} res
 */
function shareAppMessage (res) {
    return {
  	  title: 'xxxxxx结婚典礼请柬',
  	  desc: '真诚的邀请您的光临',
      path: '/pages/index/index'
    }
}
/**
 * 酒店gps定位，参考
 * https://lbs.qq.com/tool/getpoint/
 * latitude 是纬度，国内一般是北纬
 * longitude 是经度，国内一般是东经
 */
function geo () {
    return {
        latitude: 36.670757,
        longitude: 120.984320
    }
}
/**
 * 新郎新娘电话
 * he 新郎
 * she 新娘
 */
function call () {
    return {
        he: '15555555555',
        she: '16666666666'
    }
}
/**
 * 小程序云开发环境id
 */
function env () {
    return 'xxx'
}
/**
 * 我这个版本默认把视频去掉了
 * src 是婚礼视频的地址
 * poster 是封面
 */
function video () {
    return  {
        src: 'http://xx.mp4',
        poster: 'http://xx.jpg'
    }
}

export default {
  shareAppMessage,
  geo,
  call,
  env,
  video
}
