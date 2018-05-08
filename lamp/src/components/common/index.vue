<template>
    <div id="app">
      <!--====================轮播图=================-->
      <bigImg></bigImg>
      <!--轮播下面的图片-->
      <div id="bannerBottom">
       <div>
         <img  :src="$host+'uploads/bast-slumber.tp.png'" alt="">
         <p>明天灯具为失眠的顾客提供了很舒适的环境</p>
       </div>
       <div>
         <img  :src="$host+'uploads/fastco.tp.png'" alt="">
         <p>一套优化的完美夜日常照明产品</p>
       </div>
       <div>
         <img  :src="$host+'uploads/mens-health.tp.png'" alt="">
         <p>智能的改善生活，养
         成良好的生活习惯不在是难事</p>
       </div>
       <div>
         <img  :src="$host+'uploads/slumber-search.tp.png'" alt="">
         <p>对于每个人来说都是完美的... 奢侈的感觉，功能很齐全</p>
       </div>
      </div>
      <!--左边图片右边文字-->
      <leftImg></leftImg>
      <!--四个产品的展示-->
      <fourDiv></fourDiv>
      <!--文字轮播-->
      <bannerText></bannerText>
      <!--高级定制-->
      <router-link to="/heightDiy" tag="div">
      <div id="smartDiv">
        <div class="pointer"></div>
      </div>
      </router-link>
        <!--智能配件-->
      <threeImg></threeImg>
      <!--品牌故事-->
      <pinpaiDiv></pinpaiDiv>
          </div>
</template>

<script>
  import bigImg from './bigImg/bigImg.vue'
  import leftImg from './leftImg/leftImg.vue'
  import fourDiv from './fourDiv/fourDiv.vue'
  import bannerText from './bannerText/bannerText.vue'
  import threeImg from './threeImg/threeImg.vue'
  import pinpaiDiv from './pinpaiDiv/pinpaiDiv.vue'
    export default {
        name: 'app',
      components:{
        bigImg:bigImg,
        leftImg:leftImg,
        fourDiv:fourDiv,
        bannerText:bannerText,
        threeImg:threeImg,
        pinpaiDiv:pinpaiDiv
      }
    }
</script>

<style scoped>
  #bannerBottom{
    width:80%;
    height:90px;
    margin: 0 auto;
    margin-top: 3.5%;
  }
  #bannerBottom>div{
    width:20%;
    float:left;
    height: 40px;
    margin-left:4%;
    text-align: center;
  }
  #bannerBottom>div>img{
    width:50%;
    height: 40px;
  }
  #bannerBottom>div>p{
    width:80%;
    font-size: 13px;
    margin-left:10%;
    color: rgba(51, 51, 51, 0.7);
  }
  #smartDiv{
    width: 100%;
    height: 1054px;
    position: relative;
    background-image:url('../../../static/indeximages/5.jpg');
  }
  .pointer{
    width:120px;
    height:120px;
    /*background-color: red;*/
    position: absolute;
    top:60%;
    left:47%;
  }
  .pointer:hover{
    cursor:pointer;
  }
</style>
