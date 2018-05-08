<template>
  <div id="titleboxr">
    <div>{{titleorder}}</div>
    <div>{{titlecontext}}</div>
  </div>
</template>

<script>
  export default {
    name:'diy_title_box_r',
    data(){
      return {}
    },
    props:['titlecontext','titleorder']
  }
</script>

<style scoped lang="less">
  /*编号底框样式母版*/
  .titleboxstyle(@boxwidth,@boxheight:40px){
    width: @boxwidth;
    height: @boxheight;
    background-color: rgba(215,215,215,.3);
    -webkit-border-radius:@boxheight;
    -moz-border-radius:@boxheight;
    border-radius:@boxheight;
  }
  /*标题文字样式母版*/
  .titlestyle(@tfontsize,@tboxheight){
    width: 73.5%;
    height: @tboxheight;
    line-height: @tboxheight;
    font-size: @tfontsize;
    text-align: left;
    /*margin-left: 16%;*/
    float: left;
    /*display: inline-block;*/
  }
  /*序号样式*/
  .orderstyle(@orderwidth,@orderheight){
    width:@orderwidth;
    height: @orderheight;
    border-radius: 50%;
    border: 1px solid #FF7A54;
    color:#FF7A54;
    text-align: center;
    float: left;
    line-height:@orderheight;
  }
  #titleboxr{
    .titleboxstyle(400px)
  }
  #titleboxr div:nth-child(1){
    .orderstyle(40px,40px);
  }

  #titleboxr div:last-child{
     .titlestyle(16px,40px);
    padding-left: 50px;
  }
</style>
