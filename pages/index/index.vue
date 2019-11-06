<template>
    <div class="index">
        <div class="bg-swiper">
            <index-swiper :list="list"></index-swiper>
        </div>
        <image class="inv" src="../../static/images/inv.png"/>
        <div class="bg_music" v-if="isPlay" @tap="audioPlay">
            <image src="../../static/images/music_icon.png" class="musicImg music_icon"/>
            <image src="../../static/images/music_play.png" class="music_play pauseImg"/>
        </div>
        <div class="bg_music" v-else @tap="audioPlay">
            <image src="../../static/images/music_icon.png" class="musicImg"/>
            <image src="../../static/images/music_play.png" class="music_play playImg"/>
        </div>
        <div class="info" :animation="animationData">
            <div class="content">
				<div class="item" v-for="(item, index) in greetingList" :key="index">
				    <p v-html="item"></p>
				</div>
                <image src="../../static/images/we.png" class="img_footer"/>
            </div>
        </div>
    </div>
</template>

<script>
import IndexSwiper from 'components/indexSwiper'
import tools from 'common/js/h_tools'
import metadata from 'common/js/metadata'
export default {
  name: 'Index',
  components: {
    IndexSwiper
  },
  data () {
    return {
      isPlay: true,
      list: [],
      audioCtx: '',
      audioUrl: '',
	  greetingList: []
    }
  },
  onShow () {
    const that = this
	that.getGreetingContent()
    that.audioCtx = wx.createInnerAudioContext()
	that.audioCtx.autoplay=true
    that.isPlay = true
    that.getMusicUrl()
  },

  methods: {
    audioPlay () {
      const that = this
      if (that.isPlay) {
        that.audioCtx.pause()
        that.isPlay = false
        tools.showToast('您已暂停音乐播放~')
      } else {
        that.audioCtx.play()
        that.isPlay = true
        tools.showToast('背景音乐已开启~')
      }
    },

    getList () {
      const that = this
      const db = wx.cloud.database()
      const banner = db.collection('banner')
      banner.get().then(res => {
        that.list = res.data[0].bannerList
        console.log(that.list)
      })
    },

    getGreetingContent() {
      const that = this
      const db = wx.cloud.database()
      const greetingList = db.collection('greetingList')
      greetingList.get().then(res => {
        that.greetingList = res.data[0].greetingList
        console.log(that.greetingList)
      })
    },
    getMusicUrl () {
      const that = this
      const db = wx.cloud.database()
      const music = db.collection('music')
      music.get().then(res => {
        that.audioCtx.src = res.data[0].musicUrl
        that.audioCtx.play()
        that.getList()
      })
    }
  },

  onShareAppMessage: metadata.shareAppMessage
}
</script>

<style scoped lang="stylus">
@-webkit-keyframes musicRotate
  from
    -webkit-transformb rotate(0deg)
  to
    -webkit-transform rotate(360deg)
@-webkit-keyframes musicStop
  from
    -webkit-transform rotate(20deg)
  to
    -webkit-transform rotate(0deg)
@-webkit-keyframes musicStart
  from
    -webkit-transform rotate(0deg)
  to
    -webkit-transform rotate(20deg)
@-webkit-keyframes infoAnimation
  0%
    -webkit-transform scale(1) translate(0, 0)
  50%
    -webkit-transform scale(.9) translate(5px, 5px)
  100%
    -webkit-transform scale(1) translate(0, 0)
.index
  height 100%
  position relative
  .img
    width 100%
    height 100%
  .bg-swiper
    width 100%
    height 100%
  .inv
    position absolute
    top 20rpx
    left 89rpx
    width 572rpx
    height 69rpx
    z-index 9
  .bg_music
    position fixed
    right 0
    top 20rpx
    width 100rpx
    z-index 99
    display flex
    justify-content flex-start
    align-items flex-start
    .musicImg
      width 60rpx
      height 60rpx
    .music_icon
      animation musicRotate 3s linear infinite
    .music_play
      width 28rpx
      height 60rpx
      margin-left -10rpx
      transform-origin top
      -webkit-transform rotate(20deg)
    .playImg
      animation musicStop 1s linear forwards
    .pauseImg
      animation musicStart 1s linear forwards
  .info
    width 630rpx
    background rgba(255, 255, 255, 0.75)
    z-index 9
    position fixed
    bottom 40rpx
    left 50rpx
    padding 10rpx
    animation infoAnimation 12s linear infinite
    .content
      width 626rpx
      border 1rpx solid #000
      display flex
      flex-direction column
      justify-content flex-start
      align-items center
      position relative
      padding-bottom 30rpx
      h1
        font-size 50rpx
        height 100rpx
        line-height 100rpx
      p
        font-size 24rpx
        height 60rpx
        line-height 60rpx
      .img_footer
        position absolute
        bottom 0
        left 53rpx
        z-index 99
        height 14rpx
        width 520rpx
  #myAudio
    display none
</style>
