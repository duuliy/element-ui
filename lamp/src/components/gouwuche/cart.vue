<template>
  <div id="cart">
    <p>购物车</p>
    <p>您有以下商品准备结账</p>

    <div class="goods">

      <nav>
        <p>商品名称</p>
        <p>数量</p>
        <p>小计</p>
        <p>操作</p>
      </nav>
      <div v-for="item in mycart" :key="item.id">
        <gouwuche :imgsrc="$host+item.imgsrc" :title="item.goodName" :UnitPrice="item.num*item.price" :color="item.yanse" :opera="item.gongneng"
                  :guige="item.guige" @addjia="addjia(item.goodId)" @jianfa="jian(item.goodId)" @delcart="shanchu(item.goodId)"  :shuliang="item.num" >
        </gouwuche>
      </div>

      <div class="clear">
        <div v-if="mycart.length==0" class="tishi">
          <span>你的购物车是空的</span>
        </div>
        <btn btntext="清空购物车" btnC="btn1a" @submit="clearCart"></btn>
      </div>
    </div>


    <div class="goodsmoney">
      <nav>
        <p>概要</p>
      </nav>

      <ul>
        <li>
          <div>
            <span>小计</span>
            <span>￥{{totalPrice}}</span>
          </div>
        </li>

        <li>
          <div>
            <span>数量</span>
            <span>{{totalNum}}</span>
          </div>

        </li>

        <li>
          <div>
            <span>折扣</span>
            <span>-￥{{goodsmoney[0].zhekou}}</span>
          </div>
        </li>

        <li>
          <div>
            <span>合计</span>
            <span class="cartprice">￥{{totalPrice}}</span>
          </div>
        </li>
      </ul>

      <div class="goodsbtn">
        <btn btntext="立即下单" btnC="btn1a" @submit="buy"></btn>
      </div>
    </div>

  </div>

</template>

<script>
  import {mapGetters,mapActions} from 'vuex'
  import gouwuche from '../common/gouwuche.vue'
  import btn from '../common/btn/btndemo.vue'
  export default {
    name: 'cart',
    data () {
        return {
        goodsmoney: [{
          zhekou: 0,
        }],
      }
    },
    computed:{
      ...mapGetters(['mycart','totalNum','totalPrice']),
    },
    methods:{
      hanshu(canshu){
        console.log("ininin")
        this.chuancan(canshu);
      },
      addjia(id){
        this.chuancan(id);
      },
      jian(id){
        this.gouwuchejian(id)
      },
      shanchu(id){
        console.log("删除",id);
        this.shanchu(id)
      },
      buy(){
        this.$router.push('/placeOrder')
      },
      ...mapActions(['chuancan','gouwuchejian','shanchu','clearCart'])
    },

    components: {
      gouwuche: gouwuche,
      btn: btn
    },
    created:function () {
      if(this.$route.query.id!=undefined){
        console.log(this.$route.query.id)
//        this.hanshu(this.$route.query.id)
      }
    }

  }

</script>

<style scoped>
  #cart {
    width: 92.81%;
    margin: auto;
    overflow: hidden;
    margin-bottom: 200px;
  }
  .tishi{
    width: 800px;
    text-align: center;
    margin-bottom: 20px;
    color: #5E5E5E;
  }

  .clear{
    margin-top: 20px;
  }

  #cart > p {
    color: #5E5E5E;
  }

  #cart > p:first-child {
    font-size: 28px;
  }

  #cart > p:last-child, .ulleft > li {
    font-size: 14px;
  }

  #cart > p {
    margin-top: 20px
  }

  .goods {
    width: 64.6%;
    /*height: 200px;*/
    float: left;
    margin-top: 30px
  }

  .goodsmoney {
    /*height: 200px;*/
    float: right;
    width: 26.3%;
    margin-top: 30px
  }

  nav {
    width: 100%;
    height: 30px;
    background-color: #f0f0f0;
    border: 1px solid #f0f0f0;
    margin-left: -1px;
  }

  nav > p {
    float: left;
    line-height: 30px;
    text-align: center;
    font-size: 15px;
    color: #797979
  }

  nav > p:nth-child(1) {
    width: 55.75%;
  }

  nav > p:nth-child(2), nav > p:nth-child(3),
  nav > p:nth-child(4) {
    width: 14.7%;
  }

  /*右边*/
  .goodsmoney > nav > p {
    width: 30%;
    font-size: 15px;
  }

  .goodsmoney > ul {
    height: 200px;
  }

  .goodsmoney > ul > li {
    list-style: none;
    height: 50px;
    outline: 1px solid #ededed;
  }

  .goodsmoney > ul > li:nth-child(1),
  .goodsmoney > ul > li:nth-child(2), .goodsmoney > ul > li:nth-child(3) {
    border-bottom: none;
    border-top: none;
  }

  li > div {
    height: 50px;
    width: 80%;
    margin: auto;
  }

  li > div > span {
    line-height: 50px;
    color: #797979;
    font-size: 14px;
  }

  li > div > span:first-child {
    float: left;
  }

  li > div > span:last-child {
    float: right;
  }

  .cartprice {
    color: #ff6700;
  }

  .goodsbtn {
    margin-top: 30px;
  }


</style>
