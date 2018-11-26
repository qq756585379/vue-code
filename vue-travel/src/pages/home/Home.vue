<template>
  <div>
    <home-header></home-header>
    <home-swiper :list="swiperList"></home-swiper>
    <home-icons :list="iconsList"></home-icons>
    <home-recommend :list="recommendList"></home-recommend>
    <home-weekend :list="weekendList"></home-weekend>
  </div>
</template>

<script>
  import {getHomeData} from '@/common/js/api'
  import HomeHeader from './components/Header'
  import HomeSwiper from './components/Swiper'
  import HomeIcons from './components/Icons'
  import HomeRecommend from './components/Recommend'
  import HomeWeekend from './components/Weekend'
  import {mapState} from 'vuex'

  export default {
    data() {
      return {
        swiperList: [],
        iconsList: [],
        recommendList: [],
        weekendList: [],
        lastCity: ''
      }
    },
    created() {
      this.lastCity = this.city
      this._getHomeData()
    },
    activated() {
      if (this.lastCity !== this.city) {
        this.lastCity = this.city
        this._getHomeData()
      }
    },
    computed: {
      ...mapState(['city'])
    },
    methods: {
      _getHomeData() {
        getHomeData().then(res => {
          if (res.ret && res.data) {
            const data = res.data
            this.swiperList = data.swiperList
            this.iconsList = data.iconsList
            this.recommendList = data.recommendList
            this.weekendList = data.weekendList
          }
        })
      }
    },
    components: {
      HomeHeader,
      HomeSwiper,
      HomeIcons,
      HomeRecommend,
      HomeWeekend
    }
  }
</script>
