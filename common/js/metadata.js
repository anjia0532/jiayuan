function shareAppMessage (res) {
    return {
  	  title: 'xxxxxx结婚典礼请柬',
  	  desc: '真诚的邀请您的光临',
      path: '/pages/index/index'
    }
}
function geo () {
    return {
        latitude: 36.670757,
        longitude: 120.984320
    }
}
function call () {
    return {
        he: '15555555555',
        she: '16666666666'
    }
}
function env () {
    return 'dev-g9j2z'
}
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
