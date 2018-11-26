<template>
  <div class="header">
    <div class="header-input"><span class="iconfont">&#xe632;</span> 输入城市/景点/游玩主题</div>
    <router-link to="/city">
      <div class="header-right  arrow-icon">
        {{this.currentCity}}
        <span class="iconfont ">&#xe64a;</span>
      </div>
    </router-link>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'

  export default {
    computed: {
      ...mapGetters(['currentCity'])
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  .header
    display: flex
    height 50px
    line-height: 50px
    background: $bgColor
    color: #fff
    .header-input
      flex 1
      height 34px
      line-height 34px
      margin 8px 10px
      margin-left 15px
      background: #fff
      border-radius: 5px
      color: #ccc
    .header-right
      min-width: 1px
      padding: 0
      float: right
      text-align: center
      color: #fff
      margin-right: 10px
      .arrow-icon
        font-size: 20px
</style>
