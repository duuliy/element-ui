<template>
  <div>
    <!--<header></header>-->

<!-- APP下载 -->
    <div>
      <div id="AppDownload_bg">
        <img src="../../../static/AppDownload/AppDownloadBG.jpg" alt="">
        <div id="AppDownload_one">
          <p class="span_first">艺灯阁智能APP</p>
          <span class="span_two">智能生活 由我开始</span>
          <div class="two">
            <div class="erwei">
              <img src="../../../static/AppDownload/erwei.jpg" alt="">
            </div>
            <div id="erweiNext">
              <img src="../../../static/AppDownload/appimg2.png" alt="">
              <span>扫码下载APP</span>
            </div>
          </div>
        </div>
        <div id="AppDownload_two">
          <img src="../../../static/AppDownload/App.png" alt="">
        </div>
      </div>
    </div>
<!-- APP下载介绍 -->
    <div id="Down">
      <div class="Down_one">
        <img src="../../../static/AppDownload/appicon1.png" alt="">
        <p class="Down_p1">添加设备</p>
        <span>{{$route.query.id}}</span>
        <p class="Down_p2">点击右上角"+"添加自己的设备，按照步骤完成设置配置，开启智能生活</p>
      </div>
      <div class="Down_one">
        <img src="../../../static/AppDownload/appicon2.png" alt="">
        <p class="Down_p1">设置场景</p>
        <p class="Down_p2">当拥有一个或者多个设备时，可以自定义联动场景，如：回家场景、打开家门，产品会根据您的选择做出反应。</p>
      </div>
      <div class="Down_one">
        <img src="../../../static/AppDownload/appicon3.png" alt="">
        <p class="Down_p1">获得积分</p>
        <p class="Down_p2">积分是艺灯阁APP中的虚拟货币，通过注册、登录APP、评价商品等就可免费获得。</p>
      </div>
      <div class="Down_one">
        <img src="../../../static/AppDownload/appicon4.png" alt="">
        <p class="Down_p1">人气商城</p>
        <p class="Down_p2">在APP中的商城，可以直接购买最新的艺灯阁产品，也可以使用积分在商城中兑换产品或精美礼品，1积分等于1人民币。</p>
      </div>
    </div>

    <!--<footer></footer>-->
  </div>
</template>

<script>
  import btn from '../common/btndemo.vue'
  import myhead from '../common/header.vue'
  import myfoot from '../common/footer.vue'
  export default {
    name: 'AppDownload',
    data() {
        return {
        }
    },
    components:{
      btn:btn,
      myhead: myhead,
      myfoot: myfoot
    },
    created:function () {
      var id = this.$route.query.id;
      console.log(id);
    }
  }
</script>

<style scoped>
  *{
    font-family: '微软雅黑'!important;
  }
#AppDownload_bg{
  width:100%;
  height:786px;
  position: relative;
  /*background-image: url("../../../static/AppDownload/AppDownloadBG.jpg");*/
}
  #AppDownload_bg img{
    width:100%;
    height:100%;
  }
  .span_first{
    font-size: 48px;
    color:white;
  }
  .span_two{
    font-size: 30px;
    color:white;
  }
  #AppDownload_one{
    /*float:left;*/
    width:50%;
    text-align: center;
    position: absolute;
    top:20%;
    left:0;
  }
#AppDownload_two{
  /*float:left;*/
  width:50%;
  text-align: center;
  position: absolute;
  top:10%;
  right:0;
}
  #AppDownload_two img{
    width:56%;
  }
  .erwei{
    margin:0 auto;
    width:22%;
    text-align: center;
  }
  .erwei img{
    width:100%;
  }
  .two{
    text-align: center;
    margin-top:20%;
    /*position: absolute;*/
    /*top:50%;*/
  }
  #erweiNext{
    width:22%;
    margin:0 auto;
    position: relative;
  }
  #erweiNext img{
    width:40%;
    float:left;
  }
  #erweiNext span{
    font-size: 14px;
    color:white;
    float:left;
    margin-top:5px;
    /*position: absolute;*/
    /*top:0;*/
  }
  #Down{
    width:88%;
    height:500px;
    margin-top:6%;
    /*padding-left:6%;*/
    margin-left:6%;
    margin-right:6%;
    /*padding-bottom:6%;*/
  }
  .Down_one{
    float:left;
    padding-left:1%;
    padding-right:1%;
    margin-left:2%;
    /*margin-right:1%;*/
    width:21%;
    background-color: #EFEFEF;
    height:421px;
    text-align: center;
  }
  .Down_one img{
    margin-top:80px;
    margin-bottom:40px;
  }
  .Down_p1{
    font-size: 22px;
    font-weight: 700;
  }
  .Down_p2{
    margin-top:18px;
    font-size: 13px;
    line-height:24px;
  }
  .Down_one p{
    color: #5C5C5C;
  }
</style>
