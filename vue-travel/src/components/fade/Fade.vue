<template>
  <transition>
    <slot></slot>
  </transition>
</template>

<style lang="stylus" scoped>
  .v-enter, .v-leave-to
    opacity: 0

  .v-enter-active, .v-leave-active
    trabsition: opacity .5s
</style>
