<template>
  <div class="header">
    城市选择
    <router-link to="/">
      <div class="iconfont header-back">&#xe624;</div>
    </router-link>
  </div>
</template>

<style lang="stylus" scoped>
  @import "~common/stylus/index"
  .header
    position: relative
    overflow: hidden
    height: 44px
    line-height: 44px
    text-align: center
    color: #fff
    background: $bgColor
    font-size: 18px
    .header-back
      position: absolute
      top: 0
      left: 0
      width: .64rem
      text-align: center
      font-size: .4rem
      color: #fff
</style>
