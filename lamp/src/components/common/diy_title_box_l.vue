<template>
  <div id="titleboxl">
    <div>{{titlecontext}}</div>
    <div>{{titleorder}}</div>
  </div>
</template>

<script>
    export default {
        name:'diy_title_box_l',
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
  text-align: right;
  margin-right: 3%;
  float: left;
}
/*序号样式*/
.orderstyle(@orderwidth,@orderheight){
  width:@orderwidth;
  height: @orderheight;
  border-radius: 50%;
  border: 1px solid #FF7A54;
  color:#FF7A54;
  text-align: center;
  float: right;
  line-height:@orderheight;
}
  #titleboxl{
    .titleboxstyle(400px)
  }
  #titleboxl div:nth-child(1){
    .titlestyle(16px,40px);

  }

  #titleboxl div:last-child{
   .orderstyle(40px,40px)
  }
</style>
