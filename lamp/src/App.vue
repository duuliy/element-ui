<template>
  <div id="app">
    <header>
      <myhead></myhead>
    </header>
    <div id="bodyer">
      <router-view></router-view>
    </div>
    <footer>
      <myfooter></myfooter>
    </footer>

  </div>
</template>

<script>
  import head from './components/common/header.vue'
  import footer from './components/common/footer.vue'
export default {
  name: 'app',
  components: {
    myhead: head,
    myfooter:footer,
  }
}
</script>

<style>
  *{
    padding: 0px;
    margin: 0px;
  }
  #bodyer{
    overflow: hidden;
  }
  footer{
    margin-top: 50px;
    /*border: 1px solid black;*/
  }
</style>
