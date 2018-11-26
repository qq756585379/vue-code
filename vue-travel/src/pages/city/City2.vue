<template>
  <div>
    <scroll :on-infinite='loadData' ref='infinite'>
      <ul slot='list'>
        <li v-for="(item,index) in iconsList" :key="index">{{item}}</li>
      </ul>
    </scroll>
  </div>
</template>

<script>
  import Scroll from './components/Scroll'

  export default {
    data() {
      return {
        iconsList: []
      }
    },
    created() {
      this.initData()
    },
    methods: {
      loadData() {
        console.log('loadData...')
        setTimeout(() => {
          console.log('定时到了...')
          this.$refs.infinite.$emit('loadedDone')
        }, 3000)
      },
      initData() {
        var arr1 = new Array(20)
        for (var i = 0; i < arr1.length; i++) {
          arr1[i] = i
        }
        this.iconsList = arr1
      }
    },
    components: {
      Scroll
    }
  }
</script>

<style scoped>
  li {
    height: 44px;
  }
</style>
