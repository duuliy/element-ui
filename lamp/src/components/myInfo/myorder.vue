<template>
    <div class="my-order">
      <div class="lay-div">
        <div class="lay-center">
          <div class="lay-title">
            <p>我的订单</p>
          </div>
        </div>
      </div>
      <div class="lay-div">
        <div class="lay-center">
          <div class="cont-title">
            <!--<button @click="myall(0)" class="orderbtn">全部订单</button>-->
            <!--<button @click="myall(1)" class="orderbtn">待付款</button>-->
            <!--<button @click="myall(2)" class="orderbtn">待收货</button>-->
          </div>
          <div class="cont-li orderLi">
            <ul class="ul-title orderUl">
              <li>订单编号</li>
              <li>创建时间</li>
              <li class="orderInfo">商品详情</li>
              <li>收货人</li>
              <li>金额</li>
              <li>付款状态</li>
              <li>发货状态</li>
              <li>操作</li>
            </ul>
            <div v-for="item in myorder" :key="item.id">
                <ordercom :orderdate="item.delivery_time" :orders="item.order_id"
                          :ordername="item.u_name" :orderprice="item.money"
                          :ispay="item.is_pay" :issend="item.is_send">
                  <span slot="headerslot" @click="search(item.order_id)" class="search">查看</span>
                </ordercom>

            </div>
          </div>
        </div>
      </div>
      <!--模态框-->
      <div class="dialog-wrap">
      <div class="dialog-cover" >
        <div class="dialog-content">
          <p class="dialog-close" @click="comfirmNo">x</p>
          <div class="line">&nbsp;&nbsp;&nbsp;订单商品</div>
            <table  class="goodlist" cellspacing="0" cellpadding="0">
              <tr class="goodslist" >
                <td>商品名称</td>
                <td>商品数量</td>
              </tr>
              <tr v-for="item in goodsli">
                <td>{{item.NAME}}</td>
                <td>{{item.number}}</td>
              </tr>
            </table>
          <div id="btns">
            <button @click="comfirmNo">确认</button>
            <button @click="comfirmNo">取消</button>
          </div>
        </div>

      </div>
      </div>
    </div>


</template>

<script type="es6">
  import ordercom from './ordercom.vue'
    export default {
        name: '',
        data() {
            return {
                myorder:[],
              goodsli:[]
            }
        },
      components: {
        ordercom: ordercom
      },
      methods: {
        myall (obj) {
          var btn=document.getElementsByClassName("orderbtn");
          for(var i=0;i<btn.length;i++){
              if(obj!=i){
                  btn[i].style.color='#797979'
              }else{
                  btn[i].style.color='#ff7a54'
              }
          }
          //if(obj==1){
          //  for(var j=0;j<this.myorder.lenght;j++){
          //    if(this.myorder[j].is_pay==0){
          //      this.myorder.splice(j,1)
          //    }
          //  }
          //}
          //if(obj==2){
          //  for(var j=0;j<this.myorder.lenght;j++){
          //    if(this.myorder[j].is_send==0){
          //      this.myorder.splice(j,1)
          //    }
          //  }
          //}
          //if(obj==0){
          //  this.myorder=this.neworder;
          //}
        },
        search (a) {
          dialog_wrap=document.getElementsByClassName("dialog-wrap")[0];
          dialog_cover=document.getElementsByClassName("dialog-cover")[0];
          dialog_content=document.getElementsByClassName("dialog-content")[0];
          showDialog();
          this.$axios.get('/api/getOrderGoods.do?order_id='+a).then(resp=>{
            this.goodsli = resp.data;
            console.log(resp.data)
          })
        },
        comfirmNo() {
          displayDialog()
        }
      },
      created () {
        this.$axios.get('/api/getMeOrder.do',{params:{user_id:sessionStorage.userId}}).then(resp=>{
          this.myorder = resp.data;
          //console.log(resp.data)
        })
      }
    }
  function showDialog(){
    dialog_wrap.style.height="100%";
    dialog_wrap.style.transition="all .4s ease-out";
    dialog_cover.style.height="100%";
    dialog_cover.style.transition="all .4s ease-out";
    dialog_content.style.height="330px";
    dialog_content.style.transition="all .4s ease-out";
    dialog_content.style.opacity="1"
  }
  function displayDialog(){
    dialog_wrap.style.height="0px";
    dialog_wrap.style.transition="all .4s ease-out";
    dialog_cover.style.height="0px";
    dialog_cover.style.transition="all .4s ease-out";
    dialog_content.style.height="0px";
    dialog_content.style.transition="all .4s ease-out";
    dialog_content.style.opacity="0"
  }
  //  获取dialog-wrap，dialog-cover,dialog-content
  var dialog_wrap,dialog_cover,dialog_content;

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  @import "../../assets/less/myinfo.less";
  .my-order{
    height: auto;
  }
  .search{
    color: #FF7A54;
  }
  .orderUl{
    height: 30px;
    line-height: 30px;
    margin-bottom: 20px;
  }
  .orderUl>li:first-child{
    width: 10%;
  }
  .orderUl>li:nth-child(2){
    width: 20%;
  }
  .orderUl>li:nth-child(3){
    width: 20%;
  }
  .orderUl>li:nth-child(4){
    width: 10%;
  }
  .orderUl>li:nth-child(5){
    width: 10%;
  }
  .orderUl>li:nth-child(6){
    width: 10%;
  }
  .orderUl>li:nth-child(7){
    width: 10%;
  }
  .orderUl>li:nth-child(8){
    width: 10%;
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
    right:3%;
    top: 3%;
    height: 20px;
    line-height: 28px;
    text-align: center;
    cursor: pointer;
    color: #FF7A54;
    font-size: 28px;
  }
  .line{
    font-size: 16px;
    height: 50px;
    line-height: 50px;
    width: 100%;
    color: #FF7A54;
  }
  .goodlist{
    width: 100%;
    margin-top: 10px;
    text-align: center;
    height: 150px;

  }
  .goodslist{
    font-size: 14px;
    line-height: 30px;
    height: 30px;
    /*margin-left: 30px;*/
    list-style: none;

  }
  .goodslist>td{
    border-bottom: 1px solid #FF7A54;
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
</style>
