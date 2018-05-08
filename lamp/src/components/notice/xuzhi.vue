<template>
  <div id="xvzhi">
    <ul class="tabs">
      <!--<div class="move"></div>-->
      <router-link to="/xuzhi/buyxz" tag="li" active-class="active">购买须知</router-link>
      <router-link to="/xuzhi/dzxz" tag="li" active-class="active">定制须知</router-link>
      <router-link to="/xuzhi/yhxy" tag="li" active-class="active">用户协议</router-link>
    </ul>
    <div class="line"></div>
    <div class="hei">
      <router-view></router-view>
    </div>
  </div>
</template>

<script type="es6">
    export default{
      name:'xuzhi',
      data () {
        return {}
      },
      methods:{}
    }
</script>

<style scoped>
  .tabs li{
    font-size: 14px;
    width: 100px;
    height: 30px;
    margin-top: 10px;
    list-style: none;
    text-align: center;
    line-height: 30px;
    cursor: pointer;
  }
  .tabs{
    width: 100px;
    margin-left: 110px;
    float: left;
    position: relative;
    margin-top: 30px;
  }
  .line{
    float: left;
    width: 1px;
    height: 220px;
    background-color: rgb(255,122,84);
    margin-left: 30px;
    margin-top: 35px;
  }
  .hei{
    width: 900px;
    float: left;
    margin-left: 50px;
    margin-top: 40px;
  }
  .active{
    border-left: 2px solid rgb(255,122,84);
  }
</style>
