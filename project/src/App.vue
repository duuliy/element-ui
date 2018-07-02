<template>
  <div id="app">
    <!--<product_specially></product_specially>-->
    <!--<myBtn :disable="true"></myBtn>-->
    <header v-show="$route.meta.isShow">
      <mynav></mynav>
    </header>
    <router-view/>
    <A_footer v-show="$route.meta.isShow"></A_footer>
  </div>
</template>

<script>

  import product_specially from "./components/common/product_specially.vue "

  import A_footer from "./components/common/a_footer.vue"

  import mynav from "./components/common/a_nav.vue"

  import myBtn from "./components/common/myButton.vue"
  export default {
    name: 'app',
    components:{
      A_footer:A_footer,
      product_specially:product_specially,
      mynav:mynav,
      myBtn:myBtn
    }
  }
</script>

<style scoped>
  *{
    font-family: 微软雅黑;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>
