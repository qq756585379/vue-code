<template>
  <div class="icons">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(page, index) of pages" :key="index">
        <div class="icon" v-for="item of page" :key="item.id">
          <div class="icon-img">
            <img class="icon-img-content" :src='item.imgUrl'/>
          </div>
          <p class="icon-desc">{{item.desc}}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
  import {swiper, swiperSlide} from 'vue-awesome-swiper'

  export default {
    props: {
      list: Array
    },
    data() {
      return {
        swiperOption: {
          autoplay: false
        }
      }
    },
    computed: {
      pages() {
        const pages = []
        this.list.forEach((item, index) => {
          const page = Math.floor(index / 8)
          if (!pages[page]) {
            pages[page] = []
          }
          pages[page].push(item)
        })
        return pages
      }
    },
    components: {
      swiper,
      swiperSlide
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/index"
  .icons
    .icon
      width: 25%
      float: left
      padding-bottom: 25%
      position: relative
      overflow: hidden
      margin-top 10px
      .icon-img
        position: absolute
        width 70%
        height 70%
        top: 5px
        left: 15%
        right: 0
        box-sizing: border-box
        .icon-img-content
          display: block
          height: 100%
      .icon-desc
        position: absolute
        left: 0
        right: 0
        bottom: 0
        height: .44rem
        line-height: .44rem
        text-align: center
        color: $darkTextColor
        no-wrap()
</style>
