<template>
  <div>
    <div id="diyHeader">
      <img src="../../../static/diy_goodsimg/myimg.jpg" alt="高级定制">
      <!--<div id="title">-->
        <!--<h1>高端定制</h1>-->
        <!--<p>因专注而专业，因懂得而设计,智能因“智”而生-->
     <!--开始您的定制之旅</p>-->
        <!--&lt;!&ndash;<button  @click="toDesign">前往定制</button>&ndash;&gt;-->
        <router-link to="/startDiy" tag="button" id="todeign"></router-link>
      <!--</div>-->
    </div>
    <!--智能功能-->
    <div id="intellFunc">
      <div id="funcwrap">
        <div class="itembox">
          <ul id="content_left">
            <li>
              <div class="itemstile">&#xe640;</div>
              <div>
                <p class="functitle">智能调色</p>
                <!--<!-描述-&ndash;&gt;-->
                <p>
                  调整每一个LED的亮度，就可以红色、绿色和蓝色的LED灯串创造出任何颜色
                </p>
              </div>
            </li>
            <li>
              <div class="itemstile">&#xe634;</div>
              <div>
                <p class="functitle">安全监测</p>
                <!--<!-描述-&ndash;&gt;-->
                <p>
                  内置有害气体检测器,PM2.5等检测器，及时反映室内环境
                 </p>
              </div>
            </li>
            <li>
              <div class="itemstile">&#xe641;</div>
              <div>
                <p class="functitle">停电自锁</p>
                <!--<!-描述-&ndash;&gt;-->
                <p>
                  在停电时自动关闭电闸，防止在没有人在时室内灯具还亮着的情况
                </p>
              </div>
            </li>
            <li>
              <div class="itemstile">&#xe61b;</div>
              <div>
                <p class="functitle">助眠功能</p>
                <!--<!-描述-&ndash;&gt;-->
                <p>
                  能够发出红光促进用户褪黑素的分泌，它能够监测在用户浅睡眠的状态时智能的唤醒用户
                </p>
              </div>
            </li>
          </ul>
        </div>
        <div class="itembox">
          <div id="funtitle">
            <h2>智能优势</h2>
            <p>会&nbsp;<i><b>“思考&nbsp;”</b></i>&nbsp;的灯</p>
          </div>
          <ul id="content_middle">
            <li>
              <div class="itemstile">&#xe68d</div>
              <div>
                <p class="functitle">自调亮度</p>
                <!--<!-描述-&ndash;&gt;-->
                <p>
                  根据所处环境和使用习惯，智能调节不同灯光的亮度，创造舒适、宁静、和谐、温馨的气氛、更深的体会生活
                </p>
              </div>
            </li>
            <li>
              <div class="itemstile">&#xe601;</div>
              <div>
                <p class="functitle">感应照明</p>
                <!--<!-描述-&ndash;&gt;-->
                <p>
                  基于红外线技术的自动控制产品，当有人进入开关感应范围时，专用传感器探测到人体红外光谱的变化，开关自动接通负载
                </p>
              </div>
            </li>
            <li>
              <div class="itemstile">&#xe603;</div>
              <div>
                <p class="functitle">智能遥控</p>
                <!--<!-描述-&ndash;&gt;-->
                <p>
                  灯头内安装有WIFI+，蓝牙4.0接收模块  ，支持远程操作
                  </p>
              </div>
            </li>
          </ul>
        </div>
        <div class="itembox funcright">
          <ul id="content_right">
            <li id="right_des_img">
              <img src="../../../static/diy_goodsimg/advantageimg.png" alt="">
            </li>
            <li>
              <div class="itemstile">&#xe62a;</div>
              <div>
                <p class="functitle">智能控温</p>
                <!--<!-描述-&ndash;&gt;-->
                <p>
                  智能灯监测周围的温度，并与智能调温器连接亦或者是房间空调相连接，实现温度的调控以及房间湿度的调控
                </p>
              </div>
            </li>
            <li>
              <div class="itemstile">&#xe61c;</div>
              <div>
                <p class="functitle">定时控制</p>
                <!--<!-描述-&ndash;&gt;-->
                <p>
                  对灯光的定时开闭进行定义
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!--产品优势-->
    <div id="goods_adv">
      <h2>设计优势</h2>
      <div id="adv_wrap">
        <advantages ></advantages>
      </div>
    </div>
    <!--精品展示引导页-->
    <div id="diy_goodsshow">
      <h2 id="diy_goodsshowT">成功案例</h2>
      <div id="imgbox_left">
        <div  v-for="(item,index) in showdataArr" class="showWrap">
          <router-link to="/divshow">
            <!--<diy_showbox :imgsrc="item.imgsrc"-->
                         <!--:secenname="item.secenname":funcname="item.funcname"></diy_showbox>-->
            <diy_showbox :imgsrc="$host+showboxArr[index]"
                         :secenname="item.NAME" :funcname="funcArr[index]"></diy_showbox>
          </router-link>

        </div>
        <!--通过请求拿到响应数据-->
        <!--<diy_showbox :imgsrc="item.custom_goods_path"-->
                     <!--:secenname="item.NAME":funcname="item.all_act"></diy_showbox>-->
      </div>
      <div id="imgbox_right">
        <!--图标图片-->
        <div id="btnposition">
          <router-link to="/startDiy">
            <btn btntext="查看更多" class="btn1a"></btn>
          </router-link>
        </div>
        <img src="../../../static/diy_goodsimg/designlogo.png" alt="">
      </div>
    </div>
    <!--定制介绍-->
    <div id="diy_info">
      <h2>匠心工艺  &nbsp; &nbsp;&nbsp; 经典之理</h2>
      <div id="info_wrap">
        <div id="info_left">
          <div>
            <!--<p><b>匠心工艺  &nbsp; &nbsp;&nbsp; 经典之理</b></p>-->
            <div id="info_left_title">
              <p>选择个性定制理由</p>
              <p> 选择心仪的款式，恣意添加您所需的功能，无需换灯也能让以前的灯变得“智能”，最大满足用户需求</p>
              <!--<img src="../../../static/diy_goodsimg/design_left.jpg" alt="">-->
            </div>
            <div id="goorderbtn">
              <router-link to="/startDiy">
                <btn class="btn1a" btntext="前往定制"></btn>
              </router-link>
            </div>
          </div>

        </div>
        <div id="info_right">
          <img src="../../../static/diy_goodsimg/design.png" alt="手工绘制图稿">
          <!--<p>选择个性定制理由：<br>-->
          <!--选择心仪的款式，恣意添加您所需的功能，无需换灯也能让以前的灯变得“智能”，最大满足用户需求</p>-->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import advantages from '../common/advantages.vue'
  import diy_showbox from '../common/diy_showbox.vue'
  import btn from '../common/btndemo.vue'

  export default {
    name: 'heightDiy',
    data(){
      return {
          showdataArr:[],  //返回的数据
        showboxArr:[],//图片地址
        contextArr:[],//使用场景描述
        funcArr:["智能调光","安全监测", "助眠功能","定时控制"],//功能描述
//        functions:[],//功能描述
//          showboxArr:[
//          {imgsrc:"../../../static/diy_goodsimg/show4.jpg",secenname:"书房",funcname:"智能调光"},
//          {imgsrc:"../../../static/diy_goodsimg/show5.jpg",secenname:"厨房",funcname:"安全监测"},
//          {imgsrc:"../../../static/diy_goodsimg/show2.jpg",secenname:"卧室",funcname:"助眠功能"},
//          {imgsrc:"../../../static/diy_goodsimg/show3.jpg",secenname:"卧室",funcname:"定时控制"}
//        ],
//        funcArr:[
//          {funcname:"智能调光"},
//          {funcname:"安全监测"},
//          {funcname:"助眠功能"},
//          {funcname:"定时控制"}
//        ]
      }
    },
    components:{
      advantages:advantages,
      diy_showbox:diy_showbox,
      btn:btn
    },
    methods:{},
    created(){
//        发出请求获取定制的相关产品
      this.showboxArr=[];
      this.contextArr=[];
      this.$axios.get("/api/heightDiy.do").then(response=>{
          this.showdataArr=response.data;
          console.log("返回的商品数据",this.showdataArr);
//        funcArr=["智能调光","安全监测", "助眠功能","定时控制"];//功能描述
        for(var i=0;i<this.showdataArr.length;i++){
            this.showboxArr.push(this.showdataArr[i].goods_img.split(",")[1]);
        }
        console.log("图片地址：",this.showboxArr)
//        for(var i=0;i<this.showdataArr.length;i++){
//            this.contextArr.push(this.showdataArr[i].NAME);
//        }
//        this.showboxArr=response.data;
      })
    }
  }
</script>

<style scoped>
  @font-face {
    font-family: "iconfont";
    src: url("../../assets/diy_font_icon/iconfont.woff");
    /*src: url("../../assets/diy_font_icon/iconfont.ttf");*/
    /*src: url("../../assets/diy_font_icon/iconfont.eot");*/
  }
  * {
    margin: 0;
    padding: 0
  }
li{
  list-style: none;
}
  #diyHeader {
    height: 600px;
    width: 100%;
    position: relative;
  }
  #diyHeader img{
    width: 100%;
    height: 100%;
  }

/*前往定制*/
  #todeign{
    width: 160px;
    height: 70px;
    background-color: transparent;
    cursor: pointer;
    position: absolute;
    top:54%;
    left: 44%;
    opacity: 0;
  }
  /*===========智能功能============*/
  #intellFunc{
    width: 100%;
    height: 760px;
    margin-top: 100px;
    background: url("../../../static/diy_goodsimg/designbag1.png") no-repeat center;
  }
  #funcwrap{
    width: 90%;
    height: 100%;
    margin-left: 10%;
    /*outline: 1px solid blue;*/
  }
  #funtitle{
    width: 100%;
    height: 100px;
    margin: 0 auto;
    color: #5E5E5E;
    text-align: center;
    /*outline: 1px solid red;*/
  }
  #funtitle>h2{
    font-size: 28px;
    margin-top: 50px;
    padding-bottom: 20px;
    text-align: center;
  }
  /*竖列项*/
  .itembox{
    /*width: 350px;*/
    width: 30%;
    height: 100%;
    float: left;
    margin-right: 40px;
    /*outline:1px solid red;*/
  }
  .itembox>ul>li{
    width: 100%;
    height: 80px;
    margin-top: 65px;
    /*display: inline-block;*/
    /*outline: 1px solid orange;*/
  }
  .itembox>ul>li div{
    text-align: left;
    /*outline: 1px solid grey;*/
  }
  .itembox>ul>li div:nth-child(1){
    float: left;
  }
  .itembox>ul>li div:nth-child(2){
    float: right;
   margin-top: 1%;
  }
  #content_left{
    margin-top: 240px;
  }
  #content_middle{
    margin-top: 235px;
  }
#content_right{
  /*margin-top: 530px;*/
}
  /*右边功能*/
  .funcright{
    width:30% ;
  }
  /*右边图片*/
  .itembox>#content_right
  {
    margin-top: -65px;
  }
  #right_des_img{
    width: 345px;
    height: 460px;
  }
  #right_des_img>img{
    width: 100%;
  }
  /*字体图标*/
  .itemstile{
    font-family: iconfont;
    font-size: 60px;
    color: #FF7A54;
  }
  .itembox>ul>li div:nth-child(2){
    width: 80%;
  }
  /*功能名字*/
.functitle{
  font-size: 16px;
  padding-bottom: 10px;
}
/*功能描述*/
  .itembox>ul>li div:nth-child(2) p:last-child{
   font-size: 14px;
  }

  /*===========产品优势============*/
#goods_adv{
  width: 100%;
  /*height: 450px;*/
  margin-top: 100px;
  text-align: center;
  /*background: url("../../../static/diy_goodsimg/designbc2.png") no-repeat center;*/
}
  #goods_adv h2{
    font-size: 28px;
    color: #5b5b5b;
  }
  #adv_wrap{
    margin-left: 11%;
  }
  advantages{
    font-family: iconfont;
  }

  /*定制商品展示*/
  #diy_goodsshow{
    /*width: 1100px;*/
    width: 85%;
    height: 672px;
    margin: 0 auto;
    margin-top: 100px;
    /*outline:1px dashed red;*/
  }
  #diy_goodsshowT{
    padding-bottom: 5%;
    text-align: center;
    font-size: 28px;
    /*color: rgb(51,51,51);*/
    color: #5b5b5b;
  }

  .showWrap{
    width: 375px;
    height: 330px;
    margin-right: 3%;
    float: left;
    /*display: inline-block;*/
  }
  .showWrap:nth-child(1){
    padding-bottom: 1.8%;
  }
  .showWrap:nth-child(2){
    padding-bottom:1.8%;
  }
/*左边*/
  #imgbox_left{
    width: 70%;
    height: 100%;
    float: left;
    /*outline: dashed 1px blue;*/
  }
  /*右边*/
  #imgbox_right{
    /*width: 320px;*/
    /*width: 30%;*/
    width: 28%;
    height: 100%;
    float: right;
    position: relative;
    background: url("../../../static/diy_goodsimg/show6.jpg") no-repeat;
    /*outline: dashed 1px red;*/
  }
  #imgbox_right img{
    position: absolute;
    width: 80%;
    top: 8%;
    left: 2%;
  }
  /*查看按钮*/
  #btnposition{
    margin-top: 192%;
    margin-left: 50%;
  }
  /*关于定制介绍*/
  #diy_info{
    width: 85%;
    height: 543px;
    margin: 0 auto;
    margin-top: 15%;
   margin-bottom: 5%;
    background-color: rgba(204,204,204,.1);
  }
  #diy_info>h2{
    text-align: center;
    padding-top: 5%;
    color: #5b5b5b;
    /*padding-bottom: 5%;*/
  }
  #info_wrap{
    width: 100%;
    height: 80%;
    margin-top: 5%;
  }
  #info_left{
    width: 40%;
    height: 100%;
    float: left;
  }
  #goorderbtn{
    margin-left: 20%;
  }
  #info_left>div>p{
    margin-top: 120px;
    margin-left: 20%;
    padding-bottom: 40px;
  }
  #info_left>div>btn{
    margin-left: 130px;
  }
  #info_left_title{
    width: 80%;
    margin-top: 20%;
    padding-bottom:40px;
  }
  #info_left_title p:first-child{
    width: 100%;
    color: rgba(51,51,51,.8);
    font-size: 24px;
    text-align: left;
    line-height: 25px;
    padding-bottom: 4%;
    margin-left: 20%;
  }
  #info_left_title p:last-child{
    font-size: 14px;
    width: 80%;
    line-height: 25px;
    margin-left: 20%;
    color: rgba(51,51,51,.7);
  }
  /*右侧*/
  #info_right{
    width: 50%;
    height: 100%;
    float: right;
  }
  #info_right p{
    width: 70%;
    margin: 4% auto;
    text-align: center;
    font-size: 14px;
  }
</style>
