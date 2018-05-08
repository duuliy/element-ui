<template>
    <div id="table">
        <table cellspacing="0" cellpadding="0">
          <tr>
            <th width="40%">商品名称</th>
            <th>数量</th>
            <th>单价</th>
            <th>小计</th>
          </tr>
          <tr v-for="item in mycart">
            <td width="40%" class="myTd">{{item.goodName}}，功能支持：{{item.gongneng}}，颜色：{{item.yanse}}</td>
            <td>x{{item.num}}</td>
            <td>￥{{item.price}}</td>
            <td class="total">￥{{item.num*item.price}}</td>
          </tr>
        </table>
      <!--<h1 >应付金额: <span>￥{{totalPrice}}</span></h1>-->
      <!--<div class="button"><btn btnC="btn2a" btntext="立即支付"></btn></div>-->

    </div>
</template>

<script>
  import {mapGetters,mapActions} from 'vuex'
  import btn from '../btn/btndemo.vue'
  export default {
      name: 'table',
      data(){
        return {
          payArr: [{id: 1, message: "时尚智能灯，功能支持：自调亮度+智能调色，颜色：深空灰规格：一", math: 2, perice: 1366},
            {id: 1, message: "时尚智能灯，功能支持：自调亮度+智能调色，颜色：深空灰规格：一", math: 3, perice: 1000}]
          ,
          total:4545
        }
      },
    computed:{
      ...mapGetters(['mycart','totalNum','totalPrice']),
    },
    components:{
      btn:btn
    }
    }
</script>

<style scoped>
  table{
    width:90%;
    margin: 0 auto;
    color:rgba(51,51,51,0.8) ;
    padding-bottom:2%;
    padding-top:5%;
  }
  tr{
    border:1px solid rgba(161, 161, 161, 0.3);
  }
  th{
    font-size: 15px;
    font-weight: 500;
    height: 30px;
    line-height: 30px;
    background-color:rgba(161, 161, 161, 0.3) ;
  }
  td{
    text-align: center;
    font-size: 14px;
    height: 50px;
    border-bottom:1px solid rgba(161, 161, 161, 0.3);
    border-right:1px solid rgba(161, 161, 161, 0.3);
  }
  .myTd{
    border-left:1px solid rgba(161, 161, 161, 0.3);
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
    color: #ff7a55;
    padding-left: 5%;
  }
  .button{
    float:left;
    margin-left:45%;
    padding-top:1%;
  }
</style>
