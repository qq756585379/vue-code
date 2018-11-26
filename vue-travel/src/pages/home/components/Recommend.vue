<template>
  <div style="margin-top: 5px" v-if="list.length">
    <div class="title">热销推荐</div>
    <ul>
      <router-link tag='li' class="item border-bottom" v-for="item of list" :key='item.id' :to="'/detail/' + item.id">
        <img class="item-img" :src="item.imgUrl">
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </router-link>
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

<style lang="stylus" scope>
  @import "~common/stylus/index"
  .title
    background: #eee
    line-height 35px
    text-indent 15px
    text-align left

  .item
    overflow hidden
    display flex
    border solid 1px red
    .item-img
      width 95px
      height 95px
      padding 10px
    .item-info
      flex 1
      padding 10px 10px 10px 0
      text-align left
    .item-title
      no-wrap()
      line-height 25px
    .item-desc
      line-height: 25px
      border solid 1px blue
      margin-right 10px
      color: #ccc
      box-sizing border-box
      no-wrap()
    .item-button
      line-height: 25px
      margin-top: 10px
      background: #ff9300
      padding: 0 5px
      border-radius: 3px
      color: #fff
</style>
