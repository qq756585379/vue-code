<template>
  <div>
    <detail-banner :sightName="sightName" :bannerImg="bannerImg" :gallaryImgs="gallaryImgs"/>
    <detail-header></detail-header>
    <div class="content">
      <detail-list :list="list"></detail-list>
    </div>
  </div>
</template>

<script>
  import {getDetailData} from '@/common/js/api'
  import DetailBanner from './components/Banner'
  import DetailHeader from './components/Header'
  import DetailList from './components/List'

  export default {
    name: 'Deatil',
    data() {
      return {
        sightName: '',
        bannerImg: '',
        gallaryImgs: [],
        list: []
      }
    },
    methods: {
      _getDetailData() {
        getDetailData({id: this.$route.params.id}).then(res => {
          if (res.ret && res.data) {
            const data = res.data
            this.sightName = data.sightName
            this.bannerImg = data.bannerImg
            this.gallaryImgs = data.gallaryImgs
            this.list = data.categoryList
          }
        })
      }
    },
    mounted() {
      this._getDetailData()
    },
    components: {
      DetailBanner,
      DetailHeader,
      DetailList
    }
  }
</script>

<style lang="stylus" scoped>
  .content
    height: .100rem
</style>
