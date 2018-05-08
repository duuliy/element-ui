<template>
  <div id="placeOrder">
    <div id="form">
    <fieldset>
      <legend id="one" >收货地址</legend>
      <!--=====================================有地址-->
      <div v-for="(item,index) in myaddress">
        <input id="radio" type="radio"  name="textbox" @change="change(index)"> <span class="spanRadio">{{item.consi_name}}{{item.consi_phone}}{{item.address}}</span>
      </div>
      <div v-for="item in mydefault">
        <input type="text"  id="name" :placeholder="item.consi_name">
        <input type="text" :placeholder="item.consi_phone" id="telephone">
        <div class="options">
          <v-distpicker :placeholders="placeholders" @selected="onSelected"></v-distpicker>
        </div>
        <input type="text" :placeholder="item.address" id="address" class="address">
      </div>

    </fieldset>
    <fieldset id="two">
      <legend>支付方式</legend>
      <div id="pay">
        <img @click="choose(3)" src="static/indeximages/zhifubao.png" alt="">
        <img @click="choose(4)" src="static/indeximages/weixin.png" alt="">
        <img @click="choose(5)" src="static/indeximages/yinlian.png" alt="">
      </div>
    </fieldset>
    <fieldset id="three">
      <legend>购买清单</legend>
      <htable></htable>
    </fieldset>
    <fieldset id="four">
      <legend>支付订单</legend>
      <h1 >应付金额: <span class="span">￥{{totalPrice}}</span></h1>
      <div class="button" @click="addads"><btn btnC="btn2a" btntext="立即支付" @submit="clearCart"></btn></div>
    </fieldset>

    <!--模态框-->
    <div id="mtk">
      <motaikuang @comfirmNo="comfirmNo">
        <div slot="myslot">
          <div class="dialog-content">
            <h1>支付成功</h1>
            <h5>3秒后跳转。。。。</h5>
          </div>
        </div>
      </motaikuang>
    </div>
    </div>
  </div>
</template>

<script>
  import {mapGetters,mapActions} from 'vuex'
  import motaikuang from './motaikuang.vue'
  import VDistpicker from 'v-distpicker'
  import btn from '../btn/btndemo.vue'
  import htable from '../table/table.vue'
  export default {
    name: 'placeOrder',
    data(){
      return {
        myaddress:[],
        mydefault:[{consi_name:'姓名1',consi_phone:'手机',address:'详细地址',default:0}],
//              myaddress:[]

        total:4545,
        placeArr:[],
        placeholders: {
          province: '------- 省 --------',
          city: '--- 市 ---',
          area: '--- 区 ---',
        }
      }
    },
    components:{
      htable:htable,
      btn:btn,
      motaikuang: motaikuang,
      VDistpicker:VDistpicker
    },
    computed:{
      ...mapGetters(['totalNum','totalPrice'])
    },
    created(){
      //-----------------------------获取用户地址userid
      var userid=sessionStorage.userId;
      this.$axios.post('/api/getAddress.do',{userid:userid}).then(resp=>{
        this.myaddress=resp.data;
        let bianliang=resp.data.find(item=>item.is_default==1);

        console.log(this.myaddress);
        console.log(bianliang.city);
        this.mydefault[0].consi_name=bianliang.consi_name;
        this.mydefault[0].consi_phone=bianliang.consi_phone;
        this.placeholders.province=bianliang.state;
        this.placeholders.city=bianliang.city;
        this.placeholders.area=bianliang.district;
        this.mydefault[0].address=bianliang.address
        console.log(this.mydefault[0].address)
      });

    },
    methods:{
      //===================================点击按钮变化
      change(obj){
        for(var i=0;i<document.getElementsByClassName("spanRadio").length;i++) {
          document.getElementsByClassName("spanRadio")[i].style.color = "rgba(51,51,51,0.7)";
          document.getElementsByClassName("spanRadio")[obj].style.color = "#ff7a55";
        }
        //用户选择不同，我的input框值不同
        console.log(this.myaddress[obj]);
        this.mydefault=[];
        this.mydefault.push(this.myaddress[obj]);
      },
      onSelected(placeholders) {
        //  接收省市区数组
        this.placeArr.push(placeholders);
        console.log("place:", this.placeArr);
      },
      //------------------立即支付
      addads() {
//        document.getElementById("mtk").style.display="block";

        dialog_wrap=document.getElementsByClassName("dialog-wrap")[0];
        dialog_content=document.getElementsByClassName("dialog-content")[0];
        console.log(dialog_content);
        dialog_cover=document.getElementsByClassName("dialog-cover")[0];
        dialog_close=document.getElementsByClassName("dialog-close")[0];

        console.log(this.placeArr);//地区
        //--------------------------------------------用户输入

        var name= document.getElementById("name").value;
        var telephone= document.getElementById("telephone").value;
        var address= document.getElementById("address").value;
        console.log(name,telephone,address);


        showDialog();
//------------跳转页面b
        setTimeout("top.location.href = 'http://localhost:8080/#/'",3000);


      },
      //=====================================选择支付方式
      choose(obj){
        for(var i=0;i<document.getElementsByTagName("img").length;i++){
          document.getElementsByTagName("img")[i].style.border="solid 1px rgba(161, 161, 161, 0.5)";
          document.getElementsByTagName("img")[i].style.cursor="pointer";
          document.getElementsByTagName("img")[obj].style.border="solid 1px #ff7a55";
        }
      },

      comfirmNo(){
        displayDialog();
        setTimeout("top.location.href = 'http://localhost:8080/#/placeOrder'",3000);
      },

      ...mapActions(['clearCart'])
    }
  }


  //  获取dialog-wrap，dialog-cover,dialog-content
  var dialog_wrap,dialog_cover,dialog_content,dialog_close;

  function showDialog(){
    dialog_wrap.style.height="100%";
    dialog_wrap.style.transition="all .4s ease-out";
    dialog_cover.style.height="100%";
    dialog_content.style.height="200px";
    dialog_content.style.transition="all .4s ease-out";
    dialog_content.style.opacity="1";
    dialog_close.style.opacity="1"
  }
  function displayDialog(){
    dialog_wrap.style.height="0px";
    dialog_wrap.style.transition="all .4s ease-out";
    dialog_cover.style.height="0px";
    dialog_content.style.height="0px";
    dialog_content.style.transition="all .4s ease-out";
    dialog_content.style.opacity="0";
    dialog_close.style.opacity="0"
  }


</script>

<style scoped>
  #placeOrder{
    width: 100%;
  }
  #form{
    width:75%;
    margin: 0 auto;
    margin-top: 3%;
  }

  legend{
    margin-left:4%;
    font-size:15px;
    font-weight: 600;
    color: rgba(51, 51, 51, 0.8);
  }
  fieldset{
    border:solid 1px rgba(161, 161, 161, 0.5);
  }
  #radio{
    width: 15px;
    height: 15px;
  }
  #one{
    position: relative;
  }
  h5{
    margin-top:2%;
    width:25%;
    height:60px;
    margin-left:4%;
    line-height:45px;
    font-size: 16px;
    color:rgba(51,51,51,.8);
  }
  input{
    margin-top:3%;
    width:27%;
    height: 35px;
    margin-left:10%;
    line-height: 35px;
    padding-left:2%;
    border-radius: 3px;
    font-size: 16px;
    border:solid 1px rgba(161, 161, 161, 0.5);
  }
  input::-webkit-input-placeholder{
    color: rgba(0, 0, 0, 0.76)
  }
  .options{
    margin-top:3%;
    padding-left:10%;
  }
  .address{
    margin-bottom:4%;
  }

  #two{
    margin-top: 3%;
    height: 150px;
    line-height:80px;
  }
  #pay{
    margin-left:8%;
  }
  img{
    width:3.5%;
    display: block;
    float:left;
    margin-left:3%;
    padding:0.4%;
    border:1px solid rgba(161, 161, 161, 0.5);
  }
  #pay img:nth-child(1){
    border:1px solid #ff7a55;
  }
  #three{
    margin-top:5%;
  }
  .dialog-content>h5{
    width:90%;
    color: #ff7a55;
    font-size: 15px;
    text-align: center;
    float:left;
  }
  .dialog-content>h1{
    font-size: 18px;
    font-weight: bold;
    padding-top: 10%;
    padding-bottom:5%;
    text-align: center;
    width: 80%;
  }
  h1{
    float:left;
    width: 30%;
    font-size: 15px;
    font-weight: bold;
    padding-left: 5%;
    padding-top:2%;
    padding-bottom:2%;
  }
  span{
    font-size: 15px;
    font-weight: bold;
    padding-left:2%;
    color: rgba(51,51,51,0.7);
  }
  #four{
    margin-top: 5%;
  }
  .span{
    font-size: 15px;
    font-weight: bold;
    color: #ff7a55;
    padding-left: 5%;
  }
  .button{
    float:left;
    margin-left:45%;
    padding-top:1%;
  }
  /*模态框*/
  #mtk{
    /*display: none;*/
    height: 0;
  }
  /*.dialog-content {*/
    /*width: 40%;*/
    /*opacity: .9;*/
    /*position: fixed;*/
    /*overflow: auto;*/
    /*background: #fff;*/
    /*top: 20%;*/
    /*left: 55%;*/
    /*margin-left: -25%;*/
    /*z-index: 10;*/
    /*border: 1px solid #969696;*/
    /*border-radius: 5px;*/
    /*line-height: 1.6;*/
  /*}*/
  #btns{
    width: 100%;
    cursor: pointer;
    margin: 5% auto;
    height: 40px;
  }
  .lastipt{
    width: 407px;
  }
  .dialog-content p{
    width: 80%;
    margin-left: 5%;
    margin-top: 5%;
  }
  #btns button:first-child{
    background-color: #FF7A54;
    margin-left: 5%;
  }
  #btns button:last-child{
    margin-left: 30%;
  }

  .dialog-content>input{
    height:40px;
    outline: none;
    display: block;
    margin-top: 20px;
    border-radius: 5px;
    border: 1px solid #d7d7d7;
    margin-left: 27px;
  }
  .dialog-content>div{
    margin-top: 20px;
    margin-left: 27px;
  }
</style>
