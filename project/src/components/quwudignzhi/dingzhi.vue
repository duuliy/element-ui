<template>
<div class="dingone">

  <div class="dingimg">
    <img src="../../../static/images/banner.jpg" alt="">
  </div>

  <div class="fontone">
    <h3>精选定制</h3>
    <hr>
    <!--<div class="line"></div>-->
    <h5>多种风格任你选择</h5>
  </div>
  <!--风格-->
  <dingzhistyle></dingzhistyle>
  <!--项目-->
  <dignzhiproject></dignzhiproject>
  <!--加载更多-->
  <dingzhiloading></dingzhiloading>

  <div class="fonttwo">
    <h3>定制你喜欢</h3>
    <hr>
    <h5>知道更多关于我们的案例</h5>
  </div>
  <!--案例-->
  <dingzhidetail></dingzhidetail>

</div>
</template>

<script>
  import dingzhidetail from './dingzhidetail.vue'
  import dingzhiloading from './dingzhiloading.vue'
  import dingzhistyle from './dingzhistyle.vue'
  import dignzhiproject from './dignzhiproject.vue'
    export default {
        name: "dingzhi",
      data:function() {
          return{
//         dingzhidata: [
//          {id: 1, name: '产品1', img: '../../../static/images/banner.jpg', sub: '产品副标题1', price: 30, content: '产品1详情文字内容'},
//          {id: 2, name: '产品2', img: '../../../static/images/风格1.jpg', sub: '产品副标题2', price: 50, content: '产品1详情文字内容'},
//          {id: 3, name: '产品3', img: '../../../static/images/风格2.jpg', sub: '产品副标题3', price: 20, content: '产品1详情文字内容'},
//          {id: 4, name: '产品4', img: 'images/4.jpg', sub: '产品副标题4', price: 60, content: '产品1详情文字内容'}
//        ]
          }
      },
      components:{
        dingzhidetail:dingzhidetail,
        dingzhiloading:dingzhiloading,
        dingzhistyle:dingzhistyle,
        dignzhiproject:dignzhiproject,
      }
    }
</script>

<style scoped>
  *{
    margin: 0;
    padding: 0;

    font-family: 微软雅黑;

  }
  h4{
    margin: 10px auto;
    /*display: inline-block;*/
  }
  .dingone{
    width: 100%;
    height: auto;
  }
  .dingimg{
    width: 100%;
    /*height:auto;*/
  }
  .dingimg>img{
    max-width: 1346px;
  }
  .fontone{
    margin-bottom: 7px;
    width: 100%;
  }
  .fonttwo{
    margin-bottom: 7px;
    width: 100%;
  }
  hr{
    width: 100px;
    margin: 10px auto;
    background-color: rgba(0,0,0,0.9);
  }
</style>

