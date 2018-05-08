<template>
  <div class="shijishi">
    <div class="shejishi_top">
      <img :src="imgsrc">
      <!--<img src="static/images/shejishi1.png">-->
    </div>
    <div class="shejishi_bottom">
        <p>{{title}}</p>
      <span>{{neirong}}</span>
    </div>
  </div>
</template>

<script>
    export default {
        name:'shejishi',
      props:['imgsrc','title','neirong'],

    }
</script>

<style scoped lang="less">
  /*.section2 ul li:hover .fangda img{*/
    /*transform: scale(1.2);*/
  /*}*/
  .shijishi{
    width: 302px;
    height: 488px;
    .shejishi_top{
      width: 100%;
      height: 315px;
      overflow: hidden;
      img{
        width: 100%;
        height: 315px;
        transition: .3s linear all;
      }
      &:hover img{
        transform: scale(1.1);
      }
    }
    .shejishi_bottom{
      width: 100%;
      height: 173px;
      text-align: center;
      background-color: #F4EEDE;
      overflow: hidden;
      p{
        margin: 20px;
        font-weight: bold;
        color: #5E5E5E;
      }
      span{
        font-size: 13px;
        color: #999999;
        padding: 10px;
      }
    }
  }
</style>
