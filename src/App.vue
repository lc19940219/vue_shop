<template>
  <div id="app">

    <router-view/>
<FootGuider v-show="$route.meta.showFooter"></FootGuider>
  </div>
</template>

<script>
  import FootGuider from './components/FooterGuider/FootGuider.vue'
export default {
 components:{
   FootGuider
 },
created() {
   this.$store.dispatch("getAddress")
}
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
#app
  width 100%
  height 100%
  background #f5f5f5
</style>
