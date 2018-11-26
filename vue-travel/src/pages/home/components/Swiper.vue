<template>
  <div class="wrapper">
    <swiper :options="swiperOption" v-if="showSwiper">
      <swiper-slide v-for='item of list' :key="item.id">
        <img class="swiper-img" :src="item.imgUrl">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
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
          notNextTick: true,
          autoplay: {
            disableOnInteraction: false
          },
          pagination: {
            el: '.swiper-pagination'
          },
          loop: true,
          observer: true,
          observeParents: true,
          mousewheelControl: true
        }
      }
    },
    computed: {
      showSwiper() {
        return this.list.length
      }
    },
    components: {
      swiper,
      swiperSlide
    }
  }
</script>

<style lang="stylus" scope>
  .wrapper
    overflow: hidden
    width: 100%
    background: #eee
    .swiper-pagination
      .swiper-pagination-bullet
        background: #E8ECF1
        &.swiper-pagination-bullet-active
          background: #fff;
    .swiper-img
      width 100%
</style>
