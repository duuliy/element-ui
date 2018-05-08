<template>
    <div id="pinpaiDiv">
      <div id="title">
        <h1>品牌故事</h1>
        <h3>致力于为顾客提供精致且独家具一格的的灯具</h3>
      </div>
      <div id="left">
        <img src="static/indeximages/pinpai.png" alt="">
      </div>
      <div id="right">
        <figure>
          <img src="static/indeximages/pp1.png" alt=""><span>专业知识</span>
          <figcaption>我们的灯具都拥有独特的智能配置能够在生活中给您带来不同的惊喜</figcaption>
        </figure>
        <figure>
          <img src="static/indeximages/pp2.png" alt=""><span>我们承诺</span>
          <figcaption>免费2-3天送货和退货，100夜试炼00夜，能根据您不同的要求给出您满意的设计方案</figcaption>
        </figure>
        <figure>
          <img src="static/indeximages/pp3.png" alt=""><span>友情提示</span>
          <figcaption>您如果想要我们的功能但是您又有灯的话那么不要犹豫，因为我们已经给您了另一张方案</figcaption>
        </figure>
      </div>
    </div>
</template>

<script>
    export default {
        name: 'pinpaiDiv'
    }
</script>

<style scoped>
  #title{
    width: 100%;
    text-align: center;
  }
  h1{
    margin-top:2%;
    font-size: 30px;
    color: rgba(51, 51, 51, 0.8);
    font-weight: 300;
  }
  h3{
    margin-top:2%;
    font-size: 16px;
    color: rgba(51, 51, 51, 0.6);
    font-weight: 600;
  }
  #left{
    float:left;
    margin-top: 5%;
  }
  #right{
    float:left;
    padding-left: 3.5%;
    margin-top:7%;
  }
  figure{
    margin-left:15%;
    margin-top:0.8%;
  }
  figure span{
    margin-left:3%;
    font-size: 18px;
    color: rgb(51, 51, 51);
    line-height:25px;
    font-weight:500;
  }
  figure img{
    vertical-align: middle;
  }
  figcaption{
    width:70%;
    margin-left:8.5%;
    font-size: 13px;
    line-height:25px;
    margin-top: 1%;
    color: rgba(51, 51, 51, 0.6);
  }
</style>
