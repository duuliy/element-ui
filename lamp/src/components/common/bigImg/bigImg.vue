
<template>
  <div id="bigImg">
    <el-carousel  :interval="5000" arrow="always">
      <el-carousel-item v-for="item in 3" :key="item">
        <div class="banner" v-if="item==1" >
            <h1>{{bannerArr[0].myTitle}}</h1>
            <p>{{bannerArr[0].myText}}</p>
          <!----------------引用button---------------->
          <router-link to="/GoodsList" tag="div">
            <btn btnC="btn1a" btntext="查看成功案例"></btn>
          </router-link>
        </div>
        <div class="banner" v-else-if="item==2" >
          <h1>{{bannerArr[1].myTitle}}</h1>
          <p>{{bannerArr[1].myText}}</p>
          <!----------------引用button---------------->
          <router-link to="/heightDiy" tag="div">
          <btn btnC="btn1a" btntext="查看高级定制"></btn>
          </router-link>
        </div>
        <div class="banner" v-else-if="item==3" >
          <h1>{{bannerArr[2].myTitle}}</h1>
          <p>{{bannerArr[2].myText}}</p>
          <!----------------引用button---------------->
          <router-link to="/funRecommend" tag="div">
          <btn btnC="btn1a" btntext="查看智能功能"></btn>
          </router-link>
        </div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>


<script>
  import btn from '../btn/btndemo.vue'
    export default {
        name: 'bigImg',
//      props:['bannerTitle','bannermyText'],
      data(){
        return {
          bannerArr: [{
            id: 1,
            myTitle: '改变你的明天',
            myText: '一个照明产品系统，为您的最佳明天而设计了100年的研究。',
          },
            {
              id: 2,
              myTitle: '智能改善生活',
              myText: '每一个智能产品，都是我们为您提供舒适生活的保障',
            },
            {
              id: 3,
              myTitle: '可控的环境',
              myText: '每一个功能都是那么的简单易操作，让您更加放心使用',
            }]
        }
      },
      components:{
        btn:btn
      }
    }
</script>

<style scoped>
  #bigImg{
    width:100%;
    position: relative;
  }
  .banner{
    width: 50%;
    position: absolute;
    z-index: 99;
    margin: auto;
    top:12%;
    left:0;
    right:0;
    text-align: center;
  }
  .banner>h1{
    font-size: 36px;
    font-weight:200;
    color: rgba(51, 51, 51, 0.8);
  }
  .banner>p{
    font-size: 20px;
    width:55%;
    margin: 0 auto;
    text-align: center;
    line-height:30px;
    color: rgba(51, 51, 51, 0.7);
    margin-top: 4%;
    margin-bottom:5%;
  }
  /*lunbo*/
  .el-carousel__item{
    height:724px;width: 100%;
    background-size: cover;
  }
  .el-carousel{
    height: 724px;width: 100%;
  }
  .el-carousel__item:nth-child(2n) {
    background-image: url('../../../../static/indeximages/banner.jpg');
    background-repeat: no-repeat;
  }
  .el-carousel__item:nth-child(2n+1) {
    background-image: url('../../../../static/indeximages/banner.png');
    background-repeat: no-repeat;
  }
  .el-carousel__item:nth-child(3n) {
    background-image: url('../../../../static/indeximages/banner1.jpg');
    background-repeat: no-repeat;
  }
</style>
