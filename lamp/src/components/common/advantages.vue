<template>
  <div id="adv_comp">
    <div id="icon_top">
      <div  class="picon">
        <p>&#xe673;</p>
        <span>独具一格</span>
      </div>
      <div  class="picon">
        <p>&#xe69b;</p>
        <span>整体搭配</span>
      </div>
      <div class="picon">
        <p >&#xe6b1;</p>
        <span>量屋定制</span>
      </div>
    </div>
     <div id="icon_bottom">
       <div class="picon">
         <p >&#xe75e;</p>
         <span>高端智能</span>
       </div>
       <div class="picon">
         <p >&#xe64a;</p>
         <span>随心搭配功能</span>
       </div>
     </div>

  </div>
</template>

<script>
    export default {
        name:'advantage_icon',
      data(){
            return{
//              advatagesArr: [
//                {icon:"",info:""},
//                {icon:"&#xe69b;",info:"整体搭配"},
//                {icon:"&#xe6b1;",info:"量屋定制"},
//                {icon:"&#xe75e;" ,info:"高端智能"},
//                {icon:"&#xe64a;",info:"随心搭配功能"}
//              ]
            }
      },
//      props:['icon_code','icon_info']
    }
</script>

<style scoped>
  @font-face {
    font-family: "iconfont";
    src: url("../../assets/diy_font_icon/iconfont.woff");
  }
  #adv_comp{
    width: 500px;
    height: 180px;
    color: #FF7A54;
    margin-top: 5%;
    margin-left: 60%;
    /*outline:1px solid grey;*/
  }
  /*图标底框*/
  #icon_top{
    width: 100%;
    height: 80px;
    /*background-color: pink;*/
  }
  #icon_bottom{
    width: 100%;
    height: 80px;
    /*background-color: #ffbea8;*/
  }
  .picon{
    width: 20%;
    height: 100px;
    color: #FF7A54;
    margin-right: 6%;
    display: inline-block;
    /*outline: 1px dashed red;*/
  }
.picon p{
    text-align: center;
    font-family: iconfont;
    font-size: 60px;
  }

</style>
