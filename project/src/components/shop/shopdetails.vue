<template>
  <div>
    <div class="product">
      <div class="left">
        <div class="big">
          <img :src="'../../../static/images/'+productdata.g_img" alt="">
        </div>
        <img src="../../../static/images/Details1.jpg" alt="">
        <img src="../../../static/images/Details2.jpg" alt="">
        <img src="../../../static/images/Details3.jpg" alt="">
        <img src="../../../static/images/Details4.jpg" alt="">
      </div>
      <div class="right">
        <h4>单人直角沙发</h4>
        <p>产品货号：<span>S-M01-63-1-2</span></p>
        <p>价格：￥<span>4200.00</span></p>
        <p>选择尺寸</p>
        <ul class="size">
          <li>S</li>
          <li>M</li>
          <li>L</li>
          <li>XL</li>
        </ul>
        <br>
        <p id="colorr">选择颜色:</p>
        <ul class="color">
          <li class="one"></li>
          <li class="two"></li>
          <li class="three"></li>
          <li class="four"></li>
          <li class="five"></li>
        </ul>
        <p>发货周期: <span>家具制作周期为八周</span></p>
        <p>选择木料: <span class="kuang">美国白蜡木</span> <span  class="kuang">美国黑桃木</span></p>
        <span class="btn t">立即购买</span> <span class="btn o" @click="addetail(productdata)">&#xe512; 加入购物车</span>
        <ul class="share">
          <li>分享:</li>
          <li>&#xe68e;</li>
          <li>&#xe759;</li>
          <li>&#xe626;</li>
          <li>&#xe505;</li>
        </ul>
      </div>
    </div>
    <div class="productdetail">
      <div class="one">
        <img src="../../../static/images/166.jpg" alt="">
      </div>
      <div class="two">
        <img src="../../../static/images/167.jpg" alt="">
      </div>
    </div>

    <div id="line"></div>
    <h4>知道更多关于我们的产品</h4>
    <div class="bottom tomm">
      <product_specially class="list" v-for="item in productlist" :key="item.g_id" :productTitle="item.g_name" :productPrice="item.g_detail"
                         :imgsrc="item.g_img" whclass="b"
      ></product_specially>
    </div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  /*====商品特效=====*/
import product_specially from "../common/product_specially.vue"
    export default{
    name:"shopdetail",
        data () {
          return {
            productdata:{}
          }
        },
  props:{
//    productdata:{}
  },
      methods:{
        addetail(item){
            console.log(item.g_id)
//          this.$emit('clicked')  要写照着商城写就行
        }
      },
  computed:{
  ...mapGetters(['productlist'])
  },
  components: {
    product_specially
  },
  created () {
    var that=this;
    this.$axios.get("/api/shopdetail.do",{params:{id:this.$route.query.id}})
      .then(resp => {
        console.log(resp.data);
        that.productdata = resp.data[0]
      });
    this.$store.dispatch("getData",this)
//        this.$axios.get('/api/getdata.do')
//           .then(resp => {
//             this.$store.state.product.data = resp.data
//           })
  }
    }
</script>

<style scoped lang="less">
  @font-face {
    font-family: 'iconfont';
    src: url('../../../static/font/shopfont/iconfont.woff');
  }
  .product{
    margin-top: 65px;
    margin-left: 17%;
    overflow: hidden;
    font-family: 微软雅黑;
  }
  .left{
    width: 505px;
    height: 435px;
    float: left;
    /*border: 1px solid red;*/


    img{
      width: 110px;
      height: 78px;
      float: left;
      margin-top: 15px;
      border: 1px solid rgba(255, 69, 0, 0.87);
    }
    img:nth-of-type(2),img:nth-of-type(3),img:nth-of-type(4){
      margin-left: 21px;
      border: none;
    }
    .big{
      width: 504px;
      height: 338px;
      margin-top: -15px;
      img{
        width: 504px;
        height: 338px;
        border: none;
      }
    }
  }
  .right{
    width: 435px;
    height: 427px;
    /*border: 1px solid red;*/
    float: left;
    margin-left: 100px;
    font-size: 14px;
    text-align: left;
    h4{
      font-size: 18px;
    }
    p{
      margin-top: 15px;

      span{
        font-weight: 700;
        margin-left: 15px;
      }
    }
    ul{
      overflow: hidden;
      li{
        float: left;
      }
    }
    #colorr{
      margin-top: -5px;
    }
    .size{

      li{
        line-height: 35px;
        text-align: center;
        margin-left: 15px;
        margin-top: 5px;
        width: 35px;
        height: 35px;
        border-radius: 35px;
        border: 1px solid #505050;
      }
    }
    .color{
      li{
        width: 18px;
        margin-left: 20px;
        margin-top: 10px;
        height: 18px;
        border-radius: 18px;
        /*border: 1px solid rgba(255, 0, 0, 0.48);*/
      }
      .one{
        background-color: #ff9966;
      }
      .two{
        background-color: #6699ff;
      }
      .three{
        background-color: #9999ff;
      }
      .four{
        background-color: #666666;
      }
      .five{
        background-color: #cc3366;
      }
    }
    .kuang{

      padding: 5px 13px;
      border: 1px solid #b9b9b9;
      display: inline-block;
    }
    .btn{
      display: inline-block;
      padding: 10px 30px;
      margin-top: 15px;
      border: 1px solid #b9b9b9;
      border-radius: 2px;
    }
    .t{
      background-color: #e94949;
      color: white;
    }
    .o{
      background-color: #666666;
      color: white;
      margin-left: 20px;
      font-family: 'iconfont';
    }
    .share{
      margin-top: 35px;
      li{
        color: #9c9c9c;
        font-size: 20px;
        margin-left: 25px;
        font-family: 'iconfont';
      }
      li:nth-of-type(1){
        color:black;
        font-size: 14px;
        margin-left: 0;
      }
      li:nth-of-type(2){
        font-size: 21px;
      }
      li:nth-of-type(4){
        font-size: 16px;
      }
      li:nth-of-type(5){
        font-size: 16px;
        margin-top: 1px;
      }
    }
  }
  .productdetail{
    .one{
      margin-top: 15px;
    }
    display: block;
  }
  //知道更多
  #line{
    width: 80px;
    border: 0.5px solid black;
    margin: 0 auto;
  }
  .bottom{
    float: left;
    margin-top:25px;
    margin-left: 146px;
    .list{
      float: left;
      margin-left: 23px;
      margin-top: 25px;
      /*width: 235px;*/
      /*height: 272px;*/
      img{
        /*width: 235px;*/
        /*height: 191px;*/
      }
    }
  }
  h4{
    margin-top: 5px;
    font-family: 微软雅黑;
  }
  .tomm{
    margin-top:15px;
    margin-bottom:35px ;
  }
</style>
