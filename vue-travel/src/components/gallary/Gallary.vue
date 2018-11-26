<template>
  <div class="container" @click="handleGallary">
    <div class="wrapper">
      <swiper :options="swiperOptions">
        <swiper-slide v-for="(item, index) in imgs" :key="index">
          <img class="gallary-img" :src="item">
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
  import {swiper, swiperSlide} from 'vue-awesome-swiper'

  export default {
    props: {
      imgs: {
        type: Array,
        default() {
          return []
        }
      }
    },
    data() {
      return {
        swiperOptions: {
          notNextTick: true,
          autoplay: false,
          observeParents: true,
          observer: true,
          // 阻止click冒泡。拖动Swiper时阻止click事件
          preventClicksPropagation: true,
          pagination: {
            el: '.swiper-pagination'
          }
        }
      }
    },
    methods: {
      handleGallary() {
        this.$emit('close')
      }
    },
    components: {
      swiper,
      swiperSlide
    }
  }
</script>

<style lang="stylus" scoped>
  .container
    display: flex
    flex-direction: column
    justify-content: center
    position: fixed
    z-index: 99
    left: 0
    right: 0
    top: 0
    bottom: 0
    background: #000
    .wrapper
      width: 100%
      .gallary-img
        width: 100%
      .swiper-pagination
        color: #fff
</style>
