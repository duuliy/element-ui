<template>
  <div>
    <!--top-->
    <div id="diy_top">
      <div>
        <img src="../../../static/diy_goodsimg/smart_top.png" alt="">
      </div>
      <div id="diy_title">
        <h2>精湛工艺</h2>
        <h2>高端科技</h2>
        <h3>适用不同的场景</h3>
        <h3>随心搭配功能</h3>
        <h3>实现场景定制与功能智能推荐</h3>
        <h3> 缔造舒适、便捷、温馨家居环境</h3>
      </div>
    </div>
    <!--orderinfo-->
    <div id="sceenDiy">
      <div id="sceen_top">
        <h2>场景功能定制</h2>
        <p>根据用户所选场景和功能完美融合定制出独特的智能灯具</p>
      </div>
      <div id="sceen_setinfo">
        <div id="sceen_left">
          <!--第一步-->
          <div class="diy_title_wrap">
            <div class="titleorder">
              <div id="titleorder1">
                <diy_title_box_l titlecontext="上传图片，尽享独特定制" titleorder="01"></diy_title_box_l>
              </div>
            </div>
            <!--选图-->
            <div id="choseRoomimg">
              <!--<span id="tsTitle">请上传您房间的图片</span>-->
              <a href="javascript:;" class="file">上传图片
              <input type="file" @change="onFileChange">
              </a>
            </div>
            <!--选房间图预览-->
            <div id="roomimg">
              <img :src="image" id="imgbox" />
              <!--<img id="imgbox" src="../../../static/diy_goodsimg/bedroom001.jpg" alt="">-->
            </div>
          </div>
          <!--第三步-->
          <div class="diy_title_wrap">
            <div class="titleorder titleorder2">
              <diy_title_box_l titlecontext="挑选控制方式" titleorder="03"></diy_title_box_l>
              <div id="controlbox">
                <div class="controlway">
                  <input type="checkbox" value="APP" name="controller" @change="choseControlway">APP
                    <!--<img src="" alt="app应用">-->
                </div>
                <div class="controlway">
                  <input type="checkbox" value="遥控器" name="controller" @change="choseControlway">遥控器
                     <!--<img src="" alt="遥控器">-->
                </div>
                <div class="controlway">
                  <input type="checkbox" value="智能面板" name="controller" @change="choseControlway">智能面板
                     <!--<img src="" alt="智能面板">-->
                </div>
              </div>
            </div>
          </div>

        </div>
        <div id="sceen_middle">
          <!--步骤原点-->
          <div id="line"></div>
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        <div id="sceen_right">
          <div class="diy_title_wrap_r">
            <!--第二步-->
            <div class="titleorder_r">
              <div >
                <diy_title_box_r titlecontext="挑选场景，定制适合空间的灯具" titleorder="02"></diy_title_box_r>
              </div>
              <div id="sceenitems">
                <!--<div class="sceenitem" v-for="item in sceneArr" :key="item.id">-->
                <sceneChose @chosefunc="chosesenceshijian"></sceneChose>
              </div>
              <div id="funcWrap">
                <p>智能推荐功能</p>
                <div id="funcitemWrap">
                  <!--<div class="funcitem" v-for="item in functionArr">-->
                  <act_name @selectfunctions="selectFunc"></act_name>

                </div>
              </div>
            </div>
            <!--第四步-->
            <div class="titleorder_r">
              <diy_title_box_r titlecontext="预估价格" titleorder="04"></diy_title_box_r>
              <!--此处价格需要更具所选功能计算-->
              <p id="dollar"><span > ￥:</span> {{totalprice}}元</p>
            </div>
          </div>
        </div>
      </div>
      <!--底部地址填写-->
      <div id="customOrder">
        <div id="writeorder">
          <diy_title_box_l titlecontext="定制订单填写" titleorder="05"></diy_title_box_l>
        </div>
        <div id="customerWrap">
          &nbsp;
          <div id="customerImfo">
            <input type="text" placeholder="您的姓名"id="coustomName"><br/>
            <input type="tel" placeholder="您的电话" id="coustomTel" @blur="checkTel"><span id="customTelspan"></span> <br/>
            <input type="email" placeholder="您的邮箱" id="customEmail" @blur="checkEmail"><span id="customEmailspan"></span><br/>
            <div id="address">
              <label>地址选择：</label>
              <v-distpicker :placeholders="placeholders" @selected="onSelected"></v-distpicker>
            </div>

            <input type="text" placeholder="详细地址" id="customPlace"><br/>
            <textarea placeholder="补充说明" id="customOtherdes"></textarea>
            <div id="subup" @click="submitInfo">
              <!--<btn class="btn1a" btntext="确认提交" @submit="submitInfo"></btn>-->
              <btn class="btn1a" btntext="确认提交"></btn>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--推荐定制-->
    <div id="tuijianWrap">
      <div id="tuijian">
        <div class="bottom_line"></div>
        <div>推荐产品</div>
        <div class="bottom_line"></div>
      </div>
      <div id="bottom_goods">
        <recommgoods></recommgoods>
      </div>
    </div>
    <!--模态框-->
    <div class="dialog-wrap">
      <div class="dialog-cover" >
        <p class="dialog-close" @click="comfirmNo">x</p>
        <div class="dialog-content">
          <p>①务必留下联系方式和姓名</p>
          <p>②24小时内与您电话沟通</p>
          <p>③72小时内免费获得专属方案</p>
          <div id="wraning">
            <span><b>特别提醒：</b> </span>
            <span>请仔细确认，一旦提交定制申请将无法取消订单</span>
          </div>
          <div id="btns">
            <button @click="comfirmYes">确认</button>
            <button @click="comfirmNo">取消</button>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  import diy_title_box_l from '../common/diy_title_box_l.vue'
  import diy_title_box_r from '../common/diy_title_box_r.vue'
  import btn from '../common/btndemo.vue'
  //  推荐产品组件
  import recommgoods from '../common/fourDiv/fourDiv.vue'
  //地区选择
  import VDistpicker from 'v-distpicker'
  //场景组件
  import sceneChose from '../common/diy_scenebox.vue'
  //应用功能组件
  import act_name from '../common/diy_funcbox.vue'

  //  接收省市区数组
  var  placeArr=[];
  //  获取弹框节点
  var comfirmbox;
  //  获取表单节点
  var coustomName,coustomTel,customEmail,customPlace,customOtherdes

  //接收所选场景和功能,控制方式的数组
  var secenArr;
  var funsArr=[];
  var controArr=[];

  //  发送请求数据对象
  var postdata={userid:"",coustomName:"",coustomTel:"",customEmail:"",address:"",customOtherdes:"",tPrice:"",secenArr:"",orderfunction:"",controlways:""};
//控制方式
  var controllerbox=document.getElementsByName("controller");
  function getCntroller(){
    //       获取controllway
    controArr=[];
    for(var i=0;i<controllerbox.length;i++){
      if(controllerbox[i].checked){
        controArr.push(controllerbox[i].value);
      }
    }
  }
//  dialog
function showDialog(){
      dialog_wrap.style.height="100%";
  dialog_wrap.style.transition="all .4s ease-out";
  dialog_cover.style.height="100%";
  dialog_cover.style.transition="all .4s ease-out";
  dialog_content.style.height="330px";
  dialog_content.style.transition="all .4s ease-out";
  dialog_content.style.opacity="1";
  closebtn.style.opacity="1";
}
function displayDialog(){
  dialog_wrap.style.height="0px";
  dialog_wrap.style.transition="all .4s ease-out";
  dialog_cover.style.height="0px";
  dialog_cover.style.transition="all .4s ease-out";
  dialog_content.style.height="0px";
  dialog_content.style.transition="all .4s ease-out";
  dialog_content.style.opacity="0"
  closebtn.style.opacity="0";
}
//  获取dialog-wrap，dialog-cover,dialog-content
  var dialog_wrap,dialog_cover,dialog_content,closebtn;
  export default {
    name:'startDiy',
    data(){
      return{
        placeholders: {
          province: '------- 省 --------',
          city: '--- 市 ---',
          area: '--- 区 ---',
        },
//        图片有默认图片
        image: '../../../static/diy_goodsimg/bedroom001.jpg',
//        初始预估价格
        tempprice:3000.00,
        funcprice:300,
        controllway:100,
        totalprice:3000.00,
      }
    },
    components:{
      diy_title_box_l:diy_title_box_l,
      diy_title_box_r:diy_title_box_r,
      btn:btn,
      recommgoods:recommgoods,
//      注册地区组件
      VDistpicker:VDistpicker,
//      注册场景组件
      sceneChose:sceneChose,
//      注册功能组件
      act_name:act_name
    },
    methods:{
//        提交表单
      submitInfo:function(){
          console.log("提交按钮")
//        拿到填写的表单的用户数据
        coustomName=document.getElementById("coustomName").value;
        coustomTel=document.getElementById("coustomTel").value;
        customEmail=document.getElementById("customEmail").value;
        customPlace=document.getElementById("customPlace").value;
        customOtherdes=document.getElementById("customOtherdes").value;
        getCntroller();
        dialog_wrap=document.getElementsByClassName("dialog-wrap")[0];
         dialog_cover=document.getElementsByClassName("dialog-cover")[0];
         dialog_content=document.getElementsByClassName("dialog-content")[0];
        closebtn=document.getElementsByClassName("dialog-close")[0]
         showDialog();
//        comfirmbox=document.getElementsByClassName("dialog-wrap")[0];
//        comfirmbox.style.display="block";//弹出弹框
      },
      onSelected(placeholders) {
//        获取所选的省市区名称
//        将获取的省市区存储到数组中
        placeArr.push(placeholders);
        console.log("place:",placeArr);
      },

//      上传文件预览
      onFileChange(e) {
        var files = e.target.files || e.dataTransfer.files;
        if (!files.length)
          return;
        this.createImage(files[0]);
      },
      createImage(file) {
        var image = new Image();
        var reader = new FileReader();
        var vm = this;
        reader.onload = (e) => {
          vm.image = e.target.result;
        };
        reader.readAsDataURL(file);
      },
      //弹框的确认与取消
      comfirmYes:function(){
        var senddataArr=[]
        var tPrice=this.totalprice;
//         测试数据
        sessionStorage.userid=1;
        var userid=sessionStorage.userid;
        var address=placeArr[0].province.value+placeArr[0].city.value+placeArr[0].area.value+customPlace;
        var orderfunction=funsArr.join(",")
        var controlways=controArr.join(",")
//        发送前台的数据到服务器并将数据写到数据库中:secenArr, placeArr,coustomName,coustomTel,customEmail,customPlace,customOtherdes
        senddataArr.push(userid,coustomName,coustomTel,customEmail,address,customOtherdes,tPrice,secenArr,orderfunction,controlways);
        for(var i=0;i<senddataArr.length;i++){
          postdata.userid=senddataArr[0];
          postdata.coustomName=senddataArr[1];
          postdata.coustomTel=senddataArr[2];
          postdata.customEmail=senddataArr[3];
          postdata.address=senddataArr[4];
          postdata.customOtherdes=senddataArr[5];
          postdata.tPrice=senddataArr[6];
          postdata.secenArr=senddataArr[7];
          postdata.orderfunction=senddataArr[8];
          postdata.controlways=senddataArr[9];
        }
        this.$axios.post("/api/customMade.do",postdata).then(response=>{
        })
//        comfirmbox.style.display="none";
//        dialog_wrap.style.height="0px";
//        dialog_wrap.style.transition="all .4s ease-out";
//        dialog_cover.style.height="0px";
//        dialog_cover.style.transition="all .4s ease-out";
//        dialog_content.style.height="0px";
//        dialog_content.style.transition="all .4s ease-out";
//        dialog_content.style.opacity="0"
        displayDialog();
      },
      comfirmNo:function(){
//        dialog_wrap.style.height="0px";
//        dialog_wrap.style.transition="all .4s ease-out";
//        dialog_cover.style.height="0px";
//        dialog_cover.style.transition="all .4s ease-out";
//        dialog_content.style.height="0px";
//        dialog_content.style.transition="all .4s ease-out";
//        dialog_content.style.opacity="0"
//        comfirmbox.style.display="none";
        displayDialog();
      },
//      选择场景函数
      chosesenceshijian:function (values) {
        secenArr=values;
      },
//      选择功能
      selectFunc:function (valuef) {
        funsArr=valuef;
        this.totalprice= this.tempprice+this.funcprice*funsArr.length+this.controllway*controArr.length;
      },
//      选择控制方式
      choseControlway:function () {
        getCntroller();
        this.totalprice=this.tempprice+this.funcprice*funsArr.length+this.controllway*controArr.length;
      },
//      表单验证
      checkEmail:function (){
//        邮箱验证
        var mail=document.getElementById("customEmail");
        console.log(mail);
        var filter  = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if (filter.test(mail.value)) {
          document.getElementById("customEmailspan").innerHTML="";
        }
        else{
          document.getElementById("customEmailspan").innerHTML="邮件格式不正确，请重写"
          mail.focus();
          return false;
        }
      },
      checkTel:function(){
        //          手机验证
        var sMobile = document.getElementById("coustomTel");
        if(!(/^1[3|4|5|8][0-9]\d{4,8}$/.test(sMobile.value))){
          document.getElementById("customTelspan").innerHTML="手机号不完整请重写"
//            alert("不是完整的11位手机号或者正确的手机号前七位");
          document.getElementById("coustomTel").focus();
          return false;
        }
        else{
          document.getElementById("customTelspan").innerHTML="";
        }

      }
    },
  }
  //  ==================滚动条加载特效==============
//  window.onscroll=function(){
//    if(document.body.scrollTop>180){
//      console.log(111111);
//    }
////    第一步
//    var steep1=document.getElementsByClassName("titleorder")[0];
//    var uploadup=document.getElementById()
//  }
</script>

<style scoped>
  /*<!--top-->*/
  #diy_top{
    height: 300px;
    width: 1248px;
    margin: 0 auto;
  }
  #diy_top div:nth-child(1){
    float: left;
  }
  /*标题*/
  #diy_title{
    float: right;
    width: 20%;
    height: 300px;
    color:#5E5E5E;
    /*outline: dashed 1px red;*/
  }
  #diy_title h2:nth-child(1){
    margin-top: 40px;
  }
  #diy_title h3{
    font-size: 14px;
    font-weight: 400;
    margin-top: 10px;
    color:#797979;
  }
  #diy_title h3:nth-child(1){
    margin-top: 40px;
  }
  /*填写定制信息*/
  #sceenDiy{
    width: 100%;
    height:2110px;
    margin-top: 120px;
    background-color: rgba(204,204,204,.1);
  }
  #sceen_top{
    width: 30%;
    height: 4%;
    padding-top: 60px;
    margin: 0 auto;
    text-align: center;
    color:#5E5E5E ;
  }
  #sceen_top p{
    width: 70%;
    margin: 20px auto;
    color:#797979;
  }

  /*信息填写底框*/
  #sceen_setinfo{
    width: 90%;
    height:54% ;
    margin: 0 auto;
    margin-top: 7%;
    overflow: hidden;
    /*outline: 1px solid blue;*/
  }
  #sceen_left{
    width: 44%;
    height: 100%;
    margin-right: 1%;
    float: left;
    /*overflow: hidden;*/
    /*outline:1px solid grey;*/
  }
  #sceen_middle{
    width: 10%;
    height: 100%;
    margin-right: 1%;
    float: left;
    /*outline:1px solid grey;*/
  }
  #sceen_right{
    width: 44%;
    height: 100%;
    float: left;
    /*outline:1px solid grey;*/
  }
  /*=====================================左边信息=================*/
  .diy_title_wrap{
    margin-left:6%;
    width: 94%;
    /*outline: dashed 1px green;*/
  }
  /*标题*/
  .titleorder{
    width: 100%;
    margin-left: 20%;
    /*outline: solid 1px yellow;*/
  }
  #titleorder1{
    margin-bottom: 12%;
  }
  .titleorder2{
    height: 240px;
    overflow: hidden;
    margin-top: 20%;
  }
  /*上传图片*/
  #choseRoomimg{
    margin-bottom: 12%;
    height: 35px;
  }
  /*==============修改file原本样式*/
  .file {
    width: 70px;
    height: 30px;
    position: relative;
    display: inline-block;
    background: #FF7A54;
    border-radius: 3px;
    padding: 4px 12px;
    overflow: hidden;
    color: white;
    text-decoration: none;
    text-indent: 0;
    line-height: 30px;
    margin-left: 82%;
  }
  .file input {
    position: absolute;
    font-size: 100px;
    right: 0;
    top: 0;
    opacity: 0;
  }
  /*选择房间预览图片*/
  #roomimg{
    width: 500px;
    height: 305px;
  }
  #roomimg img{
    width: 100%;
  }

  #controlbox{
    width: 100%;
    height: 100%;
    margin-top: 5%;
    /*outline: 1px solid purple;*/
  }
  /*控制方式*/
  #controlbox{
    margin-left: 16%;
  }
  .controlway{
    width: 100px;
    height: 200px;
    margin-right: 10px;
    float: left;
    /*outline: 1px solid red;*/
  }
  .controlway img{
    display: block;
    width: 100%;
    height: 100px;
  }

  /*============================middle==================*/
  #sceen_middle{
    /*height: 100%;*/
    overflow: hidden;
    position: relative;
  }
  /*line*/
  #line{
    height: 98%;
    width: 0;
    border: 1px dashed black;
    margin-left: 50%;
    margin-top: 24%;
  }
  #sceen_middle ul{
    height: 100%;
    width: 15px;
    z-index: 10;
    position: absolute;
    top: 0;
    left: 45%;
    /*border: 1px dashed plum;*/
  }
  #sceen_middle ul li{
    list-style: none;
    margin-left: -13%;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    border: 1px solid #FF7A54;
    background-color: #FFFFFF;
  }

  #sceen_middle ul li:first-child{
    margin-top: 20px;
  }
  #sceen_middle ul li:nth-child(2){
    margin-top: 120px;
  }
  #sceen_middle ul li:nth-child(3){
    margin-top: 440px;
  }
  #sceen_middle ul li:nth-child(4){
    margin-top: 220px;
  }
  #sceen_middle ul li:nth-child(5){
    margin-top: 253px;
  }
  /*地址表单填写*/
  #writeorder{
    margin-left: 6%;
    margin-top: 5%;
  }
  #customOrder{
    width: 463px;
    /*width: 575px;*/
    /*height: 590px;*/
    margin: 0px auto;
    overflow: hidden;
    /*outline: 1px solid red;*/
  }
  #customerWrap{
    width: 100%;
    height: 89%;
    margin-top: 20px;
    border-radius: 5px;
    font-size: 0;
    background-color: rgba(215,215,215,.3);
    /*outline: 1px solid yellow;*/
  }
  #customerImfo{
    width: 80%;
    height: 100%;
    font-size: 14px;
    margin: 0px auto;
    margin-top: 25px;
    /*outline: 1px solid green;*/
  }
  #customerImfo input{
    /*width: 367px;*/
    width: 100%;
    height: 40px;
    margin-bottom: 30px;
    outline: none;
    border: none;
    border-radius: 3px;
    background-color: rgba(255,255,255,.4);
  }
  #address{
    padding-bottom: 40px;
  }
  #customerImfo select{
    width: 123px;
    height: 33px;
    outline: none;
    margin-bottom: 30px;
    margin-right: 23px;
    border: none;
  }
  #customerImfo textarea{
    /*width: 367px;*/
    width: 100%;
    height: 40px;
    outline: none;
    border: none;
    background-color: rgba(255,255,255,.4);
  }

  /*提交按钮*/
  #subup{
    width: 40%;
    margin: 40px auto;
  }


  /*======================右边==================*/
  .diy_title_wrap_r{
    width: 94%;
    margin-top: 145px;
    /*outline: dashed 1px green;*/
  }
  /*===============================选场景*/
  #sceenitems{
    width: 100%;
    height: 100%;
    margin-top: 13%;
    /*outline: 1px solid red;*/
  }

  /*========================================*/

  .titleorder_r{
    /*margin-bottom: 190px;*/
    margin-bottom:270px;
  }

  /*功能选择*/
  #funcWrap{
    width: 450px;
  }
  #funcWrap{
    margin-top: 12%;
  }
  #funcitemWrap{
    width: 100%;
    margin-left: 20%;
    margin-top: 8%;
    /*outline: 1px solid red;*/
  }

  /*第四步*/
  #dollar{
    margin-top: 5%;
    margin-left: 18%;
  }
  #dollar span{
    font-size: 20px;
    color:#FF7A54;
  }

  /*========================底部推荐产品===================*/
  #tuijianWrap{
    margin-top: 4%;
    padding-bottom: 20px;
  }
  #tuijian{
    width: 100%;
    /*height: 30px;*/
    /*outline: 1px solid red;*/
  }
  #tuijian div{
    /*float: left;*/
    display: inline-block;
    /*margin-right: 2%;*/
  }

  #tuijian div:nth-child(2){
    font-size: 18px;
    color:#FF7A54 ;
  }
  .bottom_line{
    width: 46.7%;
    height: 5px;
    border-top:1px solid #797979;
    /*background-color: #797979;*/
  }


  /*===============================弹框样式=================*/

  .dialog-wrap {
    position: fixed;
    width: 100%;
    /*height: 100%;*/
    top:0;
    left: 0;
    /*display: none;*/
    /*过渡效果*/
    height: 0px;

  }
  .dialog-cover {
    background: rgba(0, 0, 0, 0.31);
    position: fixed;
    z-index: 5;
    top: 0;
    left: 0;
    width: 100%;
    /*height: 100%;*/
    /*过渡效果*/
    height: 0px;
  }
  .dialog-content {
    width: 40%;
    opacity: .9;
    position: fixed;
    /*overflow: auto;*/
    overflow: hidden;
    background: #fff;
    top: 20%;
    left: 55%;
    margin-left: -25%;
    z-index: 10;
    border: 1px solid #969696;
    border-radius: 5px;
    line-height: 1.6;
    /*过渡效果*/
    height: 0px;
    opacity: 0;
  }
  .dialog-close {
    position: absolute;
    right:20%;
    top: 10%;
    width: 20px;
    height: 20px;
    text-align: center;
    cursor: pointer;
    color: white;
    font-size: 28px;
    opacity: 0;
  }
  .dialog-content p{
    width: 80%;
    margin-left: 5%;
    margin-top: 5%;
  }
  #wraning{
    width: 80%;
    margin-top: 5%;
    margin-left: 5%;
  }
  #wraning span b{
    font-size: 18px;
    color: red;
  }
  #btns{
    width: 100%;
    cursor: pointer;
    margin: 5% auto;
    height: 40px;
  }
  #btns button{
    cursor: pointer;
    width: 140px;
    height: 100%;
    border:none;
    outline: none;
    font-size: 16px;
    color: white;
    border-radius: 5px;
  }
  #btns button:first-child{
    background-color: #FF7A54;
    margin-left: 5%;
  }
  #btns button:last-child{
    margin-left: 30%;
  }

  /*验证提示样式*/
  #customEmailspan,#customTelspan{
    color:#FF7A54;
    padding-bottom: 5px;
  }
</style>
