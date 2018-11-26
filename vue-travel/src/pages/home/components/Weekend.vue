<template>
  <div v-if="list.length">
    <div class="title">周末去哪儿</div>
    <ul>
      <li class="item border-bottom" v-for="item of list" :key='item.id'>
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl">
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    props: {
      list: Array
    }
  }
</script>

<style lang="stylus" scoped>
  @import "~common/stylus/index"
  .title
    background: #eee
    line-height 35px
    text-indent 15px
    text-align left

  .item
    border solid 1px red
    .item-img-wrapper
      display block
      .item-img
        width: 100%
        height auto
    .item-info
      border solid 1px red
      display block
      padding: 10px
      .item-title
        line-height: 50px
        font-size: 12px
        no-wrap()
      .item-desc
        line-height: 15px
        color: #ccc
        no-wrap()
</style>
