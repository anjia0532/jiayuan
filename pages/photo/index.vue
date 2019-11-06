<template>
    <div class="photo">
        <h-swiper :list="list" :isGif="isGif"></h-swiper>
    </div>
</template>

<script>
import HSwiper from 'components/swiper'
import metadata from 'common/js/metadata'
// import imgData from 'common/json/imgData.json'
export default {
  name: 'Photo',
  components: {
    HSwiper
  },
  onShow () {
    const that = this
    that.isGif = !that.isGif
    that.getList()
  },

  data () {
    return {
      list: [],
      isGif: false
    }
  },
  methods: {
    getList () {
      const that = this
      const db = wx.cloud.database()
      const banner = db.collection('indexBanner')
      banner.get().then(res => {
        that.list = res.data[0].indexBanner
      })
    }
  },
  

  onShareAppMessage: metadata.shareAppMessage
}
</script>

<style lang="stylus" scoped>
.photo
    height 100%
</style>

